// --------------- skill section ----------------------- //
const skillContent = document.getElementsByClassName("skill-content");
const skillHeader = document.querySelectorAll(".skill-header");

function toggleSkill() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillContent.length; i++) {
    skillContent[i].className = "skill-content skill-close";
  }

  if (itemClass === "skill-content skill-close") {
    this.parentNode.className = "skill-content skill-open";
  }
}

skillHeader.forEach((el) => {
  el.addEventListener("click", toggleSkill);
});

// ----------- Media queries ( Tablet ) ----------------- //
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav-menu");

//open nav menu
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
  menu.style.display = "block";
});

//close nav menu
const closeNav = () => {
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
  menu.style.display = "none";
};

closeBtn.addEventListener("click", closeNav);

//close nav menu when itams are clicked ( on mobile )
if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav-menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}

//change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
