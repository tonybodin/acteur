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
let lightbox = GLightbox();
            lightbox.on('open', (target) => {
                console.log('lightbox opened');
            });
            let lightboxDescription = GLightbox({
                selector: '.glightbox2'
            });
            let lightboxVideo = GLightbox({
                selector: '.glightbox3'
            });
            lightboxVideo.on('slide_changed', ({ prev, current }) => {
                console.log('Prev slide', prev);
                console.log('Current slide', current);

                const { slideIndex, slideNode, slideConfig, player } = current;

                if (player) {
                    if (!player.ready) {
                        // If player is not ready
                        player.on('ready', (event) => {
                            // Do something when video is ready
                        });
                    }

                    player.on('play', (event) => {
                        console.log('Started play');
                    });

                    player.on('volumechange', (event) => {
                        console.log('Volume change');
                    });

                    player.on('ended', (event) => {
                        console.log('Video ended');
                    });
                }
            });

            let lightboxInlineIframe = GLightbox({
                selector: '.glightbox4'
            });




