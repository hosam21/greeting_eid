// Create confetti animation
function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = ''; // Clear any existing confetti
    
    // Confetti colors - more Eid-themed
    const colors = [
        'var(--amber-300)',
        'var(--emerald-400)',
        'var(--teal-500)',
        'var(--green-400)',
        'var(--amber-400)',
        'var(--amber-500)',
        'var(--emerald-300)',
        'var(--teal-400)'
    ];
    
    // Shapes - including crescent moon and star shapes
    const shapes = ['rounded-full', 'rounded', '', 'crescent', 'star'];
    
    // Create 150 confetti pieces (increased from 100)
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const isSpecialShape = shape === 'crescent' || shape === 'star';
        const isSquare = shape === '';
        const width = Math.random() * 10 + 5;
        const height = isSquare ? width : Math.random() * 10 + 5;
        const left = `${Math.random() * 100}%`;
        const delay = Math.random() * 3;
        const duration = Math.random() * 4 + 3;
        const rotation = Math.random() * 360;
        const xOffset = Math.random() * 150 - 75;
        
        // Set styles
        if (isSpecialShape) {
            confetti.className = `absolute confetti-${shape}`;
            confetti.style.width = `${width * 1.5}px`; // Slightly larger for special shapes
            confetti.style.height = `${width * 1.5}px`;
            confetti.style.color = color; // For SVG shapes
        } else {
            confetti.className = `absolute ${color} ${shape}`;
            confetti.style.width = `${width}px`;
            confetti.style.height = `${height}px`;
        }
        
        confetti.style.left = left;
        confetti.style.top = '-10%';
        confetti.style.opacity = '0.8';
        
        // Add animation
        confetti.style.animation = `confettiDrop${i} ${duration}s linear forwards`;
        confetti.style.animationDelay = `${delay}s`;
        
        // Create keyframe animation
        const keyframes = `
            @keyframes confettiDrop${i} {
                from {
                    top: -10%;
                    transform: rotate(0deg);
                }
                to {
                    top: 100%;
                    transform: rotate(${rotation}deg) translateX(${xOffset}px);
                }
            }
        `;
        
        const styleElement = document.createElement('style');
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);
        
        container.appendChild(confetti);
    }
    
    // Add special shape styles
    const specialShapeStyles = `
        .confetti-crescent {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            box-shadow: 4px 0 0 0 currentColor;
            transform: rotate(45deg);
        }
        
        .confetti-star {
            position: absolute;
            width: 0;
            height: 0;
            border-right: 5px solid transparent;
            border-bottom: 10px solid currentColor;
            border-left: 5px solid transparent;
            transform: rotate(35deg);
        }
        
        .confetti-star:before {
            content: '';
            position: absolute;
            top: -6.5px;
            left: -3.25px;
            width: 0;
            height: 0;
            border-bottom: 10px solid currentColor;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            transform: rotate(-35deg);
        }
        
        .confetti-star:after {
            content: '';
            position: absolute;
            top: 0;
            left: -5.5px;
            width: 0;
            height: 0;
            border-right: 5px solid transparent;
            border-bottom: 10px solid currentColor;
            border-left: 5px solid transparent;
            transform: rotate(-70deg);
        }
    `;
    
    const specialShapeStyleElement = document.createElement('style');
    specialShapeStyleElement.textContent = specialShapeStyles;
    document.head.appendChild(specialShapeStyleElement);
}