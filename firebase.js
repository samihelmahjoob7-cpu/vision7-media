// ==========================
// Firebase App
// ==========================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
// ==========================
// Firebase Configuration
// ==========================

const firebaseConfig = {

  apiKey: "AIzaSyBheuRSCw7fdCcYaCAeOHMqe5XRJssajY8",
  authDomain: "vision7-media.firebaseapp.com",
  projectId: "vision7-media",
  storageBucket: "vision7-media.firebasestorage.app",
  messagingSenderId: "464361070341",
  appId: "1:464361070341:web:ef6e14e32f4a55793d616c"

};


// ==========================
// Initialize Firebase
// ==========================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// نخلي db متاح إذا احتجناه
window.db = db;

// ==========================
// Send Avis
// ==========================

const reviewForm = document.getElementById("review-form");

if (reviewForm) {

    reviewForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const name = document.getElementById("review-name").value.trim();
        const rating = document.getElementById("review-rating").value;
        const comment = document.getElementById("review-comment").value.trim();

        if (!name || !comment) {

            alert("Veuillez remplir tous les champs");
            return;

        }

        try {

            await addDoc(collection(db, "reviews"), {

                name: name,
                rating: Number(rating),
                comment: comment,
                approved: false,
                date: serverTimestamp()

            });

           document.getElementById("success-popup").classList.add("active");

            reviewForm.reset();

            document.getElementById("review-rating").value = 5;

        } catch (error) {

            console.error(error);

            alert("Erreur lors de l'envoi.");

        }

    });

}
const closeBtn = document.getElementById("close-success");

if(closeBtn){

closeBtn.onclick = () =>{

document.getElementById("success-popup").classList.remove("active");

};

}
// ==========================
// Load Reviews
// ==========================

async function loadReviews() {

    const reviewsContainer = document.getElementById("reviews-list");

    if (!reviewsContainer) return;

    reviewsContainer.innerHTML =
        "<div class='loading-reviews'>Chargement des avis...</div>";

    try {

        const reviewsQuery = query(
            collection(db, "reviews"),
            where("approved", "==", true),
            orderBy("date", "desc")
        );

        const snapshot = await getDocs(reviewsQuery);
        // ==========================
// Calcul moyenne
// ==========================

let totalRating = 0;

snapshot.forEach((doc) => {

    totalRating += doc.data().rating;

});

const average =
    snapshot.empty ? 0 : (totalRating / snapshot.size).toFixed(1);

document.getElementById("average-rating").innerHTML =
    `⭐⭐⭐⭐⭐ ${average}`;

document.getElementById("reviews-count").innerHTML =
    `Basé sur ${snapshot.size} avis`;

        reviewsContainer.innerHTML = "";

        if (snapshot.empty) {

            reviewsContainer.innerHTML =
                "<div class='loading-reviews'>Aucun avis pour le moment.</div>";

            return;

        }

        snapshot.forEach((doc) => {

            const review = doc.data();

            reviewsContainer.innerHTML += `
                <div class="review-card">

                   <div class="review-top">

    <div class="review-user">

        <div class="review-avatar">
            ${review.name.charAt(0).toUpperCase()}
        </div>

        <div>

            <div class="review-name">
                ${review.name}
            </div>

            <div class="review-date">
                📅 ${formatDate(review.date)}
            </div>

        </div>

    </div>

    <div class="review-stars">
        ${"⭐".repeat(review.rating)}
    </div>

</div>

                  <div class="review-text">
    ${review.comment}
</div>

<div class="review-date">
    📅 ${formatDate(review.date)}
</div>
                </div>
            `;

        });

    } catch (error) {

        console.error("Erreur chargement :", error);

    }

}

loadReviews();
// ==========================
// Format Date
// ==========================

function formatDate(timestamp){

    if(!timestamp) return "";

    const date = timestamp.toDate();

    return date.toLocaleDateString("fr-FR",{

        day:"numeric",
        month:"long",
        year:"numeric"

    });

}
const translations = {

    fr: {

        "current-lang": "FR",

        "hero-title": "Bienvenue sur mon portfolio"

    },


    en: {

        "current-lang": "EN",

        "hero-title": "Welcome to my portfolio"

    }

};


function changeLanguage(lang){

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if(translations[lang][key]){

            element.textContent = translations[lang][key];

        }

    });


    localStorage.setItem("language", lang);

    document.getElementById("current-lang").textContent =
        translations[lang]["current-lang"];

}



document.querySelectorAll(".language-menu button").forEach(button => {

    button.addEventListener("click", ()=>{

        changeLanguage(button.dataset.lang);

    });

});



const savedLang = localStorage.getItem("language") || "fr";

changeLanguage(savedLang);
