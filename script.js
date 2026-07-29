
// =========================
// Scroll Portfolio
// =========================

function scrollToPortfolio() {
    document.getElementById("portfolio").scrollIntoView({
        behavior: "smooth"
    });
}

// =========================
// Particles
// =========================

particlesJS("particles-js", {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: ["#c77dff", "#9d4edd", "#7b2cbf"]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5,
            random: true
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#c77dff",
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            out_mode: "out"
        }
    },

    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});

// =========================
// Popup Video
// =========================

function openVideo(videoSrc) {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    modal.style.display = "flex";

    video.src = videoSrc;
    video.load();
    video.play();

}

function closeVideo() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    video.pause();
    video.currentTime = 0;

    modal.style.display = "none";

}

// =========================
// Quand la page est chargée
// =========================

document.addEventListener("DOMContentLoaded", () => {
// ==========================
// Hamburger Menu
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

   

     

       navMenu.classList.toggle("active");

document.body.style.overflow =
navMenu.classList.contains("active")
? "hidden"
: "";

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

    document.querySelectorAll("#nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

document.body.style.overflow = "";

const icon = menuToggle.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");
        });

    });
// ==========================
// Close menu when clicking outside
// ==========================



// ==========================
// Close menu when resizing
// ==========================


}
// ==========================
// Close menu when clicking outside
// ==========================



// ==========================
// Close menu on desktop
// ==========================




    // ---------- Theme ----------

    const themeBtn = document.getElementById("theme-toggle");

    themeBtn.addEventListener("click", () => {


        document.body.classList.toggle("light-mode");

        const particles = document.getElementById("particles-js");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.textContent = "☀️";

            particles.style.background =
                "linear-gradient(135deg,#ffffff,#f3f3f3,#e9e9e9)";

        } else {

            themeBtn.textContent = "🌙";

            particles.style.background =
                "linear-gradient(135deg,#050816,#0b1026,#130b2e)";

        }

    });
    // ---------- Hero Typewriter ----------

const typingText = document.getElementById("typing-text");

const words = [

    "Video Editor",

    "Motion Designer",

    "AI Filmmaker",

    "Content Creator"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingText.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

    
    // ---------- Portfolio Categories ----------

    const buttons = document.querySelectorAll(".category-btn");
    const categories = document.querySelectorAll(".video-category");

    buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {

            btn.classList.remove(
                "active",
                "active-motion",
                "active-experience",
                "active-production",
                "active-social"
            );

        });

        categories.forEach(cat => {

            cat.classList.remove("active-category");

        });

        button.classList.add("active");

        const category = button.dataset.category;

        document
            .getElementById(category)
            .classList.add("active-category");

        switch(category){

            case "motion":
                button.classList.add("active-motion");
                break;

            case "experience":
                button.classList.add("active-experience");
                break;

            case "production":
                button.classList.add("active-production");
                break;

            case "social":
                button.classList.add("active-social");
                break;

        }

    });

});
// ---------- Hover Video ----------

document.querySelectorAll(".portfolio-item").forEach(card => {

    const video = card.querySelector(".project-video");

    if (!video) return;

    card.addEventListener("mouseenter", () => {

        video.currentTime = 0;
        video.play();

    });

    card.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});

// ---------- Header Scroll Effect ----------

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(

".card,.portfolio-item,.about-container,.contact-container"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
// ==========================
// Cursor Glow
// ==========================

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

// ==========================
// Cinematic Loader
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

       const loader = document.getElementById("loader");

        if(loader){
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";
        }

    }, 1000);

});

// ==========================
// Language Menu
// ==========================

const langBtn = document.getElementById("lang-btn");
const langMenu = document.querySelector(".language-menu");

if (langBtn && langMenu) {

    langBtn.addEventListener("click", () => {
        langMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {

        if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.classList.remove("active");
        }

    });

}

// ==========================
// Animated Counters
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let count = 0;
        const increment = Math.ceil(target / 60);

        const updateCounter = () => {

            count += increment;

            if (count >= target) {
                counter.textContent = target + "+";
            } else {
                counter.textContent = count;
                requestAnimationFrame(updateCounter);
            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
// ==========================
// Interactive Rating Stars
// ==========================

const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("review-rating");

if (stars.length) {

    stars.forEach((star) => {

        star.addEventListener("click", () => {

            const value = star.dataset.value;

            ratingInput.value = value;

            stars.forEach((s) => {

                s.classList.remove("active");

                if (s.dataset.value <= value) {

                    s.classList.add("active");

                }

            });

        });

        star.addEventListener("mouseenter", () => {

            const value = star.dataset.value;

            stars.forEach((s) => {

                s.style.color =
                    s.dataset.value <= value ? "#FFD700" : "#555";

            });

        });

    });

    document.querySelector(".stars-container")
        .addEventListener("mouseleave", () => {

            const value = ratingInput.value;

            stars.forEach((s) => {

                s.style.color =
                    s.dataset.value <= value ? "#FFD700" : "#555";

            });

        });

}