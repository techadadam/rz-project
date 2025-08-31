console.log("Hi!");

const myName = "AL";
const h1 = document.querySelector(".hero-title");
console.log(myName);
console.log(h1);

// current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scroll

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Closing mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // W viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Flexbox gap Sa
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// My scrolling flexbox
const scrollContainer = document.getElementById("scrollableflex");
let scrollDirection = 1; // 1 = right, -1 = left

function autoScroll() {
  const maxScrollLeft =
    scrollContainer.scrollWidth - scrollContainer.clientWidth;

  // Zmień kierunek, jeśli osiągnięto któryś z końców
  if (scrollContainer.scrollLeft >= maxScrollLeft) {
    scrollDirection = -1;
  } else if (scrollContainer.scrollLeft <= 0) {
    scrollDirection = 1;
  }

  scrollContainer.scrollLeft += scrollDirection;
}

// Uruchom co 20 ms dla płynnego efektu
setInterval(autoScroll, 20);
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
