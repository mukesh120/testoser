/* ================================
   SHARED JAVASCRIPT - shared.js
   Used across all pages
   ================================ */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================
    // SMOOTH SCROLLING
    // ==================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Close mobile menu after clicking
                const navLinks = document.getElementById('navLinks');
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // ==================
    // ACTIVE PAGE HIGHLIGHT
    // ==================
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Match current page
        if (linkPath === currentPath || 
            (currentPath === '/' && linkPath === '/') ||
            currentPath.includes(linkPath.replace('/', ''))) {
            link.style.color = '#667eea';
        }
    });

    // ==================
    // MOBILE MENU - CLOSE ON LINK CLICK
    // ==================
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
});

// ==================
// MOBILE MENU TOGGLE
// ==================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ==================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ==================
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');
    
    // Only close if clicking outside navbar and menu is open
    if (navLinks && !event.target.closest('.navbar') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// ==================
// NAVBAR SHADOW ON SCROLL
// ==================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
});

// ==================
// SCROLL TO TOP (Optional)
// ==================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
