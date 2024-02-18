document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".indicatores i");
  const sections = document.querySelectorAll(".card2");

  // Function to hide all sections
  function hideSections() {
    sections.forEach((section) => {
      section.style.display = "none";
    });
  }

  // Function to remove active class from all indicators and reset their colors
  function resetIndicators() {
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
      indicator.style.color = ""; // Reset color to default
    });
  }

  // Function to show the selected section and apply active class and white color to the corresponding indicator
  function showSection(sectionId, indicatorId) {
    hideSections();
    resetIndicators();
    document.getElementById(sectionId).style.display = "block";
    const indicator = document.getElementById(indicatorId);
    indicator.classList.add("active");
    indicator.style.color = "white"; // Apply white color to the selected indicator
  }

  // Event listener for each indicator
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      const sectionId = ["victor", "douglas", "anoushah", "mark"][index];
      const indicatorId = `indicator${index + 1}`;
      showSection(sectionId, indicatorId);
    });
  });

  // Show the first section and apply active class and white color to the first indicator on page load
  showSection("victor", "indicator1");
});
function showSection(sectionId, indicatorId) {
  hideSections();
  resetIndicators();
  document.getElementById(sectionId).style.display = "block";
  const indicator = document.getElementById(indicatorId);
  indicator.classList.add("active");
  indicator.style.color = "white";

  // Scroll to the selected section smoothly
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// nav functions////////////////
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

// Function to retrieve the active item from localStorage
function getActiveItem() {
  let activeIndex = localStorage.getItem("activeNavItem");
  if (activeIndex === null) {
    // If no active item is set in localStorage, default to the home page
    const homePage = document.querySelector(".nav-item a.active");
    homePage.classList.add("active");
    setActiveItem();
  } else {
    const navItems = document.querySelectorAll(".nav-item a");
    navItems.forEach((item) => item.classList.remove("active"));
    navItems[parseInt(activeIndex)].classList.add("active");
    setActiveItem();
  }
}

// Add event listeners to each list item
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      this.classList.add("active");
      this.style.color = "blue";

      setActiveItem();
    });
  });

  // Retrieve and set the active item on page load
  getActiveItem();
});
