document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        // Toggle class 'active' pada hamburger
        hamburger.classList.toggle('active');
        
        // Toggle class 'active' pada nav-links
        navLinks.classList.toggle('active');
    });

    // Berita grid functionality (only run on pages with berita-grid)
    const beritaGrid = document.querySelector('.berita-grid');
    if (beritaGrid) {
        // Add berita-related functionality here
        // This code will only run if berita-grid exists on the page
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
