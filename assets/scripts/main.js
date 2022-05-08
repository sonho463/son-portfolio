let d = new Date();
mo = d.getMonth();
da = d.getDate();

const month = document.querySelector("#js_month");
const day = document.querySelector("#js_day");
month.textContent = mo + 1;
day.textContent = da;

// footer-cvがでてきたらcv-button非表示
$(window).scroll(function () {
  $(".js-footer").each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 100;
    if (typeof $(this).data("js-footer") !== "undefined") {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data("js-footer");
    }
    if (hit + customTop < wHeight + scroll) {
      $(".js-cv-button").addClass("is-hidden");
    } else {
      $(".js-cv-button").removeClass("is-hidden");
    }
  });
});

const ham = $(".js-hamburger-btn");
const nav = $(".js-g-nav");
const bodyStyle = document.body.style
ham.on("click", function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass("open"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass("is-active"); // ナビゲーションメニューにactiveクラスを付け外し
	bodyStyle.overflow === "auto" || bodyStyle.overflow === ""
	? (bodyStyle.overflow = "hidden")
	: (bodyStyle.overflow = "auto");
});

// swiper

const swiperPagination = document.querySelector(".swiper-pagination");
const swiperButtonPrev = document.querySelector(".swiper-button-prev");
const swiperButtonNext = document.querySelector(".swiper-button-next");
const swiperScrollbar = document.querySelector(".swiper-scrollbar");

// (() => {
//   let swiper, swiperbool;
//   const breakPoint = 1024;
//   const cardOuter = document.querySelector(".js-card-outer");
//   const cardList = document.querySelector(".js-card-list");
//   const cards = document.querySelectorAll(".js-card");

//   window.addEventListener(
//     "load",
//     () => {
//       if (breakPoint < window.innerWidth) {
//         swiperbool = false;
//         removeSwiperClass();
//       } else {
//         addSwiperClass();
//         createSwiper();
//         swiperbool = true;
//       }
//     },
//     false
//   );

//   window.addEventListener(
//     "resize",
//     () => {
//       if (breakPoint < window.innerWidth && swiperbool) {
//         swiper.destroy(false, true);
//         removeSwiperClass();
//         swiperbool = false;
//       } else if (breakPoint >= window.innerWidth && !swiperbool) {
//         addSwiperClass();
//         createSwiper();
//         swiperbool = true;
//       }
//     },
//     false
//   );

//   const activateSwiperTools = () => {
//     swiperButtonNext.style.display = "flex";
//     swiperButtonPrev.style.display = "flex";
//     swiperScrollbar.style.display = "flex";
//     swiperPagination.style.display = "flex";
//   };

//   const disableSwiperTools = () => {
//     swiperButtonNext.style.display = "none";
//     swiperButtonPrev.style.display = "none";
//     swiperScrollbar.style.display = "none";
//     swiperPagination.style.display = "none";
//   };

//   const addSwiperClass = () => {
//     cardOuter.classList.add("swiper");
//     cardList.classList.add("swiper-wrapper");
//     cards.forEach((card) => {
//       card.classList.add("swiper-slide");
//     });
//     activateSwiperTools();
//   };

//   const removeSwiperClass = () => {
//     cardOuter.classList.remove("swiper");
//     cardList.classList.remove("swiper-wrapper");
//     cards.forEach((card) => {
//       card.classList.remove("swiper-slide");
//     });
//     disableSwiperTools();
//   };

//   const createSwiper = () => {
//     swiper = new Swiper(".swiper", {
//       // Optional parameters
//       direction: "horizontal",
//       loop: true,
//       // effect: "cube",

//       // If we need pagination
//       pagination: {
//         el: ".swiper-pagination",
//       },

//       // Navigation arrows
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },

//       // And if we need scrollbar
//       scrollbar: {
//         el: ".swiper-scrollbar",
//         draggable: true,
//       },
//     });
//   };
// })();

	const swiper = new Swiper(".swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		breakpoints: {
			768: {
				slidesPerView: 3.5,
				spaceBetween: 020
			},
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
	});
