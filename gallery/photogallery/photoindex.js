let images = [
    "images/annual1.jpg", "images/annual2.jpg", "images/annual3.jpg", "images/annual4.jpg",
    "images/annual5.jpg", "images/annual6.jpg", "images/annual7.jpg", "images/annual8.jpg",
    "images/annual9.jpg", "images/annual10.jpg", "images/annual11.jpg", "images/annual12.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

// Mouse Click Navigation
document.getElementById("lightbox").addEventListener("click", nextImage);