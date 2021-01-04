// Adapted from w3schools.com

const modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const images = document.getElementsByClassName("slide-img");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");

for (let i=0; i<images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => { 
    modal.style.display = "none";
}

modal.onclick = () => {
    modal.style.display = "none";
}