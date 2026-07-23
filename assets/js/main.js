document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.classList.toggle("active");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  var faqToggles = document.querySelectorAll(".faq-item");
  faqToggles.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqToggles.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
