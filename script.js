// JavaScript for interactive features
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to RR Packs!");

    // Add hover effect for product images
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("mouseover", () => {
            product.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
        });

        product.addEventListener("mouseout", () => {
            product.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // Contact Section Click Effect
    let contactInfo = document.querySelector(".contact-info");
    contactInfo.addEventListener("click", () => {
        alert("For inquiries, email us at info@rrpacks.co.in");
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
