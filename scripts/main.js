$(document).ready(function() {

  function reset() {
    $("body > a").css("height", "");
    $("body > a p").css("font-size", "");
    
    $(".zero").css("top", "");

    $(".one").css("top", "");
    $(".one p").css("left", "");

    $(".two, .three, .four, .five, .six, .seven, .eight").each(function(index) {
      $(this).css("top", "");
      $(this).find("p").css("left", "")
    });
  }

  function sameAttr() {
    $("body > a").css("height", "2rem");
    $("body > a p").css("font-size", "1.5rem");

    $(".zero").css("top", "calc(-6rem + 0.5%)");

    $(".one").css({"top": "calc(-4rem - 0%)", "height": "4rem"});
    $(".one p").css("left", "2%");

    $(".two").css("top", "calc(0rem - 0.5%)");
    $(".two p").css("left", "12%");

    // $(".seven").css("height", "4rem");

    // if (window.matchMedia("(max-width: 900px)").matches) {
    //   $(".zero").css("top", "calc(-5vh - 2%)");
    //   $(".one").css("top", "-2%");
    //   $(".two").css("top", "calc(5vh - 2%)");
    // }
    if (window.matchMedia("(max-width: 900px)").matches) {
      // $(".zero").css("top", "-5vh");
      $(".one").css({"top": "calc(-2.5rem - 0%)", "height": "4rem"});
      $(".two").css("top", "calc(1.5rem - 0.5%)");
    }
  }

  var delay = 600;
  var d = 2;

  $(".one").on("click", function () {
    reset();
  });

  $(".two").on("click", function () {
    if (!document.location.href.includes("projects")) {
      reset();
      setTimeout(function() {
        sameAttr();
        $(".three, .four, .five, .six, .seven, .eight").each(function(index) {
          $(this).css("top", "calc(90vh + " + (index * 2) + "rem - " + (index * 0.5) + "%)");
          // $(this).css({"top": "auto", "bottom": "calc(" + (index * -2) + "rem + " + ((index + 8) * 0.5) + "%"});
          $(this).find("p").css("left", (index * 5 + 75) + "%")
        });
      }, delay);
    } else {
      sameAttr();
      $(".three, .four, .five, .six, .seven, .eight").each(function(index) {
        $(this).css("top", "calc(90vh + " + (index * 2) + "rem - " + (index * 0.5) + "%)");
        // $(this).css({"top": "auto", "bottom": "calc(" + (index * -2) + "rem + " + ((index + 8) * 0.5) + "%"});
        $(this).find("p").css("left", (index * 5 + 75) + "%")
      });
    }
  });

  $(".three").on("click", function () {
    if (!document.location.href.includes("contact")) {
      reset();
      setTimeout(function() {
        sameAttr();
        $(".three").css("top", "calc(2rem - 1%)");
        $(".three p").css("left", "17%");
  
        if (window.matchMedia("(max-width: 900px)").matches) {
          // $(".three").css("top", "calc(10vh - 2%)");
          $(".three").css("top", "calc(3.5rem - 1%)");
        }
        // if (window.matchMedia("(max-width: 640px)").matches) {
        //   $(".three").css("top", "10vh");
        // }
        $(".four, .five, .six, .seven, .eight").each(function(index) {
          $(this).css("top", "calc(90vh + " + ((index + 1) * 2) + "rem - " + (index * 0.5) + "%)");
          // $(this).css("top", "calc(" + ((index + 2) * 5 + 80) + "vh + 7%)");
          // $(this).css({"top": "auto", "bottom": "calc(" + ((index + 1) * -2) + "rem + " + ((index + 8) * 0.5) + "%"});
          $(this).find("p").css("left", ((index + 1) * 5 + 75) + "%")
        });
      }, delay);
    } else {
      sameAttr();
      $(".three").css("top", "calc(2rem - 1%)");
      $(".three p").css("left", "17%");

      if (window.matchMedia("(max-width: 900px)").matches) {
        // $(".three").css("top", "calc(10vh - 2%)");
        $(".three").css("top", "calc(3.5rem - 1%)");
      }
      // if (window.matchMedia("(max-width: 640px)").matches) {
      //   $(".three").css("top", "10vh");
      // }
      $(".four, .five, .six, .seven, .eight").each(function(index) {
          $(this).css("top", "calc(90vh + " + ((index + 1) * 2) + "rem - " + (index * 0.5) + "%)");
        // $(this).css("top", "calc(" + ((index + 2) * 5 + 80) + "vh + 7%)");
        // $(this).css({"top": "auto", "bottom": "calc(" + ((index + 1) * -2) + "rem + " + ((index + 8) * 0.5) + "%"});
        $(this).find("p").css("left", ((index + 1) * 5 + 75) + "%")
      });
    }
  });

  $(".four").on("click", function () {
    if (!document.location.href.includes("about")) {
      reset();
      setTimeout(function() {
        sameAttr();
        $(".three").css("top", "calc(2rem - 1%)");
        $(".three p").css("left", "17%");
  
        $(".four").css("top", "calc(4rem - 1.5%)");
        $(".four p").css("left", "22%");
  
        if (window.matchMedia("(max-width: 900px)").matches) {
          // $(".three").css("top", "calc(10vh - 2%)");
          // $(".four").css("top", "calc(15vh - 2%)");
          $(".three").css("top", "calc(3.5rem - 1%)");
          $(".four").css("top", "calc(5.5rem - 1.5%)");
        }
        // if (window.matchMedia("(max-width: 640px)").matches) {
        //   $(".three").css("top", "10vh");
        //   $(".four").css("top", "15vh");
        // }
  
        $(".five, .six, .seven, .eight").each(function(index) {
          $(this).css("top", "calc(90vh + " + ((index + 2) * 2) + "rem - " + (index * 0.5) + "%)");
          // $(this).css("top", "calc(" + ((index + 3) * 5 + 80) + "vh + 7%)");
          // $(this).css({"top": "auto", "bottom": "calc(" + ((index + 2) * -2) + "rem + " + ((index + 8) * 0.5) + "%"});
          $(this).find("p").css("left", ((index + 2) * 5 + 75) + "%")
        });
      }, delay);
    } else {
      sameAttr();
      $(".three").css("top", "calc(2rem - 1%)");
      $(".three p").css("left", "17%");

      $(".four").css("top", "calc(4rem - 1.5%)");
      $(".four p").css("left", "22%");

      if (window.matchMedia("(max-width: 900px)").matches) {
        // $(".three").css("top", "calc(10vh - 2%)");
        // $(".four").css("top", "calc(15vh - 2%)");
        $(".three").css("top", "calc(3.5rem - 1%)");
        $(".four").css("top", "calc(5.5rem - 1.5%)");
      }
      // if (window.matchMedia("(max-width: 640px)").matches) {
      //   $(".three").css("top", "10vh");
      //   $(".four").css("top", "15vh");
      // }

      $(".five, .six, .seven, .eight").each(function(index) {
          $(this).css("top", "calc(90vh + " + ((index + 2) * 2) + "rem - " + (index * 0.5) + "%)");
        // $(this).css("top", "calc(" + ((index + 3) * 5 + 80) + "vh + 7%)");
        // $(this).css({"top": "auto", "bottom": "calc(" + ((index + 2) * -2) + "rem + " + ((index + 8) * 0.5) + "%"});
        $(this).find("p").css("left", ((index + 2) * 5 + 75) + "%")
      });
    }
  });


})