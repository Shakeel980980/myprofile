// ==========================================//
//==========Responsive Navbar===============//
// ==========================================//
let toggleBtn = document.querySelector(".toogle-button");
let tabs = document.querySelector(".tabs");
let projectBTn = document.querySelector(".projects-button");
let crossBtn = document.querySelector(".crossBtn");

toggleBtn.addEventListener("click", function () {
  tabs.classList.toggle("active");
  projectBTn.classList.toggle("active");
  toggleBtn.style.display = "none";
  crossBtn.style.display = "block";
});

crossBtn.addEventListener("click", function () {
  tabs.classList.toggle("active");
  projectBTn.classList.toggle("active");
  toggleBtn.style.display = "block";
  crossBtn.style.display = "none";
});

// ==========================================//
//=========Swiper for Testimoninals==========//
// ==========================================//

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    786: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

// ==========================================//
//================Scroll Button==============//
// ==========================================//
let scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==========================================//
//================Theme Change==============//
// ==========================================//
let dark = document.querySelector(".toggle-on");
let light = document.querySelector(".toggle-off");

let mainSection = document.querySelector(".main-section");

light.addEventListener("click", function () {
  mainSection.classList.add("dark-theme");
  light.style.display = "none";
  dark.style.display = "block";
});

dark.addEventListener("click", function () {
  mainSection.classList.remove("dark-theme");
  light.style.display = "block";
  dark.style.display = "none";
});
