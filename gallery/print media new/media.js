let currentImageIndex = 0;
const images = document.querySelectorAll(".image-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Function to open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    updateLightbox();
    lightbox.style.display = "flex";
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Function to navigate images with transition effect
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Wrap to last image
    }
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Wrap to first image
    }

    // Apply transition effect
    lightboxImg.style.opacity = "0"; // Fade out
    setTimeout(() => {
        updateLightbox();
        lightboxImg.style.opacity = "1"; // Fade in

    }, 300); // 300ms delay for smooth effect
}

// Function to update lightbox image
function updateLightbox() {
    lightboxImg.src = images[currentImageIndex].src;
    lightbox.style.zIndex ="2000";
}

// Add event listeners for button clicks
prevButton.addEventListener("click", function() {
    changeImage(-1);
});

nextButton.addEventListener("click", function() {
    changeImage(1);
});

// Enable keyboard navigation (Left & Right Arrow Keys)
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        changeImage(-1);
    } else if (event.key === "ArrowRight") {
        changeImage(1);
    } else if (event.key === "Escape") {
        closeLightbox();
    }
});