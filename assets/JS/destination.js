const moonSection = document.getElementById("moonSection");
const marsSection = document.getElementById("marsSection");
const europaSection = document.getElementById("europaSection");
const titanSection = document.getElementById("titanSection");

// Get references to the list items
const moonLink = document.getElementById("moonLink");
const marsLink = document.getElementById("marsLink");
const europaLink = document.getElementById("europaLink");
const titanLink = document.getElementById("titanLink");

// Function to hide all sections
function hideAllSections() {
  moonSection.style.display = "none";
  marsSection.style.display = "none";
  europaSection.style.display = "none";
  titanSection.style.display = "none";
}

// Initially hide all sections except for moon
hideAllSections();
moonSection.style.display = "block";

// Event listener for Mars link
marsLink.addEventListener("click", function () {
  hideAllSections();
  marsSection.style.display = "block";
});

// Event listener for Europa link
europaLink.addEventListener("click", function () {
  hideAllSections();
  europaSection.style.display = "block";
});

// Event listener for Titan link
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
// Function to retrieve the active item from localStorage
function getActiveItem() {
  let activeIndex = localStorage.getItem("activeNavItem");
  if (activeIndex === null) {
    // If no active item is set in localStorage, default to the home page
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

// Add event listeners to each list item
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".container .row .col-11 ul li");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      this.classList.add("active");
      setActiveItem();
    });
  });

  // Retrieve and set the active item on page load
  getActiveItem();
});
moonLink.addEventListener("click", function () {
  hideAllSections();
  moonSection.style.display = "block";
});
// ===================================================
