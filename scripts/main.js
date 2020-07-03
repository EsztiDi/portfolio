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
      $(this).find("p").css("left", ((index + topIndex) * 5 + 80) + "%")
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
        $(this).find("p").css("left", ((index + topIndex) * 5 + 75) + "%")
      });
    }
  }

  // function noEffect() {
  //   $(".panels, .panels p").css({ transition: "none", animation: "none" });
  //   setTimeout(function () {
  //     $(".panels, .panels p").css({ transition: "", animation: "" });
  //   }, 100);
  // }

  function openProjects() {
    setPositions();
    $("#projects").fadeIn(500).css("display", "flex").scrollTop(0);
    // sameAttr();
    // $(".three, .four, .five, .six, .seven, .eight").each(function(index) {
    //   $(this).css("top", "calc(95vh + " + (index * 2) + "rem - " + (index * 0.5) + "%)");
    //   $(this).find("p").css("left", (index * 5 + 80) + "%")
    // });
    // if (window.matchMedia("(max-width: 900px)").matches) {
    //   $(".three, .four, .five, .six, .seven, .eight").each(function(index) {
    //     $(this).css("top", "calc(90vh + " + (index * 2) + "rem - " + (index * 0.5) + "%)");
    //     $(this).find("p").css("left", (index * 5 + 75) + "%")
    //   });
    // }
  };
  function openContact() {
    setPositions();
    $("#contact").fadeIn(500).scrollTop(0);
  }
  function openAbout() {
    setPositions();
    $("#about").fadeIn(500).scrollTop(0);
  }  
  
  openSection = {
    "": function () {
      reset();
    },
    "#projects": function () {
      openProjects();
    },
    "#contact": function () {
      openContact();
    },
    "#about": function () {
      openAbout();
    },
  };

  openSection[hash]();
  // noEffect();

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

  // $(".two").on("click", function () {
  //   if (document.location.href.includes("projects") || $(".two").height() > 32) {
  //     openSection[hash]();
  //     // openProjects();
  //   } else {
  //     reset();
  //     setTimeout(function () {
  //       openSection[hash]();
  //       // openProjects();
  //     }, delay);
  //   }
  // });

  // function setContact() {
  //   sameAttr();
  //   $(".three").css("top", "calc(2rem - 1%)");
  //   $(".three p").css("left", "17%");
  //   $(".four, .five, .six, .seven, .eight").each(function(index) {
  //     $(this).css("top", "calc(95vh + " + ((index + 1) * 2) + "rem - " + ((index + 1) * 0.5) + "%)");
  //     $(this).find("p").css("left", ((index + 1) * 5 + 80) + "%")
  //   });
  //   if (window.matchMedia("(max-width: 900px)").matches) {
  //     $(".three").css("top", "calc(3.5rem - 1%)");
  //     $(".four, .five, .six, .seven, .eight").each(function(index) {
  //       $(this).css("top", "calc(90vh + " + ((index + 1) * 2) + "rem - " + ((index + 1) * 0.5) + "%)");
  //       $(this).find("p").css("left", ((index + 1) * 5 + 75) + "%")
  //     });
  //   }
  //   $("#contact").fadeIn(500).scrollTop(0);
  // }
  // if (document.location.href.includes("contact")) {
  //   openContact();
  //   // setContact();
  //   noEffect();
  // }
  // $(".three").on("click", function () {
  //   if (document.location.href.includes("contact") || $(".three").height() > 32) {
  //     openContact();
  //     // setContact();
  //   } else {
  //     reset();
  //     setTimeout(function () {
  //     openContact();
  //       // setContact();
  //     }, delay);
  //   }
  // });

  // function openAbout() {
  //   sameAttr();
  //   $(".three").css("top", "calc(2rem - 1%)");
  //   $(".three p").css("left", "17%");
  //   $(".four").css("top", "calc(4rem - 1.5%)");
  //   $(".four p").css("left", "22%");
  //   $(".five, .six, .seven, .eight").each(function(index) {
  //     $(this).css("top", "calc(95vh + " + ((index + 2) * 2) + "rem - " + ((index + 2) * 0.5) + "%)");
  //     $(this).find("p").css("left", ((index + 2) * 5 + 80) + "%")
  //   });
  //   if (window.matchMedia("(max-width: 900px)").matches) {
  //     $(".three").css("top", "calc(3.5rem - 1%)");
  //     $(".four").css("top", "calc(5.5rem - 1.5%)");
  //     $(".five, .six, .seven, .eight").each(function(index) {
  //       $(this).css("top", "calc(90vh + " + ((index + 2) * 2) + "rem - " + ((index + 2) * 0.5) + "%)");
  //       $(this).find("p").css("left", ((index + 2) * 5 + 75) + "%")
  //     });
  //   }
  //   $("#about").fadeIn(500).scrollTop(0);
  // }  
  // if (document.location.href.includes("about")) {
  //   openAbout();
  //   noEffect();
  // }
  // $(".four").on("click", function () {
  //   if (document.location.href.includes("about") || $(".four").height() > 32) {
  //     openAbout();
  //   } else {
  //     reset();
  //     setTimeout(function() {
  //       openAbout();
  //     }, delay);
  //   }
  // });

  // $("#projects > div").hover(function() {
  //   $(this).find(".details").slideDown();
  // }, function() {
  //   $(this).find(".details").toggleClass("show");
  // });
  // $("#projects > div").on("click", function () {
  //   $(this).find(".details").slideToggle();
  // });
  $("#projects > div").hover(function() {
    $(this).find(".details").slideToggle();
  });


})