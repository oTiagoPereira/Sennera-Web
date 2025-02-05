const sections = [...document.querySelectorAll("section")];
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const footer = document.querySelector("footer");
let currentIndex = 0;
let isScrolling = false;

const footerPosition = footer ? footer.offsetTop : window.innerHeight; 

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.pointerEvents = "auto"; 
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.pointerEvents = "none";
  }

  if (window.scrollY + window.innerHeight > footerPosition) {
    const overlap = window.scrollY + window.innerHeight - footerPosition;
    scrollToTopBtn.style.bottom = `${overlap + 20}px`;
  } else {
    scrollToTopBtn.style.bottom = "20px";
  }

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.pointerEvents = "none";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    if (sections.length > 0) {
      sections[0].classList.add("visible");
    }
  });