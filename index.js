// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.profile-img, .profile-img1').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Scroll Animation
    window.addEventListener('scroll', () => {
        const positions = document.querySelectorAll('.position');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        positions.forEach(position => {
            const positionTop = position.getBoundingClientRect().top;
            if (positionTop < windowHeight - revealPoint) {
                position.classList.add('active');
            } else {
                position.classList.remove('active');
            }
        });
    });
});
