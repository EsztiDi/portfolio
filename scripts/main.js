// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

var html = document.querySelector("html");
var themeButton = document.getElementById("theme");
var themeIcon = document.querySelector("#theme i");

var theme = localStorage.getItem("theme");
if (theme) {
  html.classList.toggle("dark");
  themeButton.setAttribute("aria-pressed", true);
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

var birds = document.querySelectorAll(".bird");

function changeTheme() {
  var hash = window.location.hash;

  html.classList.toggle("dark");
  themeIcon.setAttribute("style", "animation: unset;");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeButton.setAttribute("aria-pressed", true);
    themeIcon.classList.replace("fa-moon", "fa-sun");
    setTimeout(() => {
      themeIcon.setAttribute(
        "style",
        "animation: fade-in 0.5s ease-in-out forwards;"
      );
    }, 50);
    if (hash.length > 0) {
      document
        .querySelector("." + hash.substring(1, hash.length) + " > a")
        .setAttribute(
          "style",
          `position: relative;
           z-index: -2;
           animation: grow2 1s ease-in-out forwards;`
        );
    }
  } else {
    localStorage.removeItem("theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    themeButton.setAttribute("aria-pressed", false);
    setTimeout(() => {
      themeIcon.setAttribute(
        "style",
        "animation: fade-in 0.5s ease-in-out forwards;"
      );
    }, 50);
    if (hash.length > 0) {
      document
        .querySelector("." + hash.substring(1, hash.length) + " > a")
        .setAttribute(
          "style",
          `position: relative;
           z-index: -2;
           animation: grow 1s ease-in-out forwards;`
        );
    }
  }
  birds.forEach((el) => {
    el.src = "/images/star1.svg";
  });
}

themeButton.addEventListener("click", changeTheme);

var bird1 = document.getElementById("bird1");
var bird2 = document.getElementById("bird2");
var bird3 = document.getElementById("bird3");
var bird4 = document.getElementById("bird4");
var bird5 = document.getElementById("bird5");

// To move birds in the opposite direction to the mouse on the landing page
function mouseMoveMethod(e) {
  var x = e.pageX * -1,
    y = e.pageY * -1;

  var bird1X = x / 330;
  var bird1Y = y / 300;
  bird1.setAttribute("style", `top: ${13 + bird1Y}%; left: ${12 + bird1X}%;`);
  var bird2X = x / 480;
  var bird2Y = y / 450;
  bird2.setAttribute("style", `top: ${56 + bird2Y}%; left: ${21 + bird2X}%;`);
  var bird3X = x / 230;
  var bird3Y = y / 200;
  bird3.setAttribute("style", `top: ${61 + bird3Y}%; left: ${25 + bird3X}%;`);
  var bird4X = x / 530;
  var bird4Y = y / 500;
  bird4.setAttribute("style", `top: ${16 + bird4Y}%; left: ${88 + bird4X}%;`);
  var bird5X = x / 230;
  var bird5Y = y / 200;
  bird5.setAttribute("style", `top: ${28 + bird5Y}%; left: ${80 + bird5X}%;`);
}

document.addEventListener("mousemove", mouseMoveMethod);

var links = document.querySelectorAll("nav ul a");
var texts = document.querySelectorAll("nav li p");
var homeText = document.querySelector(".home p");
var nav = document.querySelector("nav");
var list = document.querySelector("nav ul");
var listItems = document.querySelectorAll("nav li");
var couch = document.getElementById("couch");
var bg = document.getElementById("bg");
var details = document.querySelectorAll("details");
var sections = document.querySelectorAll("section");

function handleHashChange() {
  var hash = window.location.hash;
  if (hash.length > 0) {
    document.removeEventListener("mousemove", mouseMoveMethod);
    select(hash.substring(1, hash.length));
  } else {
    reset();
    document.addEventListener("mousemove", mouseMoveMethod);
  }
}
handleHashChange();
window.addEventListener("hashchange", handleHashChange);

function select(id) {
  var dark = html.classList.contains("dark");
  var mobile = window.matchMedia("(max-width: 900px)").matches;

  var linkWidth = mobile ? "60px" : "120px";
  var linkHeight = mobile ? "40px" : "80px";
  var fontSize = mobile ? "1.1rem" : "1.6rem";
  // Resizing navigation links
  links.forEach((el) => {
    el.setAttribute(
      "style",
      `font-size: ${fontSize};  width: ${linkWidth}; height: ${linkHeight}; z-index: 2; animation: unset;`
    );
    el.removeAttribute("aria-hidden");
    el.removeAttribute("tabindex");
    el.firstElementChild.removeAttribute("style");
  });

  // Resizing home link and changing text
  var homeLink = document.querySelector(".home a");
  if (mobile) {
    homeLink.setAttribute(
      "style",
      `font-size: ${fontSize}; width: 120px; height: ${linkHeight}; z-index: 2; margin: 0;`
    );
  } else {
    homeLink.setAttribute(
      "style",
      `font-size: ${fontSize}; width: 240px; height: ${linkHeight}; z-index: 2; margin: 0;`
    );
  }
  homeText.textContent = "Eszter's Portfolio";

  // Resetting nav link texts before changing the active link
  texts.forEach((el) => {
    el.removeAttribute("style");
  });

  // Growing active nav link
  var link = document.querySelector("." + id + " > a");
  link.setAttribute(
    "style",
    `position: relative;
    z-index: -2;
    animation: ${dark ? "grow2" : "grow"} 1s ease-in-out forwards;`
  );
  link.setAttribute("aria-hidden", true);
  link.setAttribute("tabindex", -1);

  // Hiding active nav link text and replacing it
  var text = document.querySelector("." + id + " p");
  text.setAttribute("style", "display: none;");
  var text2 = document.querySelector("." + id + "2");
  text2.setAttribute("style", "display: flex;");
  // Changing active li's width
  var listItem = document.querySelector("." + id);
  listItem.setAttribute("style", `width: ${linkWidth};`);

  var navHeight = mobile ? "60px" : "100px";
  // Changing nav height
  nav.setAttribute("style", `height: ${navHeight};`);
  // Changing nav list height
  list.setAttribute(
    "style",
    `padding: 10px; flex-wrap: nowrap; height: ${navHeight};`
  );

  // Hiding illustrations
  couch.setAttribute("style", `display: none`);
  bg.setAttribute("style", `display: none`);

  // Closing details on Projects
  details.forEach((el) => {
    el.removeAttribute("open");
  });

  var section = document.querySelector("#" + id);
  // Hiding all sections before selectiong the active section
  sections.forEach((el) => {
    el.scrollTop = 0;
    el.setAttribute("style", `display: none`);
  });
  // Making active section visible
  switch (id) {
    case "about":
      section.setAttribute("style", "display: block;");
      break;
    case "projects":
      section.setAttribute("style", "display: flex;");
      break;
    case "contact":
      section.setAttribute("style", "display: flex;");
      break;
    default:
      break;
  }
}

// Removing all added style if navigating back to home
function reset() {
  links.forEach((el) => {
    el.removeAttribute("style");
    el.removeAttribute("aria-hidden");
    el.removeAttribute("tabindex");
    el.firstElementChild.removeAttribute("style");
  });

  texts.forEach((el) => {
    el.removeAttribute("style");
  });

  // Resetting home link text
  homeText.textContent = "Welcome to Eszter's Portfolio!";

  nav.removeAttribute("style");
  list.removeAttribute("style");
  listItems.forEach((el) => {
    el.removeAttribute("style");
  });
  couch.removeAttribute("style");

  bg.removeAttribute("style");
  details.forEach((el) => {
    el.removeAttribute("open");
  });

  sections.forEach((el) => {
    el.removeAttribute("style");
  });
}

// For projects slides
var slideIndex = 1;
var slides = document.querySelectorAll("#projects > div");
var dots = document.querySelectorAll(".dot");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail dots controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

var prev = document.getElementById("prev");
prev.addEventListener("click", () => plusSlides(-1));

var next = document.getElementById("next");
next.addEventListener("click", () => plusSlides(1));

dots.forEach((el, i) =>
  el.addEventListener("click", () => currentSlide(i + 1))
);

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // Closing details on project slide
    details[i].removeAttribute("open");
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// To handle swipe events on projects
var touchstartX = 0;
var touchendX = 0;

function handleGesture() {
  if (touchendX + 50 < touchstartX) plusSlides(1);
  if (touchendX - 50 > touchstartX) plusSlides(-1);
}

slides.forEach((el) => {
  el.addEventListener(
    "touchstart",
    (e) => {
      touchstartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
});

slides.forEach((el) => {
  el.addEventListener(
    "touchend",
    (e) => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    },
    { passive: true }
  );
});
