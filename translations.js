const translations = {

   fr: {

    "current-lang": "FR",

    "hero-description":
    "Créateur de contenu visuel spécialisé en Motion Graphics, montage vidéo et création de séries IA.",

    "about_title":
    "À Propos",

    "who_title":
    "Qui suis-je ?",

    "about_text":
"Je suis <strong>Samih El Mahjoub</strong>, fondateur de <strong>Vision7 Media</strong> et passionné par la création de contenus visuels innovants.<br><br>✔ Montage Vidéo Professionnel<br>✔ Motion Graphics Modernes<br>✔ Création de contenus IA<br>✔ Branding Visuel<br>✔ Réseaux Sociaux<br><br>Mon objectif est d'aider les entreprises et les créateurs à transformer leurs idées en contenus visuels percutants et mémorables.",
"services_title":
"Mes Services",
"video_editing_title":
"Video Editing",

"video_editing_text":
"Montage professionnel pour YouTube, Instagram, TikTok et entreprises.<br><br>✔ Réels<br>✔ Publicités<br>✔ Vidéos Corporate",
"motion_graphics_title":
"Motion Graphics",

"motion_graphics_text":
"Animations modernes et créatives.<br><br>✔ Logo Animation<br>✔ Intro & Outro<br>✔ Publicités Animées",
"ai_content_title":
"AI Content",

"ai_content_text":
"Création de contenus innovants avec l'Intelligence Artificielle.<br><br>✔ Images IA<br>✔ Vidéos IA<br>✔ Storytelling IA",
"visual_branding_title":
"Visual Branding",

"visual_branding_text":
"Création d'identités visuelles fortes pour les marques et entreprises.<br><br>✔ Logo Design<br>✔ Brand Identity<br>✔ Design Visuel Moderne",

"social_media_title":
"Social Media",

"social_media_text":
"Création de contenus adaptés aux plateformes sociales.<br><br>✔ Instagram Reels<br>✔ TikTok Content<br>✔ Stratégie Visuelle",
},


    en: {

    "current-lang": "EN",

    "hero-description":
    "Visual content creator specialized in Motion Graphics, video editing and AI series creation.",

    "about_title":
    "About",

    "who_title":
    "Who am I?",

    "about_text":
"I am <strong>Samih El Mahjoub</strong>, founder of <strong>Vision7 Media</strong> and passionate about creating innovative visual content.<br><br>✔ Professional Video Editing<br>✔ Modern Motion Graphics<br>✔ AI Content Creation<br>✔ Visual Branding<br>✔ Social Media<br><br>My goal is to help businesses and creators transform their ideas into impactful and memorable visual content.",
"services_title":
"My Services",
"video_editing_title":
"Video Editing",

"video_editing_text":
"Professional editing for YouTube, Instagram, TikTok and businesses.<br><br>✔ Reels<br>✔ Advertisements<br>✔ Corporate Videos",
"motion_graphics_title":
"Motion Graphics",

"motion_graphics_text":
"Modern and creative animations.<br><br>✔ Logo Animation<br>✔ Intro & Outro<br>✔ Animated Advertisements",
"ai_content_title":
"AI Content",

"ai_content_text":
"Creation of innovative content using Artificial Intelligence.<br><br>✔ AI Images<br>✔ AI Videos<br>✔ AI Storytelling",
"visual_branding_title":
"Visual Branding",

"visual_branding_text":
"Creation of strong visual identities for brands and businesses.<br><br>✔ Logo Design<br>✔ Brand Identity<br>✔ Modern Visual Design",

"social_media_title":
"Social Media",

"social_media_text":
"Creation of content adapted to social platforms.<br><br>✔ Instagram Reels<br>✔ TikTok Content<br>✔ Visual Strategy",
}
};



function changeLanguage(lang){

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if(translations[lang][key]){

            element.textContent = translations[lang][key];

        }

    });
document.querySelectorAll("[data-i18n-html]").forEach(element => {

    const key = element.dataset.i18nHtml;

    if(translations[lang][key]){

        element.innerHTML = translations[lang][key];

    }

});

    const currentLang = document.getElementById("current-lang");

    if(currentLang){

        currentLang.textContent =
        translations[lang]["current-lang"];

    }


    localStorage.setItem("language", lang);

}



document.querySelectorAll(".language-menu button").forEach(button => {

    button.addEventListener("click", ()=>{

        changeLanguage(button.dataset.lang);

    });

});



const savedLang = localStorage.getItem("language") || "fr";

changeLanguage(savedLang);
console.log("Translations loaded");