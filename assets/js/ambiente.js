const scrollPoints = [...document.querySelectorAll('section'), document.querySelector('footer')];
let currentPointIndex = 0;
let isScrolling = false;

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const footer = document.querySelector('footer');
const footerPosition = footer.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }

    if (window.scrollY + window.innerHeight > footerPosition) {
        const overlap = (window.scrollY + window.innerHeight) - footerPosition;
        scrollToTopBtn.style.bottom = `${overlap + 20}px`;
    } else {
        scrollToTopBtn.style.bottom = '20px';
    }
});

window.addEventListener('wheel', (event) => {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0 && currentPointIndex < scrollPoints.length - 1) {
        currentPointIndex++;
    } else if (event.deltaY < 0 && currentPointIndex > 0) {
        currentPointIndex--;
    }

    scrollPoints[currentPointIndex].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        isScrolling = false;
    }, 800);
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(index) {
    currentSectionIndex = index;
    scrollPoints[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('menu-open');
  }
  