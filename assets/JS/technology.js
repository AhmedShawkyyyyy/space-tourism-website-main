let launch = document.getElementById("launch");
let spaceport = document.getElementById("spaceport");
let spacecapsule = document.getElementById("spacecapsule");
let indicator1 = document.getElementById("indicator1");
let indicator2 = document.getElementById("indicator2");
let indicator3 = document.getElementById("indicator3");

function hideAllSections() {
  launch.style.display = "none";
  spaceport.style.display = "none";
  spacecapsule.style.display = "none";
}

function resetIndicators() {
  indicator1.classList.remove("active");
  indicator2.classList.remove("active");
  indicator3.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
  function showSection(sectionId, indicator) {
    hideAllSections();
    resetIndicators();
    document.getElementById(sectionId).style.display = "block";
    indicator.classList.add("active");
  }
  indicator1.addEventListener("click", function () {
    showSection("launch", indicator1);
  });

  indicator2.addEventListener("click", function () {
    showSection("spaceport", indicator2);
  });
  indicator3.addEventListener("click", function () {
    showSection("spacecapsule", indicator3);
  });
  showSection("launch", indicator1);
});

// ====================================//

let image1 = document.getElementById("emp-img-1");
let image2 = document.getElementById("emp-img-2");
let image3 = document.getElementById("emp-img-3");
console.log(image1);
console.log(image2);
console.log(image3);
let screenWidth = window.innerWidth || document.documentElement.clientWidth;
console.log(screenWidth);
window.addEventListener("resize", () => {
  if (screenWidth <= 576) {
    image1.src = "../assets/img/technology/image-launch-vehicle-landscape.jpg";
    image2.src = "../assets/img/technology/image-spaceport-landscape.jpg";
    image3.src = "../assets/img/technology/image-space-capsule-landscape.jpg";
  } else if (screenWidth > 578 && screenWidth <= 1088) {
    image1.src = "../assets/img/technology/image-launch-vehicle-landscape.jpg";
    image2.src = "../assets/img/technology/image-spaceport-landscape.jpg";
    image3.src = "../assets/img/technology/image-space-capsule-landscape.jpg";
  } else {
    image1.src = "../assets/img/technology/image-launch-vehicle-portrait.jpg";
    image2.src = "../assets/img/technology/image-spaceport-portrait.jpg";
    image3.src = "../assets/img/technology/image-space-capsule-portrait.jpg";
  }
});
