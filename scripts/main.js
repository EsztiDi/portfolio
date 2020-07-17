$(document).ready(function() {

  var delay = 600,
    last = $(".panels").length,
    hash = document.location.hash,
    href = hash,
    openSection;

  function reset() {
    $(".panels").css({"height": "", "top": ""});
    $(".panels p").css({"font-size": "", "left": ""});
    $("section").fadeOut(500);
  }

  function setPositions() {
    $(".panels").css("height", "2rem");
    $(".panels p").css("font-size", "1.5rem");

    $(".zero").css("top", "calc(-6rem + 0.5%)");

    $(".one").css({"top": "calc(-4rem - 0%)", "height": "4rem"});
    $(".one p").css("left", "2%");
    
    var topIndex = $(href).index();
    $(".panels").slice(2, (topIndex + 3)).each(function(index) {
      $(this).css("top", "calc(" + (index * 2) + "rem - " + ((index + 1) * 0.5) + "%)");
      $(this).find("p").css("left", ((index * 5) + 12) + "%");
    });
    $(".panels").slice((topIndex + 3), last).each(function(index) {
      $(this).css("top", "calc(95vh + " + ((index + topIndex) * 2) + "rem - " + ((index + topIndex) * 0.5) + "%)");
      $(this).find("p").css("left", ((index + topIndex) * 4 + 80) + "%")
    });

    if (window.matchMedia("(max-width: 900px)").matches) {
      $(".zero").css("top", "calc(-4.5rem + 0.5%)");
      $(".one").css({"top": "calc(-2.5rem - 0%)", "height": "4rem"});
      
      $(".panels").slice(2, (topIndex + 3)).each(function(index) {
        $(this).css("top", "calc(" + (index * 2 + 1.5) + "rem - " + ((index + 1) * 0.5) + "%)");
        $(this).find("p").css("left", ((index * 5) + 17) + "%");
      });
      $(".panels").slice((topIndex + 3), last).each(function(index) {
        $(this).css("top", "calc(90vh + " + ((index + topIndex) * 2) + "rem - " + ((index + topIndex) * 0.5) + "%)");
        $(this).find("p").css("left", ((index + topIndex) * 5 + 70) + "%")
      });
    }
  }

  function noEffect() {
    $(".panels, .panels p").css({ transition: "none", animation: "none" });
    setTimeout(function () {
      $(".panels, .panels p").css({ transition: "", animation: "" });
    }, 100);
  }

  function openProjects() {
    setPositions();
    // $("#projects").fadeIn(500).css("display", "flex").scrollTop(0);
    $("#projects").fadeIn(500).scrollTop(0);
  };
  function openAbout() {
    setPositions();
    $("#about").fadeIn(500, function() {
      $("#about li i").each(function(index) {
        $(this).delay(index * 250).animate({"color": colours[index]}).delay(250).animate({"color": "#8d8d8d"});
      });
    }).scrollTop(0);
  }  
  function openContact() {
    setPositions();
    $("#contact").fadeIn(500).scrollTop(0);
  }
  
  openSection = {
    "": function () {
      reset();
    },
    "#projects": function () {
      openProjects();
    },
    "#about": function () {
      openAbout();
    },
    "#contact": function () {
      openContact();
    },
  };

  openSection[hash]();
  // noEffect();

  if (hash === "") {
    $(".panels p").eq(0).fadeOut(50, function () {
      $(this).text("Welcome to Eszter's Portfolio!").fadeIn(50);
    });
    $(".panels p").eq(1).fadeOut(50, function () {
      $(this).text("Eszter's Projects").fadeIn(50);
    });
    $(".panels p").eq(2).fadeOut(50, function () {
      $(this).text("About Eszter").fadeIn(50);
    });
    $(".panels p").eq(3).fadeOut(50, function () {
      $(this).text("Contact Eszter").fadeIn(50);
    });
  }

  $(".panels").slice(2, 5).one("click", function text() {
    if ($(this).find("p").text().length > 11) {
      $(".panels p").eq(0).fadeOut(200, function () {
        $(this).text("Eszter's Portfolio").fadeIn(300);
      });
      $(".panels p").eq(1).fadeOut(300, function () {
        $(this).text("Projects").fadeIn(300);
      });
      $(".panels p").eq(2).fadeOut(300, function () {
        $(this).text("About").fadeIn(300);
      });
      $(".panels p").eq(3).fadeOut(300, function () {
        $(this).text("Contact").fadeIn(300);
      });
    }
  });

  $(".one").on("click", function () {
    reset();
  });

  $(".panels[href]:not(.one)").on("click", function() {
    hash = document.location.hash,
    href = $(this).attr("href");

    if (href === hash || $(this).height() > 32) {
      openSection[href]();
    } else {
      reset();
      setTimeout(function () {
        openSection[href]();
      }, delay);
    }
  });

  // $("#projects > div").hover(function() {
  //   $(this).find(".details").slideDown();
  // }, function() {
  //   $(this).find(".details").toggleClass("show");
  // });
  // $("#projects > div").on("click", function () {
  //   $(this).find(".details").slideToggle();
  // });

  // if (window.matchMedia("(min-width: 901px)").matches) {
  //   $("#projects > div").hover(function () {
  //     $(this).find(".buttons").slideToggle().css("display", "flex");
  //   });
  // }

  // $("#about li").each(function(index) {
  //   $(this).css("animation-delay", ((index + 1) * 0.4) + "s");
  // });
  // $("#about .buttons").css("animation-delay", (($("#about li").length + 1) * 0.4) + "s");
  
  var colours = ["#F2BC18", "#F21885", "#18F27A", "#F29DBF", "#18F2EF", "#F2EB18"];
  $("#about li").hover(function() {
    let index = $(this).index();
    $(this).find("i").css("color", colours[index]);
  }, function() { $(this).find("i").css("color", ""); });
  // if ($("#about:visible")) {
  //   $("#about li i").each(function(index) {
  //     $(this).delay(index * 200).animate({"color": colours[index]}).delay((index + 1) * 200).animate({"color": "#8d8d8d"});
  //   });
  // };

  $("#contact div").each(function(index) {
    $(this).css("animation-delay", ((index + 1) * 0.2) + "s");
  });
  
})