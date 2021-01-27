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

(function ($) {
  "use strict";

  /*==================================================================
    [ Focus Contact2 ]*/
  $(".input2").each(function () {
    $(this).on("blur", function () {
      if ($(this).val().trim() != "") {
        $(this).addClass("has-val");
      } else {
        $(this).removeClass("has-val");
      }
    });
  });

  /*==================================================================
    [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var message = $('.validate-input textarea[name="message"]');

  $(".validate-form").on("submit", function () {
    var check = true;

    if ($(name).val().trim() == "") {
      showValidate(name);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if ($(message).val().trim() == "") {
      showValidate(message);
      check = false;
    }

    return check;
  });

  $(".validate-form .input2").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
