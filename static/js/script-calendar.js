const app = angular.module('dateTimeApp', []);

app.controller('dateTimeCtrl', function ($scope) {
	const ctrl = this;

	ctrl.selected_date = new Date();
	ctrl.selected_date.setHours(0);
	ctrl.selected_date.setMinutes(0);

	ctrl.updateDate = function (newDate) {
		//console.log(newDate);
	};
});

// Date Picker
app.directive('datePicker', function ($timeout, $window) {
	return {
		restrict: 'AE',
		scope: {
			selecteddate: "=",
			updatefn: "&",
			open: "=",
			datepickerTitle: "@",
			customMessage: "@",
			picktime: "@",
			pickdate: "@",
			pickpast: '=',
			mondayfirst: '@',
		},
		transclude: true,
		link: function (scope, element, attrs, ctrl, transclude) {
			transclude(scope, function (clone, scope) {
				element.append(clone);
			});

			if (!scope.selecteddate) {
				scope.selecteddate = new Date();
			}

			if (attrs.datepickerTitle) {
				scope.datepicker_title = attrs.datepickerTitle;
			}

			scope.days = [{
					"long": "Sunday",
					"short": "Sun"
				},
				{
					"long": "Monday",
					"short": "Mon"
				},
				{
					"long": "Tuesday",
					"short": "Tue"
				},
				{
					"long": "Wednesday",
					"short": "Wed"
				},
				{
					"long": "Thursday",
					"short": "Thu"
				},
				{
					"long": "Friday",
					"short": "Fri"
				},
				{
					"long": "Saturday",
					"short": "Sat"
				},
			];
			if (scope.mondayfirst == 'true') {
				var sunday = scope.days[0];
				scope.days.shift();
				scope.days.push(sunday);
			}

			scope.monthNames = [
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			];

			function getSelected() {
				if (scope.currentViewDate.getMonth() === scope.localdate.getMonth()) {
					if (scope.currentViewDate.getFullYear() === scope.localdate.getFullYear()) {
						for (let number in scope.month) {
							if (scope.month[number].daydate === scope.localdate.getDate()) {
								scope.month[number].selected = true;
								if (scope.mondayfirst === 'true') {
									if (parseInt(number) === 0) {
										number = 6;
									} else {
										number = number - 1;
									}
								}
								scope.selectedDay = scope.days[scope.month[number].dayname].long;
							}
						}
					}
				}
			}

			async function fetchMoviesJSON() {
				const response = await fetch('/studio/bookings/close/');
				if (response.ok) {
				    const data = await response.json();
				    const reposList = data.map(data => data.date);
				    getDaysInMonth(reposList[0])
				    getSelected();
				    scope.$apply();
                } else {
                    var headerColor = $('.datepicker .datepicker-header');
						headerColor.css({
							background: '#34495e'
						});
						scope.timeString = "- Too many requests. Try after a day.";
                    getDaysInMonth(new Date())
				    getSelected();
				    scope.$apply();
                }
			}

			function getDaysInMonth(bookingClose) {
				var month = scope.currentViewDate.getMonth();
				var date = new Date(scope.currentViewDate.getFullYear(), month, 1);
				var days = [];
				var today = new Date();
				while (date.getMonth() === month) {
					var showday = true;
					if (!scope.pickpast && date < today) {
						showday = false;
					}
					if (!scope.pickpast && date > new Date(bookingClose)) {
						showday = false;
					}
					if (today.getDate() == date.getDate() &&
						today.getYear() == date.getYear() &&
						today.getMonth() == date.getMonth()) {
						showday = true;
					}
					var day = new Date(date);
					var dayname = day.getDay();
					var daydate = day.getDate();
					days.push({
						'dayname': dayname,
						'daydate': daydate,
						'showday': showday
					});
					date.setDate(date.getDate() + 1);
				}
				scope.month = days;
			}

			function initializeDate() {
				scope.currentViewDate = new Date(scope.localdate);
				scope.currentMonthName = function () {
					return scope.monthNames[scope.currentViewDate.getMonth()];
				};
				//                getDaysInMonth();
				//                getSelected();
				fetchMoviesJSON();
			}

			// Takes selected time and date and combines them into a date object
			function getDateAndTime(flag) {
				if (!flag) {
					var time = scope.time.split(':');
				} else {
					var time = scope.endTime.split(':');
					time[0] = (parseInt(time[0]) + 1).toString();
				}
				var localdate = convertFromUTC(scope.selecteddate);
				return new Date(localdate.getFullYear(), localdate.getMonth(), localdate.getDate(), time[0], time[1]);
			}

			// Convert to UTC to account for different time zones
			function convertToUTC(localdate) {
				var date_obj = getDateAndTime(false);
				var utcdate = new Date(date_obj.getUTCFullYear(), date_obj.getUTCMonth(), date_obj.getUTCDate(), date_obj.getUTCHours(), date_obj.getUTCMinutes());
				return utcdate;
			}
			// Convert from UTC to account for different time zones
			function convertFromUTC(utcdate) {
				localdate = new Date(utcdate);
				return localdate;
			}

			scope.$watch('open', function () {
				if (scope.selecteddate !== undefined && scope.selecteddate !== null) {
					scope.localdate = convertFromUTC(scope.selecteddate);
				} else {
					scope.localdate = new Date();
					scope.localdate.setMinutes(Math.round(scope.localdate.getMinutes() / 60) * 30);
				}
				initializeDate();
			});

			scope.selectDate = function (day) {

				if (scope.pickdate == "true" && day.showday) {
					for (var number in scope.month) {
						var item = scope.month[number];
						if (item.selected === true) {
							item.selected = false;
						}
					}
					day.selected = true;
					scope.selectedDay = scope.days[day.dayname].long;
					scope.localdate = new Date(scope.currentViewDate.getFullYear(), scope.currentViewDate.getMonth(), day.daydate);
					initializeDate(scope.localdate);
					scope.updateDate();
				}
			};

			scope.updateDate = function () {
				if (scope.localdate) {
					var newdate = scope.localdate;
					scope.updatefn({
						newdate: newdate
					});
				}
				scope.arrayTime = [];
				scope.arrayTimeString = new Map();
				scope.bookingPlugin.destroy();
				var bookigResponse = new XMLHttpRequest();
				bookigResponse.onreadystatechange = function () {
					if (bookigResponse.readyState === 4 && bookigResponse.status == 200) {
						scope.bookingJson = JSON.parse(bookigResponse.responseText);
						$('#select').timeselector(scope.bookingJson);
					}
				};

				bookigResponse.open('GET', '/studio/bookings/' + formatDate(scope.localdate)  + '/', true);
				bookigResponse.send();
			};

			scope.moveForward = function () {
				scope.currentViewDate.setMonth(scope.currentViewDate.getMonth() + 1);
				if (scope.currentViewDate.getMonth() == 12) {
					scope.currentViewDate.setDate(scope.currentViewDate.getFullYear() + 1, 0, 1);
				}
				//                getDaysInMonth();
				//                getSelected();
				fetchMoviesJSON();
			};

			scope.moveBack = function () {
				scope.currentViewDate.setMonth(scope.currentViewDate.getMonth() - 1);
				if (scope.currentViewDate.getMonth() == -1) {
					scope.currentViewDate.setDate(scope.currentViewDate.getFullYear() - 1, 0, 1);
				}
				//                getDaysInMonth();
				//                getSelected();
				fetchMoviesJSON();
			};

			scope.calcOffset = function (day, index) {
				if (index === 0) {
					var offset = (day.dayname * 14.2857142) + '%';
					if (scope.mondayfirst == 'true') {
						offset = ((day.dayname - 1) * 14.2857142) + '%';
					}
					return offset;
				}
			};

			///////////////////////////////////////////////
			// Check size of parent element, apply class //
			///////////////////////////////////////////////
			scope.checkWidth = function (apply) {
				var parent_width = element.parent().width();
				if (parent_width < 620) {
					scope.compact = true;
				} else {
					scope.compact = false;
				}
				if (apply) {
					scope.$apply();
				}
			};
			scope.checkWidth(false);

			function formatDate(date) {
				var d = new Date(date),
					month = '' + (d.getMonth() + 1),
					day = '' + d.getDate(),
					year = d.getFullYear();

				if (month.length < 2)
					month = '0' + month;
				if (day.length < 2)
					day = '0' + day;

				return [year, month, day].join('-');
			}


			scope.pluginName = "timeselector";
			scope.defaults = {
				propertyName: "timeselector",
				src: null,
				orgElement: null,
				checkedItems: [],
				// custom callback events
				onError: function (error) {}
			};


			function Plugin(element, options) {
				this.element = element;
				this.selector = null;
				this.options = $.extend({}, scope.defaults, options);
				this._defaults = scope.defaults;
				this._name = scope.pluginName;
				this.init();
			}

			Plugin.prototype = {
				init: function () {
					var that = this;
					var self = $(that.element);
					that.options.src = that.element.getAttribute('data-src');
					that.selector = that.createFromJson(that.options.data);
					that.options.orgElement = that.element.parentNode.replaceChild(that.selector, that.element);
					$(that.selector).addClass(that._name);
				},
				createFromJson: function (options) {
					var that = this;
					var select = document.createElement('select');
					var popup = document.createElement('div');
					var header = document.createElement('div');
					var search = document.createElement('span');
					var overlay = document.createElement('span');
					overlay.className = 'timeselector-overlay';
					var shadow = document.createElement('span');
					shadow.className = 'timeselector-shadow';
					var placeholder = document.createTextNode('Time');
					search.className = 'timeselector-search';
					search.appendChild(shadow);
					search.appendChild(overlay);
					search.appendChild(placeholder);
					popup.appendChild(search);
					var menu = document.createElement('ul');
					select.style.display = 'none';
					menu.className = 'timeselector-list';
					var box = document.createElement('div');
					box.className = 'timeselector-menu';
					box.appendChild(menu);
					popup.appendChild(box);
					options.optgroups.forEach(function (optgroup, index) {


						var menuItem = document.createElement('li');
						//menuItem.className('header');
						var header = document.createElement('span');
						header.className = 'timeselector-header';

						if (optgroup.options.length == 0){
			                   var caption = document.createTextNode("All slots are booked");
						} else {
						       var caption = document.createTextNode(optgroup.label);
						}
						header.appendChild(caption);
						menuItem.appendChild(header);
						var menuItems = document.createElement('ul');
						menuItems.className = 'timeselector-optgroup';
						menuItem.appendChild(menuItems);
						menu.appendChild(menuItem);

						optgroup.options.forEach(function (option, index) {
							var opt = new Option(option.text, option.value, option.defaultSelected, option.selected);
							select.options.add(opt);
							var item = document.createElement('li');
							var label = document.createElement('label');
							label.setAttribute("for", option.value);
							var checkbox = document.createElement('input');
							$(checkbox).data(option);
							checkbox.setAttribute('type', 'checkbox');

							checkbox.addEventListener('change', function (event) {
								var checkbox = event.target;
								var $el = $(event.srcElement);
								if (checkbox.checked) {
									that.options.checkedItems.push(event.srcElement);
									scope.arrayTime.push(parseInt(event.srcElement.id));
									scope.arrayTimeString.set(parseInt(event.srcElement.id), $el.data().text);
									placeholder.nodeValue = "Selected: " + that.options.checkedItems.length + " hours";

								} else {
									that.options.checkedItems.pop();
									var index = scope.arrayTime.indexOf($el.data().value);
									scope.arrayTimeString.delete($el.data().value);
									if (index !== -1) {
										scope.arrayTime.splice(index, 1);
									}
									that.options.checkedItems = that.options.checkedItems.filter(function (items, index) {
										return items.value != $el.data().value;
									});
									placeholder.nodeValue = "Selected: " + that.options.checkedItems.length + " hours";
								}
								scope.timeSorter();
							});
							checkbox.id = option.value;
							var caption = document.createTextNode(option.text);
							label.appendChild(caption);
							item.appendChild(checkbox);
							item.appendChild(label);
							menuItems.appendChild(item);
						});
					});
					return popup;
				},
				onAddFriend: function (data) {
					var that = this;
					return that.options.onAddFriend(that, data);
				},
				onRemoveFriend: function (data) {
					var that = this;
					var self = $(that.element);
					return that.options.onRemoveFriend(data);
				},
				destroy: function () {
					var that = this;
					$(that.element).unbind("destroyed", that.teardown);
					that.teardown();
				},
				teardown: function () {
					var that = this;
					$(that.element).removeClass(that._name);
					$(that.selector).replaceWith(that.options.orgElement);
					$(that.element).removeData(that._name);
					that.unbind();
					that.element = null;
				},
				bind: function () {},
				unbind: function () {}
			};

			function replaceAll(string, search, replace) {
				return string.split(search).join(replace);
			}


			//////////////////////
			// Time Picker Code //
			//////////////////////
			if (scope.picktime) {

				scope.time = "12:00";
				scope.endTime = "12:00";
				scope.arrayTime = [];
				scope.arrayTimeString = new Map();
				scope.timeString = ""

				scope.checkout = function () {
					scope.arrayTime.sort(function (a, b) {
						return a - b
					});
					var length = scope.arrayTime.length;
					if (length <= 5 && consecutive()) {
						document.getElementById("save-button").innerText = "Loading! Stay Awsm!";
					    document.getElementById('save-button').style.pointerEvents = 'none';

						scope.time = scope.arrayTimeString.get(scope.arrayTime[0]);
						scope.endTime = scope.arrayTimeString.get(scope.arrayTime[scope.arrayTime.length - 1]);
						var fromTime = getDateAndTime(false);
						var tillTime = getDateAndTime(true);
						fromTime = fromTime.toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit',
							hour12: false
						})
						tillTime = tillTime.toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit',
							second: '2-digit',
							hour12: false
						});

                        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
						const data = { date: formatDate(scope.localdate), start_time: fromTime , end_time:  tillTime};

						var formBody = [];
                        for (var property in data) {
                          var encodedKey = encodeURIComponent(property);
                          var encodedValue = encodeURIComponent(data[property]);
                          formBody.push(encodedKey + "=" + encodedValue);
                        }
                        formBody = formBody.join("&");

                        fetch('/studio/bookings/gateway/', {
                          method: 'POST',
                          mode: 'same-origin',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Content-Length': formBody.length,
                            'X-CSRFToken': csrftoken,
                          },
                          body: formBody,
                        })
                        .then(response => response.json())
                        .then(data => {
                          window.location.href = data.url;
                        })
                        .catch((error) => {
                        document.getElementById("save-button").innerText = "Proceed to checkout";
					    document.getElementById('save-button').style.pointerEvents = 'auto';
					    var headerColor = $('.datepicker .datepicker-header');
						headerColor.css({
							background: '#34495e'
						});
						scope.timeString = " - Error! Try after sometime";
						scope.$apply();
                        });

					} else if (length == 0) {
						var headerColor = $('.datepicker .datepicker-header');
						headerColor.css({
							background: '#34495e'
						});
						scope.timeString = " - Select Time Slots";
					}
				};

				scope.timeSorter = function () {
					var headerColor = $('.datepicker .datepicker-header');
					scope.arrayTime.sort(function (a, b) {
						return a - b
					});
					var length = scope.arrayTime.length;
					if (length > 5) {
						headerColor.css({
							background: '#34495e'
						});
						scope.timeString = " - Booking Slot cannot be more than 5 hours.";
					} else if (consecutive()) {
						headerColor.css({
							background: '#303030'
						});
						scope.time = scope.arrayTimeString.get(scope.arrayTime[0]);
						scope.endTime = scope.arrayTimeString.get(scope.arrayTime[scope.arrayTime.length - 1]);
						var fromTime = getDateAndTime(false);
						var tillTime = getDateAndTime(true);
						scope.timeString = " from " + fromTime.toLocaleTimeString() + " to " + tillTime.toLocaleTimeString();
					} else {
						headerColor.css({
							background: '#34495e'
						});
						scope.timeString = " - Invalid Booking Slot. Select continous time slot.";
					}
					scope.$apply();
				}

				function consecutive() {
					if (scope.arrayTime.length === 0) {
						return false;
					}
					if (scope.arrayTime.length === 1) {
						return true;
					}
					var i = 1;
					while (i < scope.arrayTime.length) {
						if (scope.arrayTime[i] - scope.arrayTime[i - 1] !== 1) {
							return false;
						}
						i++;
					}
					return true;
				}

				$(document).ready(function () {
					"use strict";

					$.fn[scope.pluginName] = function (options) {
						return this.each(function () {
							if (!$.data(this, scope.pluginName)) {
								scope.bookingPlugin = new Plugin(this, options);
								$.data(this, scope.pluginName, scope.bookingPlugin);
							}
						});
					};
				});

				//Attach plugin to all matching element
				$(document).ready(function () {
					var bookingResponse = new XMLHttpRequest();
					bookingResponse.onreadystatechange = function () {
						if (bookingResponse.readyState === 4 && bookingResponse.status == 200) {
							scope.bookingJson = JSON.parse(bookingResponse.responseText);
							$('#select').timeselector(scope.bookingJson);
						}
					};

					bookingResponse.open('GET', '/studio/bookings/' + formatDate(scope.localdate) + '/', true);
					bookingResponse.send();
					// setTimeout(function(){
					//   $(".timeselector").addClass('opened');
					// }, 500);
					// setTimeout(function(){
					//   $(".timeselector").removeClass('opened');
					// }, 1250);
				});
			}
			/////////////////////////
			// End Timepicker Code //
			////////////////////////
		}
	};
});