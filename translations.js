const translations = {

   fr: {

    "current-lang": "FR",

    "hero-description":
    "Créateur de contenu visuel spécialisé en Motion Graphics, montage vidéo et création de séries IA."

},


en: {

    "current-lang": "EN",

    "hero-description":
    "Visual content creator specialized in Motion Graphics, video editing and AI series creation."

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
function changeTypingLanguage(lang){

    if(lang === "fr"){

        words = wordsFR;

    } else {

        words = wordsEN;

    }

    wordIndex = 0;
    charIndex = 0;
    deleting = false;

}