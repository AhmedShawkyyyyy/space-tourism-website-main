const moonSection = document.getElementById("moonSection");
const marsSection = document.getElementById("marsSection");
const europaSection = document.getElementById("europaSection");
const titanSection = document.getElementById("titanSection");

const moonLink = document.getElementById("moonLink");
const marsLink = document.getElementById("marsLink");
const europaLink = document.getElementById("europaLink");
const titanLink = document.getElementById("titanLink");

function hideAllSections() {
  moonSection.style.display = "none";
  marsSection.style.display = "none";
  europaSection.style.display = "none";
  titanSection.style.display = "none";
}

hideAllSections();
moonSection.style.display = "block";

marsLink.addEventListener("click", function () {
  hideAllSections();
  marsSection.style.display = "block";
});

europaLink.addEventListener("click", function () {
  hideAllSections();
  europaSection.style.display = "block";
});

titanLink.addEventListener("click", function () {
  hideAllSections();
  titanSection.style.display = "block";
});

const navItems = document.querySelectorAll(".nav-item a");
const indicator = document.querySelector(
  ".nav .rightNav ul li a.active::after"
);

function setActiveItem() {
  const activeItem = document.querySelector(".nav .rightNav ul li a.active");
  if (activeItem) {
    const indicatorWidth = activeItem.offsetWidth;
    const indicatorLeft = activeItem.offsetLeft;
    indicator.style.width = `${indicatorWidth}px`;
    indicator.style.left = `${indicatorLeft}px`;

    const activeIndex = Array.from(activeItem.parentNode.children).indexOf(
      activeItem
    );
    localStorage.setItem("activeNavItem", activeIndex.toString());
  }
}
// =====================================================
function getActiveItem() {
  let activeIndex = localStorage.getItem("activeNavItem");
  if (activeIndex === null) {
    const homePage = document.querySelector(
      ".container .row .col-11 ul li.active::after"
    );
    homePage.classList.add("active");
    setActiveItem();
  } else {
    const navItems = document.querySelectorAll(".container .row .col-11 ul li");
    navItems.forEach((item) => item.classList.remove("active"));
    navItems[parseInt(activeIndex)].classList.add("active");
    setActiveItem();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".container .row .col-11 ul li");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      this.classList.add("active");
      setActiveItem();
    });
  });

  getActiveItem();
});
moonLink.addEventListener("click", function () {
  hideAllSections();
  moonSection.style.display = "block";
});
// ===================================================
