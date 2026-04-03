let currentLang = localStorage.getItem("lang") || "kn";

const translations = {

    en: {

        home: "Home",
        products: "Products",
        contact: "Contact",

        brand1: "Brundhavana",
        brand2: "Farm House",

        viewProducts: "_________  _____________",
        call: "Call Us",

        freshTitle: "Fresh Farm Products",
        freshDesc: "Healthy puppies, country chicken, fresh eggs, pure butter and more.",

        visitTitle: "Visit Our Farm",
        visitDesc: "It is located in Devapura village, Hosadurga Taluk, Chitradurga District.",

        directTitle: "Direct From Farmer",
        directDesc: "No middlemen. Buy directly for best quality and price.",

        readyTitle: "Ready to Buy?",
        contactDesc: "Contact us via phone or WhatsApp. We are happy to help.",
        whatsapp: "WhatsApp Us",

        ourProducts: "Our Products",
        productTagline: "Fresh farm products directly from Brundhavana Farm House",

        puppies: "Dog Puppies",
        sheep: "Sheep & Goats",
        butter: "Butter & Ghee",
        natikoli: "Nati Koli",
        eggs: "Country Eggs",

        footerBrand: "Brundhavana Farm House",
        footerLine1: "Fresh from farm to your family.",
        footerLine2: "Visit us for quality farm products.",

        footerContact: "Contact Us",
        footerLocation1: "Brundan: 📞8971662643",
        footerLocation2: "Spandan: 📞8151993144",
        footerLocation3: "Kishor: 📞7795368831",

        footerOffline: "⚠️ Offline Purchase Only",
        footerNoOnline: "No online delivery or payment.",
        footerVisitCall: "Visit our farm or call to buy.",

        footerKannadaLine: "Kannada is truth, Kannada is eternal",

        contactTitle: "Contact & Visit Us",
        contactSubtitle: "Get in touch or visit our farm",

        farmLocation: "Farm Location",
        farmAddress: "Brundhavana Farm House\nDevapura Village\nHosadurga 577-527",

        visitingHours: "Visiting Hours",
        weekdays: "Monday - Saturday: 8:00 AM - 6:00 PM",
        sunday: "Sunday: 9:00 AM - 1:00 PM",
        visitNote: "*Please call before visiting to confirm availability",

        whatsappTitle: "WhatsApp",
        whatsappDesc: "Click to message us",
        callTitle: "Call Us",

        ourProducts: "Our Products",
        productTagline: "Fresh farm products directly from Brundhavana Farm House",

        puppiesTitle: "Dog Puppies",
        puppiesDesc: "Healthy, farm-raised puppies. Well-cared for and ready for loving homes. Various breeds available.",

        sheepTitle: "Sheep & Goats",
        sheepDesc: "Healthy sheep and goats raised on open pastures. Available for purchase. Contact for availability.",

        butterTitle: "Butter & Ghee",
        butterDesc: "Pure homemade butter and ghee from farm-fresh milk. Traditional preparation for authentic taste.",

        natiKoliTitle: "Nati Koli",
        natiKoliDesc: "Free-range country chicken raised naturally on our farm. Fresh and healthy. Available live or dressed.",

        eggsTitle: "Country Eggs",
        eggsDesc: "Fresh country eggs from our free-range hens. Rich in nutrition and flavor. Collected daily.",

        bananaTitle: "Banana & Banana Plant",
        bananaDesc: "Fresh bananas grown on our farm. Healthy banana plants are also available for farming or gardens.",

    },

    kn: {

        home: "ಮುಖಪುಟ",
        products: "ಉತ್ಪನ್ನಗಳು",
        contact: "ಸಂಪರ್ಕ",

        brand1: "ಬ್ರುಂದಾವನ",
        brand2: "ಫಾರ್ಮ್ ಹೌಸ್",

        viewProducts: "_________  _____________",
        call: "ಕರೆ ಮಾಡಿ",

        freshTitle: "ತಾಜಾ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು",
        freshDesc: "ಆರೋಗ್ಯಕರ ನಾಯಿಮರಿಗಳು, ನಾಟಿ ಕೋಳಿ, ತಾಜಾ ಮೊಟ್ಟೆ, ಶುದ್ಧ ಬೆಣ್ಣೆ ಮತ್ತು ಇನ್ನಷ್ಟು..",

        visitTitle: "ನಮ್ಮ ಫಾರ್ಮ್, ಭೇಟಿ ನೀಡಿ",
        visitDesc: "ದೇವಪುರ ಗ್ರಾಮ, ಹೊಸದುರ್ಗ ತಾಲ್ಲೂಕು, ಚಿತ್ರದುರ್ಗ ಜಿಲ್ಲೆಯಲ್ಲಿ ಇದೆ.",

        directTitle: "ನೇರವಾಗಿ ರೈತನಿಂದ",
        directDesc: "ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ. ಉತ್ತಮ ಗುಣಮಟ್ಟ ಮತ್ತು ಬೆಲೆಗೆ ನೇರವಾಗಿ ಖರೀದಿ ಮಾಡಿ.",

        readyTitle: "ಖರೀದಿಗೆ ಸಿದ್ಧವೇ?",
        contactDesc: "ಫೋನ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ. ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲು ನಾವು ಸದಾ ಸಿದ್ಧ.",
        whatsapp: "ವಾಟ್ಸಾಪ್ ಮಾಡಿ",

        ourProducts: "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು",
        productTagline: "ಬೃಂದಾವನ ಫಾರ್ಮ್ ಹೌಸ್‌ನಿಂದ ತಾಜಾ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು",

        puppies: "ನಾಯಿಮರಿಗಳು",
        sheep: "ಮೇಕೆ ಮತ್ತು ಕುರಿ",
        butter: "ಬೆಣ್ಣೆ ಮತ್ತು ತುಪ್ಪ",
        natikoli: "ನಾಟಿ ಕೋಳಿ",
        eggs: "ನಾಟಿ ಮೊಟ್ಟೆ",

        footerBrand: "ಬೃಂದಾವನ ಫಾರ್ಮ್ ಹೌಸ್",
        footerLine1: "ತಾಜಾ ಆಹಾರ ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ.",
        footerLine2: "ಗುಣಮಟ್ಟದ ಕೃಷಿ ಉತ್ಪನ್ನಗಳಿಗೆ ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ.",

        footerContact: "ಸಂಪರ್ಕಿಸಿ",
        footerLocation1: "ಬೃಂದನ್: 📞8971662643",
        footerLocation2: "ಸ್ಪಂದನ್: 📞8151993144",
        footerLocation3: "ಕಿಶೋರ್: 📞7795368831",

        footerOffline: "⚠️ ಆನ್‌ಲೈನ್ ಖರೀದಿ ಇಲ್ಲ",
        footerNoOnline: "ಆನ್‌ಲೈನ್ ಡೆಲಿವರಿ ಅಥವಾ ಪಾವತಿ ಲಭ್ಯವಿಲ್ಲ.",
        footerVisitCall: "ನಮ್ಮ ಫಾರ್ಮ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಕರೆ ಮಾಡಿ.",
        footerKannadaLine: "ಕನ್ನಡವೇ ಸತ್ಯ ಕನ್ನಡವೇ ನಿತ್ಯ",

        contactTitle: "ಸಂಪರ್ಕಿಸಿ & ಭೇಟಿ ನೀಡಿ",
        contactSubtitle: "ನಮ್ಮ ಫಾರ್ಮ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಸಂಪರ್ಕಿಸಿ",

        farmLocation: "ಫಾರ್ಮ್ ಸ್ಥಳ",
        farmAddress: "ಬೃಂದಾವನ ಫಾರ್ಮ್ ಹೌಸ್\nದೇವಾಪುರ ಗ್ರಾಮ\nಹೊಸದುರ್ಗ 577-527",

        visitingHours: "ಭೇಟಿ ಸಮಯ",
        weekdays: "ಸೋಮವಾರ - ಶನಿವಾರ: ಬೆಳಗ್ಗೆ 8:00 - ಸಂಜೆ 6:00",
        sunday: "ಭಾನುವಾರ: ಬೆಳಗ್ಗೆ 9:00 - ಮಧ್ಯಾಹ್ನ 1:00",
        visitNote: "*ಭೇಟಿ ನೀಡುವ ಮೊದಲು ಕರೆ ಮಾಡಿ ಲಭ್ಯತೆ ಪರಿಶೀಲಿಸಿ",

        whatsappTitle: "ವಾಟ್ಸಾಪ್",
        whatsappDesc: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
        callTitle: "ಕರೆ ಮಾಡಿ",

        ourProducts: "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು",
        productTagline: "ಬೃಂದಾವನ ಫಾರ್ಮ್ ಹೌಸ್‌ನಿಂದ ತಾಜಾ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು",

        puppiesTitle: "ನಾಯಿಮರಿಗಳು",
        puppiesDesc: "ಆರೋಗ್ಯಕರ, ಫಾರ್ಮ್‌ನಲ್ಲಿ ಬೆಳೆಸಿದ ನಾಯಿಮರಿಗಳು. ಪ್ರೀತಿಯ ಮನೆಗಳಿಗೆ ಸಿದ್ಧವಾಗಿದೆ. ವಿವಿಧ ಜಾತಿಗಳು ಲಭ್ಯ.",

        sheepTitle: "ಮೇಕೆ ಮತ್ತು ಕುರಿ",
        sheepDesc: "ಮುಕ್ತ ಮೇಯ್ದಾಣದಲ್ಲಿ ಬೆಳೆಸಿದ ಆರೋಗ್ಯಕರ ಮೇಕೆ ಮತ್ತು ಕುರಿಗಳು. ಖರೀದಿಗೆ ಲಭ್ಯ. ಸಂಪರ್ಕಿಸಿ.",

        butterTitle: "ಬೆಣ್ಣೆ",
        butterDesc: "ಫಾರ್ಮ್‌ನ ತಾಜಾ ಹಾಲಿನಿಂದ ತಯಾರಿಸಿದ ಶುದ್ಧ ಮನೆಯ ಬೆಣ್ಣೆ. ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನದಲ್ಲಿ ತಯಾರಿಸಲಾಗುತ್ತದೆ..",

        natiKoliTitle: "ನಾಟಿ ಕೋಳಿ",
        natiKoliDesc: "ಸ್ವಾಭಾವಿಕವಾಗಿ ಬೆಳೆದ ದೇಶೀ ಕೋಳಿ. ತಾಜಾ ಮತ್ತು ಆರೋಗ್ಯಕರ. ಲೈವ್ ರೂಪದಲ್ಲಿ ಲಭ್ಯ.",

        eggsTitle: "ನಾಟಿ ಮೊಟ್ಟೆ",
        eggsDesc: "ಮುಕ್ತ ಸಂಚಾರ ಕೋಳಿಗಳಿಂದ ತಾಜಾ ದೇಶೀ ಮೊಟ್ಟೆಗಳು. ಪೌಷ್ಟಿಕ ಮತ್ತು ರುಚಿಕರ.",

        bananaTitle: "ಬಾಳೆಹಣ್ಣು ಮತ್ತು ಬಾಳೆ ಗಿಡ",
        bananaDesc: "ನಮ್ಮ ಫಾರ್ಮ್‌ನಲ್ಲಿ ಬೆಳೆಯುವ ತಾಜಾ ಬಾಳೆಹಣ್ಣು ಮತ್ತು ಆರೋಗ್ಯಕರ ಬಾಳೆ ಗಿಡಗಳು ಲಭ್ಯ.",
    }
};


// ✅ APPLY LANGUAGE
function applyLanguage() {

    document.querySelectorAll("[data-translate]").forEach(function (element) {

        const key = element.getAttribute("data-translate");

        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }

    });

    const btn = document.getElementById("langBtn");

    if (btn) {
        btn.innerText = currentLang === "kn" ? "English" : "ಕನ್ನಡ";
    }

    updateImage();
}


// ✅ FIXED TOGGLE
let isSwitching = false;

function toggleLanguage() {

    if (isSwitching) return;

    isSwitching = true;

    if (currentLang === "kn") {
        currentLang = "en";
    } else {
        currentLang = "kn";
    }

    localStorage.setItem("lang", currentLang);

    applyLanguage();

    setTimeout(() => {
        isSwitching = false;
    }, 300);
}


// ✅ PROPER LOAD
document.addEventListener("DOMContentLoaded", function () {
    applyLanguage();
});


// ✅ IMAGE SWITCH
function updateImage() {

    const hero = document.querySelector(".firstblock");

    if (!hero) return;

    const isMobile = window.innerWidth <= 768;

    if (currentLang === "kn") {

        if (isMobile) {
            hero.style.backgroundImage = "url('/public/images/kanmobile.png')";
        } else {
            hero.style.backgroundImage = "url('/public/images/kan.jpg')";
        }

    } else {

        if (isMobile) {
            hero.style.backgroundImage = "url('/public/images/engmobile.jpeg')";
        } else {
            hero.style.backgroundImage = "url('/public/images/eng.jpg')";
        }

    }
}

window.addEventListener("resize", updateImage);