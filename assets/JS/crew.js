document.addEventListener("DOMContentLoaded", function () {
  const indicators = document.querySelectorAll(".indicatores i");
  const sections = document.querySelectorAll(".card2");

  function hideSections() {
    sections.forEach((section) => {
      section.style.display = "none";
    });
  }

  function resetIndicators() {
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
      indicator.style.color = "";
    });
  }

  function showSection(sectionId, indicatorId) {
    hideSections();
    resetIndicators();
    document.getElementById(sectionId).style.display = "block";
    const indicator = document.getElementById(indicatorId);
    indicator.classList.add("active");
    indicator.style.color = "white";
  }

  // Event listener for each indicator
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      const sectionId = ["victor", "douglas", "anoushah", "mark"][index];
      const indicatorId = `indicator${index + 1}`;
      showSection(sectionId, indicatorId);
    });
  });

  showSection("victor", "indicator1");
});
function showSection(sectionId, indicatorId) {
  hideSections();
  resetIndicators();
  document.getElementById(sectionId).style.display = "block";
  const indicator = document.getElementById(indicatorId);
  indicator.classList.add("active");
  indicator.style.color = "white";

  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

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

function getActiveItem() {
  let activeIndex = localStorage.getItem("activeNavItem");
  if (activeIndex === null) {
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

// document.addEventListener("DOMContentLoaded", function () {
//   const navItems = document.querySelectorAll(".nav-item a");
//   navItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       navItems.forEach((navItem) => navItem.classList.remove("active"));
//       this.classList.add("active");
//       this.style.color = "blue";

//       setActiveItem();
//     });
//   });

//   getActiveItem();
// });
