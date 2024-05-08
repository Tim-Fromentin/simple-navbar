// select element
const menuHamb = document.querySelector(".menu-hamb");
const boxNavLink = document.querySelector(".nav-box-link");
// launch the function by clicking on the hamburger menu 
menuHamb.addEventListener("click", menuHambFunction);

function menuHambFunction(){
    boxNavLink.classList.toggle("box-nav-link-responsive");
    menuHamb.classList.toggle("line-open-mode")

}