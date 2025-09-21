// Translation data
const translations = {
    en: {
        "from-lover": "To my dearest love, on our special day",
        "hero-title": "Happy Anniversary, my forever Valentine",
        "tap-to-continue": "Tap to continue"
    },
    tr: {
        "from-lover": "En sevgili aşkıma, özel günümüzde",
        "hero-title": "Mutlu Yıldönümü, sonsuz sevgilim",
        "tap-to-continue": "Devam etmek için dokun"
    }
};

// Current language
let currentLanguage = 'en';

// Story data for hero section
let storyData = {
    hero: {
        title: "Happy Anniversary, my forever Valentine",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop&crop=face"
    }
};

// Language switching
function setupLanguageSwitching() {
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            languageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update language
            currentLanguage = this.dataset.lang;
            updateLanguage();
        });
    });
}

function updateLanguage() {
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update hero title
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        if (translations[currentLanguage] && translations[currentLanguage]['hero-title']) {
            heroTitle.textContent = translations[currentLanguage]['hero-title'];
        } else if (storyData.hero.title) {
            heroTitle.textContent = storyData.hero.title;
        }
    }
}

// Load story data
function loadStoryData() {
    const savedStory = localStorage.getItem('storyData');
    if (savedStory) {
        const savedData = JSON.parse(savedStory);
        if (savedData.hero) {
            storyData.hero = savedData.hero;
        }
    }
    
    // Check for personal message from main page
    const personalMessage = localStorage.getItem('personalMessage');
    if (personalMessage && personalMessage.trim()) {
        // Update hero title with personal message
        storyData.hero.title = personalMessage;
        // Clear the message from localStorage after using it
        localStorage.removeItem('personalMessage');
    }
}

// Render hero section
function renderHero() {
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        // Use translation if available, otherwise use story data
        if (translations[currentLanguage] && translations[currentLanguage]['hero-title']) {
            heroTitle.textContent = translations[currentLanguage]['hero-title'];
        } else if (storyData.hero.title) {
            heroTitle.textContent = storyData.hero.title;
        }
    }
    
    const heroImage = document.getElementById('heroImage');
    if (heroImage && storyData.hero.image) {
        heroImage.src = storyData.hero.image;
    }
}

// Tap to continue detection
let tapDetected = false;

function initializeTapDetection() {
    const heroSection = document.getElementById('hero');
    const swipeUpIndicator = document.getElementById('swipeUpIndicator');
    
    if (!heroSection || !swipeUpIndicator) {
        console.log('Missing elements for tap detection');
        return;
    }
    
    // Simple tap/click detection
    heroSection.addEventListener('click', handleHeroClick, { passive: true });
    swipeUpIndicator.addEventListener('click', handleIndicatorClick, { passive: true });
    
    console.log('Tap detection initialized');
}

function handleHeroClick(e) {
    if (tapDetected) return;
    
    // If user clicks/taps on hero section, proceed to Valentine page
    console.log('Hero click detected! Proceeding to Valentine page...');
    proceedToValentinePage();
}

function handleIndicatorClick(e) {
    if (tapDetected) return;
    
    // If user clicks/taps on the indicator, proceed to Valentine page
    console.log('Indicator click detected! Proceeding to Valentine page...');
    proceedToValentinePage();
}

function proceedToValentinePage() {
    if (tapDetected) return;
    
    tapDetected = true;
    
    // Add fade out animation
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    
    // After fade out, navigate to Valentine page
    setTimeout(() => {
        // Save current story data to localStorage
        localStorage.setItem('storyData', JSON.stringify(storyData));
        
        // Navigate to Valentine page
        window.location.href = 'valentine.html';
    }, 500);
    
    console.log('Proceeding to Valentine page...');
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cover page loaded');
    
    // Load saved data or use default
    loadStoryData();
    
    // Render the hero section
    renderHero();
    
    // Setup language switching
    setupLanguageSwitching();
    
    // Initialize tap detection
    initializeTapDetection();
    
    console.log('Cover page initialized');
});
