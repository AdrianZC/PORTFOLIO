document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation links
    const navLinks = document.querySelectorAll('nav a, header h1 a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');

    // Get all sections with class 'page'
    const sections = document.querySelectorAll('.page');

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'polygon' },
            opacity: { value: 0.7, anim: { enable: true, speed: 1, opacity_min: 0 } },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' },
            line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } },
        },
    });

    // Add a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Check if the link is an internal link (starts with #)
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault(); // Prevent the default behavior of link clicks
                // Get the target section ID from the link's 'href' attribute
                const targetId = link.getAttribute('href').substring(1);
                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                // Show the target section
                const targetSection = document.getElementById(targetId);
                targetSection.classList.add('active');
            }
            // For external links, allow the default behavior
        });
    });

    // Add a click event listener to each mobile navigation link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                const targetSection = document.getElementById(targetId);
                targetSection.classList.add('active');
                mobileNav.classList.remove('show'); // Hide mobile nav after selection
            }
        });
    });

    // Add a click event listener to the mobile menu icon
    mobileMenuIcon.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });

    // Add a click event listener to the close button
    closeBtn.addEventListener('click', function () {
        mobileNav.classList.remove('show');
    });

    // Close mobile nav if click happens outside of it
    document.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
            mobileNav.classList.remove('show');
        }
    });

    // Dynamically change the name to "AZC" on mobile screens
    function updateName() {
        const nameElement = document.querySelector('header h1 a');
        if (window.innerWidth <= 768) {
            nameElement.textContent = "AZC";
        } else {
            nameElement.textContent = "Adrian Zhu Chou";
        }
    }

    // Initial call to update the name based on screen width
    updateName();

    // Listen for window resize events to update the name dynamically
    window.addEventListener('resize', updateName);
});
