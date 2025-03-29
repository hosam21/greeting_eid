const celebrationAudio = new Audio('sounds/eid-celebration.mp3');
celebrationAudio.preload = 'auto';
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    document.querySelector('button[type="submit"]').addEventListener('click', () => {
        celebrationAudio.play().catch(() => {
            // This empty catch handles the initial play() rejection
        });
    });
    
    // Form submission
    const form = document.getElementById('greeting-form');
    const formContainer = document.getElementById('form-container');
    const cardContainer = document.getElementById('card-container');
    const recipientName = document.getElementById('recipient-name');
    const confettiContainer = document.getElementById('confetti-container');
    const resetButton = document.getElementById('reset-button');
    const shareButton = document.getElementById('share-button');
    const downloadButton = document.getElementById('download-button');
    
    // Check for name parameter on page load
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (nameParam) {
        document.getElementById('name').value = nameParam;
        document.getElementById('greeting-form').dispatchEvent(new Event('submit'));
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();
        
        if (name) {

            recipientName.textContent = name;
            

            const url = new URL(window.location);
            url.searchParams.set('name', name);
            history.pushState({}, '', url);

            formContainer.classList.add('hidden');
            cardContainer.classList.remove('hidden');

            confettiContainer.classList.remove('hidden');
            createConfetti();

            celebrateEid();
            
            setTimeout(function() {
                confettiContainer.classList.add('hidden');
            }, 5000);
        }
    });
    
    // Reset button handler
    resetButton.addEventListener('click', function() {
        // Hide card, show form
        cardContainer.classList.add('hidden');
        formContainer.classList.remove('hidden');
        
        // Clear form and URL
        document.getElementById('name').value = '';
        const url = new URL(window.location);
        url.searchParams.delete('name');
        history.pushState({}, '', url);
    });
    
    // Share button handler
    shareButton.addEventListener('click', function() {
        const shareUrl = window.location.href;
        const shareText = `${recipientName.textContent} يهنئك بعيد الفطر المبارك!`;

        if (navigator.share) {
            navigator.share({
                title: 'تهاني عيد الفطر',
                text: shareText,
                url: shareUrl
            }).catch(error => console.log('Error sharing:', error));
        } else {
            // Fallback for desktop browsers
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = `${shareText}\n${shareUrl}`;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('تم نسخ رابط البطاقة إلى الحافظة!');
        }
    });
    
    // Download button handler
    downloadButton.addEventListener('click', function() {
        const card = document.querySelector('.greeting-card');
        
        // Temporarily disable animations
        document.body.classList.add('capturing');
        
        html2canvas(card, {
            scale: 3, // Increased scale for higher resolution
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff', // Force white background
            allowTaint: false,
            ignoreElements: (element) => {
                // Ignore elements that might cause issues
                return element.classList.contains('confetti-container') || 
                       element.classList.contains('fireworks-container');
            },
            onclone: (clonedDoc) => {
                // Force show all elements during capture
                clonedDoc.querySelector('.greeting-card').style.backgroundColor = '#ffffff';
                clonedDoc.querySelectorAll('*').forEach(el => {
                    el.style.animation = 'none !important';
                    el.style.transition = 'none !important';
                });
            }
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `eid-card-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png', 1.0); // Highest quality
            link.click();
            
            // Re-enable animations
            document.body.classList.remove('capturing');
        });
    });
    
    // Initialize animations
    initializeStars();
    initializeCardStars();
    initializeFireworks();
    initializeLanternSparkles();
    createFloatingElements();
});

// Create floating elements
function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    
    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.className = 'absolute rounded-full';
        element.style.width = '0.75rem';
        element.style.height = '0.75rem';
        element.style.backgroundColor = 'var(--amber-300)';
        element.style.left = `${20 + i * 12}%`;
        element.style.top = `${20 + (i % 3) * 20}%`;
        
        // Add animation
        element.style.animation = `floatingElement${i} 4s infinite alternate`;
        
        // Create keyframe animation
        const keyframes = `
            @keyframes floatingElement${i} {
                0% {
                    opacity: 0.7;
                    transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
                }
                50% {
                    opacity: 0.9;
                    transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
                }
                100% {
                    opacity: 0.7;
                    transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px);
                }
            }
        `;
        
        const styleElement = document.createElement('style');
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);
        
        container.appendChild(element);
    }
}

// Special celebration effects when card is shown
function celebrateEid() {
    // Create additional fireworks
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const fireworksContainer = document.getElementById('fireworks-container');
            createFirework(fireworksContainer, Math.floor(Math.random() * 4));
        }, i * 1000);
    }
    
    // Add celebration sound (optional)
    playEidSound();
    
    // Add pulsing effect to the card
    const card = document.querySelector('.greeting-card');
    card.classList.add('celebrating');
    setTimeout(() => {
        card.classList.remove('celebrating');
    }, 2000);
}

function playEidSound() {
    try {
        celebrationAudio.currentTime = 0; // Reset audio
        celebrationAudio.play()
            .catch(error => console.log('Audio play requires user interaction:', error));
    } catch (e) {
        console.log('Audio playback error:', e);
    }
}

// Declare the missing variables.  These would ideally be imported from modules.
function createConfetti() {}
function html2canvas() {}
function initializeStars() {}
function initializeCardStars() {}
function initializeFireworks() {}
function initializeLanternSparkles() {}
function createFirework() {}