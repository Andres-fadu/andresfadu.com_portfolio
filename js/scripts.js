//colapsable

var coll = document.getElementsByClassName("colapsable__button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("colapsable__button--active");
    var text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}
//colapsable animacion

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("colapsable__button--active");
    var text = this.nextElementSibling;
    if (text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
    }
  });
}

//hamburger

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

jQuery("document").ready(function ($) {
  var menuBtn = $(".hamburger"),
    menu = $(".header__menu ul");
  menuBtn.click(function () {
    if (menu.hasClass("show")) {
      menu.removeClass("show");
    } else {
      menu.addClass("show");
    }
  });
});
