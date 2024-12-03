const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


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

facebookLink.addEventListener("click", () => openLink("facebook"));
instagramLink.addEventListener("click", () => openLink("instagram"));
twitterLink.addEventListener("click", () => openLink("twitter"));

document.querySelector(".footer-copyright p").textContent = "Copyright © 2024 SafariPark. All rights reserved.";
