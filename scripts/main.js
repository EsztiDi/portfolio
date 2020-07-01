$(document).ready(function() {

  function reset() {
    $("body > a").css({"height": "", "top": ""});
    $("body > a p").css({"font-size": "", "left": ""});
    $("section").fadeOut(500);
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

  function noEffect() {
    $("body > a, body > a p").css({ transition: "none", animation: "none" });
    setTimeout(function () {
      $("body > a, body > a p").css({ transition: "", animation: "" });
    }, 100);
  }

  var delay = 600;

  $(".one").on("click", function () {
    reset();
  });

  function setProjects() {
    sameAttr();
    $(".three, .four, .five, .six, .seven, .eight").each(function(index) {
      $(this).css("top", "calc(90vh + " + (index * 2) + "rem - " + (index * 0.5) + "%)");
      $(this).find("p").css("left", (index * 5 + 75) + "%")
    });
    // $("section:not(#projects)").fadeOut(100);
    $("#projects").show().scrollTop(0);
  };

  if (document.location.href.includes("projects")) {
    setProjects();
    noEffect();
  }
  $(".two").on("click", function () {
    if (document.location.href.includes("projects") || $(".two").height() > 32) {
      setProjects();
    } else {
      reset();
      setTimeout(function () {
        setProjects();
      }, delay);
    }
  });

  function setContact() {
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
    // $("section:not(#contact)").fadeOut(100);
    $("#contact").fadeIn(500).scrollTop(0);
  }
  if (document.location.href.includes("contact")) {
    setContact();
    noEffect();
  }
  $(".three").on("click", function () {
    if (document.location.href.includes("contact") || $(".three").height() > 32) {
      setContact();
    } else {
      reset();
      setTimeout(function () {
        setContact();
      }, delay);
    }
  });

  function setAbout() {
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
    // $("section:not(#about)").fadeOut(100);
    $("#about").fadeIn(500).scrollTop(0);
  }  
  if (document.location.href.includes("about")) {
    setAbout();
    noEffect();
  }
  $(".four").on("click", function () {
    if (document.location.href.includes("about") || $(".four").height() > 32) {
      setAbout();
    } else {
      reset();
      setTimeout(function() {
        setAbout();
      }, delay);
    }
  });

  $("#projects > div").hover(function() {
      $(this).find(".details").slideToggle();
    });


})