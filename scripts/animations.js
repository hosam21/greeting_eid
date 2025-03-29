
function initializeAnimations() {
    createFallingPetals();
    createFloatingCandies();
    createPrayerSilhouettes();
    createEidMubarakText();
    createGiftBoxes();
}

// Create falling flower petals animation
function createFallingPetals() {
    const container = document.createElement('div');
    container.className = 'petals-container';
    document.querySelector('.main-container').appendChild(container);
    
    const petalColors = [
        'var(--amber-200)',
        'var(--amber-300)',
        'var(--emerald-200)',
        'var(--teal-200)'
    ];
    
    // Create 30 petals
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        
        // Random properties
        const size = Math.random() * 15 + 10; // 10-25px
        const color = petalColors[Math.floor(Math.random() * petalColors.length)];
        const left = `${Math.random() * 100}%`;
        const delay = Math.random() * 20; // 0-20s delay for continuous effect
        const duration = Math.random() * 10 + 10; // 10-20s
        
        // Set styles
        petal.className = 'petal';
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 0.8}px`;
        petal.style.backgroundColor = color;
        petal.style.left = left;
        petal.style.top = '-50px';
        
        // Add animation
        petal.style.animation = `fallingPetal ${duration}s linear infinite`;
        petal.style.animationDelay = `${delay}s`;
        
        container.appendChild(petal);
    }
    
    // Add keyframe animation to document
    const keyframes = `
        @keyframes fallingPetal {
            0% {
                top: -50px;
                transform: rotate(0deg) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            100% {
                top: 100vh;
                transform: rotate(360deg) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);
    
    // Add petal styles
    const petalStyles = `
        .petals-container {
            position: fixed;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        }
        
        .petal {
            position: absolute;
            border-radius: 50% 50% 0 50%;
            transform-origin: center;
            opacity: 0.7;
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
        }
    `;
    
    const petalStyleElement = document.createElement('style');
    petalStyleElement.textContent = petalStyles;
    document.head.appendChild(petalStyleElement);
}

// Create floating candies animation
function createFloatingCandies() {
    const container = document.createElement('div');
    container.className = 'candies-container';
    document.querySelector('.main-container').appendChild(container);
    
    const candyColors = [
        'var(--amber-400)',
        'var(--emerald-400)',
        'var(--teal-400)',
        'var(--amber-300)'
    ];
    
    // Create 15 candies
    for (let i = 0; i < 15; i++) {
        const candy = document.createElement('div');
        
        // Random properties
        const size = Math.random() * 10 + 8; // 8-18px
        const color = candyColors[Math.floor(Math.random() * candyColors.length)];
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5; // 5-10s
        
        // Set styles
        candy.className = 'candy';
        candy.style.width = `${size}px`;
        candy.style.height = `${size}px`;
        candy.style.backgroundColor = color;
        candy.style.left = left;
        candy.style.top = top;
        
        // Add animation
        candy.style.animation = `floatingCandy ${duration}s ease-in-out infinite alternate`;
        candy.style.animationDelay = `${delay}s`;
        
        container.appendChild(candy);
    }
    
    // Add keyframe animation to document
    const keyframes = `
        @keyframes floatingCandy {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            50% {
                transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(180deg);
            }
            100% {
                transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(360deg);
            }
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);
    
    // Add candy styles
    const candyStyles = `
        .candies-container {
            position: fixed;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        }
        
        .candy {
            position: absolute;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            opacity: 0.6;
        }
    `;
    
    const candyStyleElement = document.createElement('style');
    candyStyleElement.textContent = candyStyles;
    document.head.appendChild(candyStyleElement);
}

// Create prayer silhouettes animation
function createPrayerSilhouettes() {
    const container = document.createElement('div');
    container.className = 'prayer-container';
    document.querySelector('.main-container').appendChild(container);
    
    // Create prayer group
    const prayerGroup = document.createElement('div');
    prayerGroup.className = 'prayer-group';
    
    // Create 5 praying figures
    for (let i = 0; i < 5; i++) {
        const figure = document.createElement('div');
        figure.className = 'prayer-figure';
        
        // Adjust position based on index
        figure.style.left = `${10 + i * 20}%`;
        
        // Create head and body
        const head = document.createElement('div');
        head.className = 'prayer-head';
        
        const body = document.createElement('div');
        body.className = 'prayer-body';
        
        figure.appendChild(head);
        figure.appendChild(body);
        prayerGroup.appendChild(figure);
    }
    
    container.appendChild(prayerGroup);
    
    // Add prayer styles
    const prayerStyles = `
        .prayer-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
            opacity: 0.15;
        }
        
        .prayer-group {
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            height: 60px;
            animation: prayerMovement 10s infinite alternate;
        }
        
        .prayer-figure {
            position: absolute;
            bottom: 0;
            width: 20px;
            height: 40px;
        }
        
        .prayer-head {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 10px;
            height: 10px;
            background-color: var(--gray-900);
            border-radius: 50%;
        }
        
        .prayer-body {
            position: absolute;
            top: 10px;
            left: 0;
            width: 20px;
            height: 30px;
            background-color: var(--gray-900);
            border-radius: 5px 5px 0 0;
            animation: prayingMotion 5s infinite alternate;
            transform-origin: bottom center;
        }
        
        @keyframes prayingMotion {
            0% {
                transform: scaleY(1);
            }
            50% {
                transform: scaleY(0.6);
            }
            100% {
                transform: scaleY(1);
            }
        }
        
        @keyframes prayerMovement {
            0% {
                transform: translateX(-10%);
            }
            100% {
                transform: translateX(10%);
            }
        }
    `;
    
    const prayerStyleElement = document.createElement('style');
    prayerStyleElement.textContent = prayerStyles;
    document.head.appendChild(prayerStyleElement);
}

// Create animated Eid Mubarak text
function createEidMubarakText() {
    const container = document.createElement('div');
    container.className = 'eid-text-container';
    document.querySelector('.main-container').appendChild(container);
    
    const text = "عيد مبارك";
    const letters = text.split('');
    
    letters.forEach((letter, index) => {
        const letterElement = document.createElement('span');
        letterElement.className = 'eid-letter';
        letterElement.textContent = letter;
        letterElement.style.animationDelay = `${index * 0.2}s`;
        container.appendChild(letterElement);
    });
    
    // Add text styles
    const textStyles = `
        .eid-text-container {
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            pointer-events: none;
            z-index: 1;
            opacity: 0.1;
            font-size: 8rem;
            font-weight: bold;
            color: var(--amber-400);
            text-shadow: 0 0 20px var(--amber-300);
        }
        
        .eid-letter {
            display: inline-block;
            animation: letterFloat 3s infinite alternate;
        }
        
        @keyframes letterFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.1;
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
                opacity: 0.2;
            }
            100% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.1;
            }
        }
    `;
    
    const textStyleElement = document.createElement('style');
    textStyleElement.textContent = textStyles;
    document.head.appendChild(textStyleElement);
}

// Create gift boxes animation
function createGiftBoxes() {
    const container = document.createElement('div');
    container.className = 'gifts-container';
    document.querySelector('.main-container').appendChild(container);
    
    const giftColors = [
        'var(--amber-400)',
        'var(--emerald-500)',
        'var(--teal-500)'
    ];
    
    const ribbonColors = [
        'var(--amber-600)',
        'var(--emerald-700)',
        'var(--teal-700)'
    ];
    
    // Create 6 gift boxes
    for (let i = 0; i < 6; i++) {
        const gift = document.createElement('div');
        gift.className = 'gift-box';
        
        // Random properties
        const size = Math.random() * 20 + 20; // 20-40px
        const boxColor = giftColors[Math.floor(Math.random() * giftColors.length)];
        const ribbonColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)];
        const left = `${Math.random() * 80 + 10}%`;
        const bottom = `${Math.random() * 20}%`;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 4; // 4-7s
        
        // Set styles
        gift.style.width = `${size}px`;
        gift.style.height = `${size}px`;
        gift.style.backgroundColor = boxColor;
        gift.style.left = left;
        gift.style.bottom = bottom;
        
        // Create ribbon
        const ribbonH = document.createElement('div');
        ribbonH.className = 'gift-ribbon-h';
        ribbonH.style.backgroundColor = ribbonColor;
        
        const ribbonV = document.createElement('div');
        ribbonV.className = 'gift-ribbon-v';
        ribbonV.style.backgroundColor = ribbonColor;
        
        gift.appendChild(ribbonH);
        gift.appendChild(ribbonV);
        
        // Add animation
        gift.style.animation = `giftBounce ${duration}s ease-in-out infinite`;
        gift.style.animationDelay = `${delay}s`;
        
        container.appendChild(gift);
    }
    
    // Add gift styles
    const giftStyles = `
        .gifts-container {
            position: fixed;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        }
        
        .gift-box {
            position: absolute;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .gift-ribbon-h {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 20%;
            transform: translateY(-50%);
        }
        
        .gift-ribbon-v {
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 20%;
            transform: translateX(-50%);
        }
        
        @keyframes giftBounce {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
        }
    `;
    
    const giftStyleElement = document.createElement('style');
    giftStyleElement.textContent = giftStyles;
    document.head.appendChild(giftStyleElement);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});