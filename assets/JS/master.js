const navItems = document.querySelectorAll(".nav-item a");
const indicator = document.querySelector(".indicator");

function setActiveItem() {
  const activeItem = document.querySelector(".nav .rightNav ul li a.active");
  if (activeItem && indicator) {
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
// ==========================================
function getActiveItem() {
  let activeIndex = localStorage.getItem("activeNavItem");
  if (activeIndex === null) {
    const homePage = document.querySelector(".nav-item a.active");
    homePage.classList.add("active");
    setActiveItem();
  } else {
    navItems.forEach((item) => item.classList.remove("active"));
    navItems[parseInt(activeIndex)].classList.add("active");
    setActiveItem();
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   navItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       navItems.forEach((navItem) => navItem.classList.remove("active"));
//       this.classList.add("active");

//       setActiveItem();
//     });
//   });

//   getActiveItem();
// });

// ==========================================
