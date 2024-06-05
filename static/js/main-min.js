let	$body = $("body"),
	site = $body.attr("data-site"),
	height = $(window).height(),
	width = $(window).width(),
	$mobileMenuButton = $("#menuButton"),
	$mobileMenuWrapper = $("#mobileMenuWrapper"),
	$mobileMenuItem = $("#mobileMenuItem li"),
	isActive = false;

function openMenuAnimations() {
  $body.addClass("stopScrolling");
  $mobileMenuButton.addClass("active");
  gsap.to($mobileMenuWrapper, {
    duration: 0.3,
    autoAlpha: 1
  });
}

function closeMenuAnimations() {
  $mobileMenuButton.removeClass("active");
  $body.removeClass("stopScrolling");
  gsap.to($mobileMenuWrapper, {
    duration: 0.3,
    autoAlpha: 0
  });
}

$mobileMenuItem.on("click", (e) => {
  closeMenuAnimations();
});


$mobileMenuButton.on("click", (e) => {
  e.preventDefault();
  $mobileMenuButton.addClass("working");
  isActive = !isActive;
  isActive ? openMenuAnimations() : closeMenuAnimations();
  setTimeout(() => {
    $mobileMenuButton.removeClass("working");
  }, 200);
});

if (!Modernizr.objectfit) {
  $(".objectFitWrapper").each(function () {
    const $this = $(this);
    const imgSrc = $this.find("img").prop("src");
    if (imgSrc) {
      $this.css("backgroundImage", `url(${imgSrc})`).addClass("objectFitFallBack");
    }
  });
}

(function ($) {
  $.fn.rhBanner = function (options) {
    const settings = $.extend({
      parallaxRatio: 1.4,
      ajax: false,
      selector: "body"
    }, options);

    const transformProperty = (() => {
      const properties = ["transform", "webkitTransform", "mozTransform", "oTransform", "msTransform"];
      for (let i = 0; i < properties.length; i++) {
        if (document.createElement("div").style[properties[i]] !== undefined) {
          return properties[i];
        }
      }
      return null;
    })();

    const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

    const elements = this;
    const elementCount = elements.length;
    const elementData = [];

    function updateElements() {
      let windowHeight = window.innerHeight;
      for (let i = 0; i < elementCount; i++) {
        const element = elements[i];
        const boundingRect = element.getBoundingClientRect();
        const height = element.offsetHeight;
        const start = settings.ajax ? boundingRect.top : boundingRect.top + window.pageYOffset;
        const stop = start + height;
        const child = element.childNodes[1];
        child.style.height = `${height * settings.parallaxRatio}px`;
        const childHeight = child.offsetHeight;
        const offset = childHeight - height;

        elementData[i] = {
          el: element,
          height,
          start,
          stop,
          child,
          childHeight,
          offset
        };
      }
    }

    function updatePosition(element, position) {
      if (transformProperty) {
        element.child.style[transformProperty] = `translate3d(0, ${position}px, 0)`;
      } else {
        element.child.style.top = `${position}px`;
      }
    }

    $(window).resize(() => {
      updateElements();
    });

    updateElements();

    (function animate() {
      let scrollTop = settings.ajax ? $(settings.selector).scrollTop() : window.pageYOffset;
      for (let i = 0; i < elementCount; i++) {
        const data = elementData[i];
        if (scrollTop >= data.start - window.innerHeight && scrollTop <= data.stop) {
          const progress = (scrollTop - (data.start - window.innerHeight)) / (data.stop - (data.start - window.innerHeight));
          const position = -data.offset + (data.offset * progress);
          updatePosition(data, position);
        }
      }
      requestAnimationFrame(animate);
    })();
  };
})(jQuery);

(function ($) {
  $.fn.rhLazy = function (options) {
    const settings = $.extend({
      scrollThreshold: 100,
      ajax: false
    }, options);

    let lazyImages = document.querySelectorAll("img.lazy");
    let timeout;

    function loadImages() {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollTop = settings.ajax ? document.getElementById("ajaxOverlay").scrollTop : window.pageYOffset;
        lazyImages.forEach(img => {
          const rect = img.getBoundingClientRect();
          const imgTop = rect.top + (settings.ajax ? document.getElementById("ajaxOverlay").scrollTop : window.pageYOffset);
          if (imgTop < window.innerHeight + scrollTop + settings.scrollThreshold) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });

        lazyImages = document.querySelectorAll("img.lazy");
        if (lazyImages.length === 0) {
          document.removeEventListener("scroll", loadImages);
          window.removeEventListener("resize", loadImages);
          window.removeEventListener("orientationChange", loadImages);
        }
      }, 20);
    }

    loadImages();
    document.addEventListener("scroll", loadImages);
    window.addEventListener("resize", loadImages);
    window.addEventListener("orientationChange", loadImages);
  };
})(jQuery);

(function ($) {
  $.fn.rhLoadIn = function (options) {
    const settings = $.extend({
      scrollThreshold: 50,
      ajax: false
    }, options);

    let loadInElements = document.querySelectorAll(".loadIn");
    let timeout;

    function loadElements() {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollTop = settings.ajax ? document.getElementById("ajaxOverlay").scrollTop : window.pageYOffset;
        loadInElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + (settings.ajax ? document.getElementById("ajaxOverlay").scrollTop : window.pageYOffset);
          if (elTop < window.innerHeight + scrollTop + settings.scrollThreshold) {
            el.classList.add("isVisible");
            setTimeout(() => {
              el.classList.remove("loadIn");
            }, 600);
          }
        });

        loadInElements = document.querySelectorAll(".loadIn");
        if (loadInElements.length === 0) {
          document.removeEventListener("scroll", loadElements);
          window.removeEventListener("resize", loadElements);
          window.removeEventListener("orientationChange", loadElements);
        }
      }, 20);
    }

    loadElements();
    document.addEventListener("scroll", loadElements);
    window.addEventListener("resize", loadElements);
    window.addEventListener("orientationChange", loadElements);
  };
})(jQuery);


let videosrc;
let $playVideo = $(".playVideo"),
      $videoOverlay = $("#videoOverlay"),
      $closeVideoOverlay = $("#closeVideoOverlay");

if ($playVideo.length) {
  $playVideo.on("click", (e) => {
    e.preventDefault();
    videosrc = $(e.currentTarget).data("src");
    $("#videoOverlay iframe").attr("src", videosrc);
    $videoOverlay.fadeIn();
  });

  $closeVideoOverlay.on("click", (e) => {
    e.preventDefault();
    $videoOverlay.fadeOut();
    $("#videoOverlay iframe").attr("src", "");
  });
}

let videoElems = document.getElementsByClassName("inlineVideo");


function inlineVideo() {
  for (let i = 0; i < videoElems.length; i++) {
    videoElems[i].addEventListener("canplay", videoReady);
    if (videoElems[i].readyState > 3) {
      videoElems[i].classList.add("ready");
    }
  }
}

function videoReady() {
  this.classList.add("ready");
}

if (videoElems.length > 0) {
  inlineVideo();
}

document.addEventListener("DOMContentLoaded", () => {
  const lazyVideos = Array.from(document.querySelectorAll("video.lazyVideo"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).forEach((child) => {
            if (child.tagName === "SOURCE") {
              child.src = child.dataset.src;
            }
          });
          entry.target.load();
          entry.target.classList.remove("lazyVideo");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px 500px 0px"
    });

    lazyVideos.forEach((video) => {
      observer.observe(video);
    });
  }
});

$(document).ready(function() {
  $("#blog").each((index, element) => {
    const $element = $(element);
    const $nextFeature = $element.find("#nextBlog");
    const flickityInstance = $element.flickity({
      wrapAround: true,
      autoPlay: 6000,
      pauseAutoPlayOnHover: false,
      pageDots: false,
      prevNextButtons: false,
      cellSelector: "#featuresSlide",
      cellAlign: "left",
      lazyLoad: true,
      groupCells: 1,
      setGallerySize: true,
      imagesLoaded: true
    });

    $nextFeature.on("click", (e) => {
      e.preventDefault();
      flickityInstance.flickity("next", true);
    });
  });

  $("#latestReleases").each((index, element) => {
    const $element = $(element);
    const $nextRelease = $element.find("#nextRelease");
    const flickityInstance = $element.flickity({
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      cellSelector: "#latestReleasesSlide",
      cellAlign: "left",
      lazyLoad: true,
      groupCells: 1,
      setGallerySize: true,
      imagesLoaded: true
    });

    $nextRelease.on("click", (e) => {
      e.preventDefault();
      flickityInstance.flickity("next", true);
    });
  });
});


const winWidth = 520,
      winHeight = 350,
      winTop = (screen.height / 2) - (winHeight / 2),
      winLeft = (screen.width / 2) - (winWidth / 2),
      popupMeta = `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`;

function socialShare(platform, url, text) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}%20-%20&url=${url}`,
    reddit: `https://www.reddit.com/submit?url=${url}&title=${text}`
  };

  const shareUrl = shareUrls[platform];
  if (shareUrl) {
    window.open(shareUrl, "sharer", popupMeta);
  }
}

$(document).ready(() => {
  $body.removeClass("preload");
  $body.rhLoadIn();
  $body.rhLazy({
    scrollThreshold: 100
  });
  $(".parallax").rhBanner({
    parallaxRatio: 1.4
  });
});

const $scrollButton = $("#scrollButton");

function handleScroll() {
  const st = $(window).scrollTop();
  const e = st / 2;
  $("#homepageHero").css({
    top: `${e}px`
  });
}

if ($scrollButton.length > 0) {
  $scrollButton.on("click", (e) => {
    e.preventDefault();
    $(window).scrollTo({ top: height - 48, left: 0, behavior: "smooth" });
  });
}

$(window).on("scroll", handleScroll);

$(window).resize(() => {
  width = $(window).width();
});