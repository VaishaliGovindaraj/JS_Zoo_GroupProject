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


const activePage = window.location.pathname;
const navItems = document.querySelectorAll('.nav-link').    
    forEach(item => {
        if(item.href.includes (`${activePage}`)){
            item.classList.add(`active`);
            console.log(`${activePage}`);
        }          
});


