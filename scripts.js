// Log a welcome message to the console
console.log("Welcome to My Learning Blog!");

// Function to display a welcome message that fades in
document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Welcome to My Learning Blog!";
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '10px';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translateX(-50%)';
    welcomeMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    welcomeMessage.style.color = '#fff';
    welcomeMessage.style.padding = '10px 20px';
    welcomeMessage.style.borderRadius = '5px';
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transition = 'opacity 1s';
    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = '1';
    }, 500);

    setTimeout(() => {
        welcomeMessage.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(welcomeMessage);
        }, 1000);
    }, 4000);

    // Highlight the "Recent Blog Posts" section
    const recentPostsSection = document.getElementById('recent-posts');
    if (recentPostsSection) {
        recentPostsSection.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
        setTimeout(() => {
            recentPostsSection.style.backgroundColor = '';
        }, 2000);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});