$(document).ready(function() {

  function reset() {
    $("body > a").css({"height": "", "top": ""});
    $("body > a p").css({"font-size": "", "left": ""});
  }

  function sameAttr() {
    $("body > a").css("height", "2rem");
    $("body > a p").css("font-size", "1.5rem");

    $(".zero").css("top", "calc(-6rem + 0.5%)");

    $(".one").css({"top": "calc(-4rem - 0%)", "height": "4rem"});
    $(".one p").css("left", "2%");

    $(".two").css("top", "calc(0rem - 0.5%)");
    $(".two p").css("left", "12%");

    if (window.matchMedia("(max-width: 900px)").matches) {
      $(".zero").css("top", "calc(-4.5rem + 0.5%)");
      $(".one").css({"top": "calc(-2.5rem - 0%)", "height": "4rem"});
      $(".two").css("top", "calc(1.5rem - 0.5%)");
    }
  }

  var delay = 600;

  $(".one").on("click", function () {
    reset();
  });

  $(".two").on("click", function () {
    function setAttr() {
      sameAttr();
      $(".three, .four, .five, .six, .seven, .eight").each(function(index) {
        $(this).css("top", "calc(90vh + " + (index * 2) + "rem - " + (index * 0.5) + "%)");
        $(this).find("p").css("left", (index * 5 + 75) + "%")
      });
    };

    if (document.location.href.includes("projects") || $(".two").css("height") > "32px") {
      setAttr();
    } else {
      reset();
      setTimeout(function() {
        setAttr();
      }, delay);
    }
  });

  $(".three").on("click", function () {
    function setAttr() {
      sameAttr();
      $(".three").css("top", "calc(2rem - 1%)");
      $(".three p").css("left", "17%");
      if (window.matchMedia("(max-width: 900px)").matches) {
        $(".three").css("top", "calc(3.5rem - 1%)");
      }
      $(".four, .five, .six, .seven, .eight").each(function(index) {
        $(this).css("top", "calc(90vh + " + ((index + 1) * 2) + "rem - " + (index * 0.5) + "%)");
        $(this).find("p").css("left", ((index + 1) * 5 + 75) + "%")
      });
    }

    if (!document.location.href.includes("contact")) {
      reset();
      setTimeout(function() {
        setAttr();
      }, delay);
    } else {
      setAttr();
    }
  });

  $(".four").on("click", function () {
    function setAttr() {
      sameAttr();
      $(".three").css("top", "calc(2rem - 1%)");
      $(".three p").css("left", "17%");
      $(".four").css("top", "calc(4rem - 1.5%)");
      $(".four p").css("left", "22%");
      if (window.matchMedia("(max-width: 900px)").matches) {
        $(".three").css("top", "calc(3.5rem - 1%)");
        $(".four").css("top", "calc(5.5rem - 1.5%)");
      }
      $(".five, .six, .seven, .eight").each(function(index) {
        $(this).css("top", "calc(90vh + " + ((index + 2) * 2) + "rem - " + (index * 0.5) + "%)");
        $(this).find("p").css("left", ((index + 2) * 5 + 75) + "%")
      });
    }  

    if (!document.location.href.includes("about")) {
      reset();
      setTimeout(function() {
        setAttr();
      }, delay);
    } else {
      setAttr();
    }
  });


})