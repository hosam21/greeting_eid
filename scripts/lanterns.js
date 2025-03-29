// Initialize lantern sparkles
function initializeLanternSparkles() {
    const lanterns = [
        document.getElementById('lantern-1'),
        document.getElementById('lantern-2'),
        document.getElementById('lantern-3')
    ];
    
    lanterns.forEach((lantern, lanternIndex) => {
        const sparklesContainer = lantern.querySelector('.lantern-sparkles');
        
        // Create sparkles for each lantern
        for (let i = 0; i < 5; i++) {
            createSparkle(sparklesContainer, i, lanternIndex);
        }
    });
}

// Create a single sparkle
function createSparkle(container, index, lanternIndex) {
    const sparkle = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 3 + 1; // 1-4px
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const delay = Math.random() * 2;
    
    // Set styles
    sparkle.className = 'absolute rounded-full';
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.backgroundColor = 'var(--amber-100)';
    sparkle.style.top = top;
    sparkle.style.left = left;
    
    // Add animation
    sparkle.style.animation = `sparkle${lanternIndex}_${index} 1.5s infinite`;
    sparkle.style.animationDelay = `${delay}s`;
    
    // Create keyframe animation
    const xOffset = Math.random() > 0.5 ? 5 : -5;
    const keyframes = `
        @keyframes sparkle${lanternIndex}_${index} {
            0% {
                opacity: 0;
                transform: translate(0, 0);
            }
            50% {
                opacity: 1;
                transform: translate(${xOffset}px, -10px);
            }
            100% {
                opacity: 0;
                transform: translate(${xOffset}px, -15px);
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);
    
    container.appendChild(sparkle);
}