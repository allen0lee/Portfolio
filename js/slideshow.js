/* Modified from w3schools.com */

const slideIndex = [1, 1];
const slideId = ["slide-pamm", "slide-pokemoveset"]

const plusSlides = (n, no) => {
    showSlides(slideIndex[no] += n, no);
}

const showSlides = (n, no) => {
    const x = document.getElementsByClassName(slideId[no]);
    
    if (n > x.length) {
        slideIndex[no] = 1;
    }    
    if (n < 1) {
        slideIndex[no] = x.length;
    }

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    x[slideIndex[no]-1].style.display = "block";
}

showSlides(1, 0);
showSlides(1, 1);