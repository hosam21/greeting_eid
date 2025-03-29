// Initialize fireworks
function initializeFireworks() {
    const container = document.getElementById('fireworks-container');
    
    // Create multiple fireworks
    for (let i = 0; i < 4; i++) {
        createFirework(container, i);
    }
    
    // Add periodic new fireworks for continuous celebration
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * 4);
        createFirework(container, randomIndex);
    }, 5000);
}

// Create a single firework with particles
function createFirework(container, fireworkIndex) {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.className = 'firework';
    fireworkContainer.style.left = `${20 + (fireworkIndex * 20)}%`;
    fireworkContainer.style.top = `${30 + (fireworkIndex % 3) * 15}%`;
    
    // Create particles for the firework
    const particleCount = 30; // Increased from 20
    
    // Create a flash effect at the center
    const flash = document.createElement('div');
    flash.className = 'firework-flash';
    flash.style.animation = `fireworkFlash 0.5s forwards`;
    fireworkContainer.appendChild(flash);
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createFireworkParticle(fireworkContainer, i, fireworkIndex);
    }
    
    container.appendChild(fireworkContainer);
    
    // Remove firework after animation completes
    setTimeout(() => {
        if (fireworkContainer.parentNode === container) {
            container.removeChild(fireworkContainer);
        }
    }, 3000);
    
    // Add flash keyframe
    const flashKeyframes = `
        @keyframes fireworkFlash {
            0% {
                transform: scale(0.1);
                opacity: 1;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = flashKeyframes;
    document.head.appendChild(styleElement);
}

// Create a single particle for a firework
function createFireworkParticle(container, particleIndex, fireworkIndex) {
    const particle = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const angle = (Math.PI * 2 / 30) * particleIndex; // Adjusted for 30 particles
    const speed = Math.random() * 40 + 30; // Increased speed
    const delay = Math.random() * 0.2;
    
    // Colors - more festive Eid colors
    const colors = [
        'var(--amber-400)', 
        'var(--emerald-400)', 
        'var(--teal-400)', 
        'var(--green-400)',
        'var(--amber-300)',
        'var(--amber-500)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Set styles
    particle.className = 'firework-particle';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
    
    // Add animation
    particle.style.animation = `fireworkParticle${fireworkIndex}_${particleIndex} 1.5s forwards`;
    particle.style.animationDelay = `${delay}s`;
    
    // Calculate end position based on angle and speed
    const endX = Math.cos(angle) * speed;
    const endY = Math.sin(angle) * speed;
    
    // Create keyframe animation
    const keyframes = `
        @keyframes fireworkParticle${fireworkIndex}_${particleIndex} {
            0% {
                opacity: 0;
                transform: translate(0, 0) scale(1);
            }
            5% {
                opacity: 1;
            }
            70% {
                opacity: 0.8;
            }
            100% {
                opacity: 0;
                transform: translate(${endX}px, ${endY}px) scale(0.1);
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);
    
    container.appendChild(particle);
}

// Add firework styles
const fireworkStyles = `
    .firework {
        position: absolute;
        z-index: 2;
    }
    
    .firework-particle {
        position: absolute;
        border-radius: 50%;
        transform-origin: center;
    }
    
    .firework-flash {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        transform-origin: center;
    }
`;

const fireworkStyleElement = document.createElement('style');
fireworkStyleElement.textContent = fireworkStyles;
document.head.appendChild(fireworkStyleElement);