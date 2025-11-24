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
