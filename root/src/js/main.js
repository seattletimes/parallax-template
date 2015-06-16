require("./lib/ads");

var Share = require("share");

new Share(".share", {
  ui: {
    flyout: "top center"
  }
});
new Share(".share-bottom", {
  ui: {
    flyout: "top left"
  }
});

var images = [].slice.call(document.querySelectorAll("img.fixable"));
var dest = document.querySelector(".fixed-frame");
var sections = [].slice.call(document.querySelectorAll(".parallax-play"));

var dots = document.createElement("ul");
dots.className = "dots";

var indexed = [];

images.forEach(function(img, i) {
  var index = img.parentElement.getAttribute("data-index");
  indexed[index * 1] = img;
  if (!i) img.setAttribute("visible", "");
  dest.appendChild(img);
  var dot = document.createElement("li");
  dot.className = "dot";
  dots.appendChild(dot);
});

dest.appendChild(dots);

var debounce = function(f, d) {
  d = d || 100;
  var timeout = null;
  return function() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    if (timeout) return;
    timeout = setTimeout(function() {
      timeout = null;
      f.apply(null, args);
    }, d);
  };
};

window.addEventListener("scroll", debounce(function(e) {
  var activeDot = dots.querySelector(".active");
  if (activeDot) activeDot.className = activeDot.className.replace(/active/g, "");
  var lastVisible = 1;

  for (var i = 1; i < sections.length; i++) {
    var section = sections[i];
    var bounds = section.getBoundingClientRect();
    if (bounds.top <= window.innerHeight) {
      indexed[i].setAttribute("visible", "");
      lastVisible = i + 1;
    } else {
      indexed[i].removeAttribute("visible");
    }
  }

  dots.querySelector(".dot:nth-child(" + lastVisible + ")").className += " active";
}));

document.querySelector("aside.no-mobile-portrait .ok").addEventListener("click", function() {
  document.body.className += " hide-warning";
})