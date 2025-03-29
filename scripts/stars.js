function initializeStars() {
    const container = document.getElementById('stars-container');
    
    // Create stars
    for (let i = 0; i < 30; i++) {
        createStar(container, i);
    }
}

// Initialize stars inside the card
function initializeCardStars() {
    const container = document.getElementById('card-stars');
    
    // Create stars
    for (let i = 0; i < 20; i++) {
        createStar(container, i);
    }
}

// Create a single star
function createStar(container, index) {
    const star = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 4 + 2; // 2-6px
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const delay = Math.random() * 3;
    const duration = Math.random() * 2 + 2; // 2-4s
    
    // Set styles
    star.className = 'absolute rounded-full';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = 'var(--amber-100)';
    star.style.top = top;
    star.style.left = left;
    
    // Add animation
    star.style.animation = `starTwinkle${index} ${duration}s infinite`;
    star.style.animationDelay = `${delay}s`;
    
    // Create keyframe animation
    const keyframes = `
        @keyframes starTwinkle${index} {
            0% {
                opacity: 0.2;
                transform: scale(1);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.2);
            }
            100% {
                opacity: 0.2;
                transform: scale(1);
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);
    
    container.appendChild(star);
}