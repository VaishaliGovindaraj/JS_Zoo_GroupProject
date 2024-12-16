const footerInfo = {
    title: "SafariPark",
    contact: "Get in touch",
    email: "info@safaripark.com",
    phone: "+46 723500460"
};

document.querySelector(".footer-logo h2").textContent = footerInfo.title;
document.querySelector(".footer-contact h4").textContent = footerInfo.contact;
document.querySelector(".footer-contact").innerHTML += `<p>Email: ${footerInfo.email}</p> <p>Phone: ${footerInfo.phone}</p>`;
document.querySelector(".footer_social-media h4").textContent = "Follow us"

const facebookLink = document.getElementById("facebook");
const instagramLink = document.getElementById("instagram");
const twitterLink = document.getElementById("twitter");

const socialLinks = {
    "facebook": "https://facebook.com",
    "instagram": "https://instagram.com",
    "twitter": "https://twitter.com"
}

facebookLink.addEventListener("click", () => openLink(socialLinks["facebook"]));
instagramLink.addEventListener("click", () => openLink(socialLinks["instagram"]));
twitterLink.addEventListener("click", () => openLink(socialLinks["twitter"]));

function openLink(uri) {
    window.open (uri, "_blank");
}

document.querySelector(".footer-copyright p").textContent = "Copyright © 2024 SafariPark. All rights reserved.";

const headerLogo = document.querySelector(".header img");

if (window.location.pathname.includes("/index.html")) {
    headerLogo.src = "./images/index/logo/rb_121824.png";
} else {
    headerLogo.src = "../images/index/logo/rb_121824.png";
}

headerLogo.alt = "logo image";

document.querySelector(".header h2").textContent = "SafariPark"
