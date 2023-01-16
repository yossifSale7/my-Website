var body = document.querySelector("body");

var dark = document.querySelector(".dark-mode");

var btn = document.querySelector(".ball");

var img = document.querySelector(".laptop");

var show = document.querySelector(".hide");

var slide = document.querySelector(".content");

var title = document.querySelector(".title");

var titleX = document.querySelector(".titleX");

var title1 = document.querySelector(".title1");

var title2 = document.querySelector(".title2");

var imgs = document.querySelector(".imgs");

var cards = document.querySelector(".price");

var contact = document.querySelector(".numb");

window.onload = function () {
    img.style.top = "150px";
    show.style.opacity = "1";
};

window.onscroll = function () {
    if (window.scrollY >= title.offsetTop - 600) {
        slide.style.marginLeft = "0";
        title.style.opacity = "1";
    };
    
    if (window.scrollY >= imgs.offsetTop - 700) {
        imgs.style.opacity = "1"
        titleX.style.opacity = "1";
    };

   if (window.scrollY >= title1.offsetTop - 600) {
        title1.style.opacity = "1";
        cards.style.opacity = "1";
    };

    if (window.scrollY >= title2.offsetTop - 600) {
        
        title2.style.opacity = "1";
        contact.style.marginLeft = "0";
    };
}