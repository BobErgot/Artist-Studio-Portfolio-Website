const countDownDate = new Date().getTime() + 15 * 60 * 1000;
const x = setInterval(function () {
	const now = new Date().getTime();
	const distance = countDownDate - now;
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "EXPIRED";
	}
}, 1000);

$('#payment-form').on('submit', function (e) {
    $(this).hide();
    document.getElementById('loader').classList.remove('hide');
    document.getElementById('loader').classList.add('show');
	const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
	const form = $('#payment-form');
	let path = window.location.pathname.replace("/studio/bookings/", "");
	path = '/studio/bookings/razorpay/' + path;
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: path,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'X-CSRFToken': csrfToken,
		},
		data: form.serialize(),
		success: function (data) {
		    document.getElementById('loader').classList.remove('show');
            document.getElementById('loader').classList.add('hide');

			let rzp1 = new Razorpay(data);
			document.getElementById('rzp-button').onclick = function(e){
                rzp1.open();
                e.preventDefault();
            }

		    document.getElementById('payment-button').classList.remove('hide');
            document.getElementById('payment-button').classList.add('show');
		},
		error: function () {
		    document.getElementById('message-response').innerHTML = "Error! Please go back and try again!";
		    document.getElementById('loader').classList.remove('show');
            document.getElementById('loader').classList.add('hide');
            document.getElementById('error-div').classList.remove('hide');
            document.getElementById('error-div').classList.add('show');
		}
	});
});