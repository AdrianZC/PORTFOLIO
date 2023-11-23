document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Get all sections with class 'page'
    const sections = document.querySelectorAll('.page');

    // Add a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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
        });
    });

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
});