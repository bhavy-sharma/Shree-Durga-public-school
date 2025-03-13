let images = document.querySelectorAll(".photo-gallery img");
let lightboxImg = document.getElementById("lightbox-img");
let lightbox = document.getElementById("lightbox");
let currentIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".photo-gallery img");
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
});
function openLightbox(img) {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
    currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
    lightbox.style.display = "none";
}

document.addEventListener("keydown", function(event) {
    if (lightbox.style.display === "flex") {
        if (event.key === "ArrowRight") {
            navigate(1);
        } else if (event.key === "ArrowLeft") {
            navigate(-1);
        } else if (event.key === "Escape") {
            closeLightbox();
        }
    }
});

lightbox.addEventListener("click", function(event) {
    navigate(1);
});

function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}