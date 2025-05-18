//--------------- NAVBAR COLOR EFFECT AND PROGRESS BAR -----------------
 window.onscroll = function() {
    updateProgressBar();
    scrollFunction();
};

function updateProgressBar() {
    let navbar = document.getElementById("nav-progress-bar");
    let progressBar = document.getElementById("progress-bar");
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
}

function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        document.getElementById("navbar").style.background = "transparent";
    }
}


//--------------- CHANGE BACKGROUND COLOR ON SCROLL -----------------
document.addEventListener('DOMContentLoaded', function () {
  let aboutSection = document.querySelector('.about-section');
  let header = document.querySelector('header'); // Adjust this selector based on your header structure
  let contactSection = document.getElementById("contact");
  let projectsSection = document.getElementById("gallery");

  window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let aboutSectionTop = aboutSection.offsetTop; // Distance from the top of the document to the top of .about-section
    let headerOpacity = Math.min(1, scrollPosition / aboutSectionTop);
    let windowHeight = window.innerHeight;
    let contactSectionHeight = contactSection.offsetHeight;
    let projectsSectionHeight = projectsSection.offsetHeight;
    let contactSectionThreshold = contactSection.offsetTop + contactSectionHeight - windowHeight;
    let projectsSectionThreshold = projectsSection.offsetTop + projectsSectionHeight - windowHeight;

    aboutSection.style.backgroundColor = 'rgba(0, 0, 0, ' + headerOpacity + ')';
    header.style.backgroundColor = 'rgba(0, 0, 0, ' + headerOpacity + ')';

    if (scrollPosition >= contactSectionThreshold || scrollPosition >= projectsSectionThreshold) {
      let opacity = 1 - (scrollPosition - Math.min(contactSectionThreshold, projectsSectionThreshold)) / windowHeight;
      contactSection.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
      projectsSection.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    } else {
      contactSection.style.backgroundColor = "black";
      projectsSection.style.backgroundColor = "black";
    }
  });
});

//--------------- TEXT REVEAL -----------------
  window.addEventListener('scroll', reveal);

    function reveal() {
        let reveals = document.querySelectorAll('.reveal-text');
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('reveal');
            }
        }
    }

//--------------- IMAGES REVEAL -----------------
  window.addEventListener('scroll', revealImages);

    function revealImages() {
      const projectImages = document.querySelectorAll('.image-reveal');

    projectImages.forEach(image => {
      const imagePosition = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adjust this value based on when you want the animation to trigger
      const revealScrollPoint = windowHeight / 1.5;

      if (imagePosition < revealScrollPoint) {
        image.classList.add('reveal');
      }
    });
  }

//--------------- CREDIT SIDEBAR -----------------
function openNav() {
  document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
}

function toggleNav() {
  let sidenavWidth = document.getElementById("mySidenav").style.width;
  if (sidenavWidth === "0px" || sidenavWidth === "") {
    openNav();
  } else {
    closeNav();
  }
}

// ----------------- LIGHTBOX GALLERY -------------
document.addEventListener("DOMContentLoaded", () => {
  const imageLinks = Array.from(document.querySelectorAll(".glightbox"));
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox-overlay");
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <button class="lightbox-arrow left">&#10094;</button>
    <div class="lightbox-caption"></div>
    <img src="" alt="lightbox image">
    <button class="lightbox-arrow right">&#10095;</button>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-arrow.left");
  const nextBtn = lightbox.querySelector(".lightbox-arrow.right");
  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    lightboxImage.src = imageLinks[currentIndex].href;
    lightboxCaption.textContent = imageLinks[currentIndex].dataset.title || "";
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeLightbox = () => {
    lightbox.style.display = "none";
    document.body.style.overflow = ""; // Enable scrolling
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
    openLightbox(currentIndex);
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % imageLinks.length;
    openLightbox(currentIndex);
  };

  // Setup event listeners
  imageLinks.forEach((link, index) => {
    link.addEventListener("click", e => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") lightbox.style.display = "none";
    }
  });

  // Touch swipe support
  let startX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].screenX;
    const deltaX = endX - startX;
    if (deltaX > 50) showPrev();
    else if (deltaX < -50) showNext();
  });
});





