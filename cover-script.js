// Immediate scroll prevention - runs before DOM is ready
(function() {
    // Prevent scrolling immediately
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.position = 'fixed';
    document.body.style.position = 'fixed';
    
    // Prevent scroll events immediately
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    
    function preventScrollKeys(e) {
        const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        if (scrollKeys.includes(e.keyCode)) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }
    
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventScrollKeys, { passive: false });
    document.addEventListener('scroll', preventScroll, { passive: false });
    
    console.log('Immediate scroll prevention applied');
})();

// Translation data
const translations = {
    en: {
        "from-lover": "To my dearest love, on our special day",
        "hero-title": "Happy Anniversary, my forever Valentine",
        "tap-to-continue": "Tap to continue",
        "proceed-payment": "Preview & Finalize",
        "go-back-edit": "Go Back to Edit"
    },
    tr: {
        "from-lover": "Canım sevgilim, bugün bizim özel günümüz",
        "hero-title": "Yıldönümümüz kutlu olsun!",
        "tap-to-continue": "Devam etmek için dokun",
        "proceed-payment": "Önizleme & Son Hal",
        "go-back-edit": "Düzenlemeye Geri Dön"
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
    
    // Multiple event listeners to ensure tap detection always works
    heroSection.addEventListener('click', handleHeroClick, { passive: true });
    heroSection.addEventListener('touchstart', handleHeroClick, { passive: true });
    swipeUpIndicator.addEventListener('click', handleIndicatorClick, { passive: true });
    swipeUpIndicator.addEventListener('touchstart', handleIndicatorClick, { passive: true });
    
    // Also add to the entire body as fallback
    document.body.addEventListener('click', handleBodyClick, { passive: true });
    document.body.addEventListener('touchstart', handleBodyClick, { passive: true });
    
    console.log('Tap detection initialized with multiple event listeners');
}

function handleBodyClick(e) {
    // Only proceed if clicking on the main content area (not edit buttons, etc.)
    if (e.target.closest('.header-actions') || e.target.closest('.edit-story-btn') || e.target.closest('.language-selector')) {
        return;
    }
    
    // If clicking anywhere on the body, proceed to Valentine page
    console.log('Body click detected! Proceeding to Valentine page...');
    proceedToValentinePage();
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

let isPreviewMode = false;

function proceedToValentinePage() {
    if (tapDetected) return;
    
    // Check if edit mode is active
    const isEditMode = document.body.classList.contains('edit-mode');
    if (isEditMode) {
        console.log('Cannot navigate while in edit mode. Please save changes first.');
        return;
    }
    
    tapDetected = true;
    
    // Add fade out animation
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    
    // After fade out, navigate to Valentine page
    setTimeout(() => {
        // Save current story data to localStorage
        localStorage.setItem('storyData', JSON.stringify(storyData));
        
        // Navigate to Valentine page
        if (isPreviewMode) {
            window.location.href = 'valentine.html?fromPreview=1';
        } else {
            window.location.href = 'valentine.html';
        }
    }, 500);
    
    console.log('Proceeding to Valentine page...');
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cover page loaded');
    
    // Ensure scrolling is always blocked on cover page
    preventScrolling();
    
    // Load saved data or use default
    loadStoryData();
    
    // Render the hero section
    renderHero();
    
    // Setup language switching
    setupLanguageSwitching();
    
    // Initialize tap detection
    initializeTapDetection();
    
    // Initialize edit functionality
    initializeEditFunctionality();

    // Initialize quit/back button
    const quitBtn = document.getElementById('quitBtn');
    if (quitBtn) {
        quitBtn.addEventListener('click', () => {
            // Check if we're in preview mode
            const params = new URLSearchParams(window.location.search);
            if (params.get('preview') === '1') {
                console.log('Back button clicked in preview mode - returning to Valentine page');
                window.location.href = 'valentine.html';
            } else {
                console.log('Quit button clicked - returning to how it works page');
                window.location.href = 'how-it-works.html';
            }
        });
    }

    // Handle URL parameters
    try {
        const params = new URLSearchParams(window.location.search);
        
        // If opened in preview mode, disable editing
        if (params.get('preview') === '1') {
            isPreviewMode = true;

            // Hide edit button
            const editStoryBtn = document.getElementById('editStoryBtn');
            if (editStoryBtn) {
                editStoryBtn.style.display = 'none';
            }

            // Hide language selector
            const languageSelector = document.querySelector('.language-selector');
            if (languageSelector) {
                languageSelector.style.display = 'none';
            }

            // Change quit button to back button in preview mode
            const quitBtn = document.getElementById('quitBtn');
            if (quitBtn) {
                quitBtn.title = 'Go Back to Valentine Page';
                // Swap icon to a back arrow in preview mode
                quitBtn.innerHTML = '<svg class="quit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/></svg>';
                quitBtn.setAttribute('aria-label', 'Back');
            }

            // Ensure body is not in edit mode
            document.body.classList.remove('edit-mode');
            const editModeNotification = document.getElementById('editModeNotification');
            if (editModeNotification) editModeNotification.classList.remove('show');
        }
        
        // If opened with edit=1, auto-enable edit mode
        if (params.get('edit') === '1') {
            const editStoryBtn = document.getElementById('editStoryBtn');
            if (editStoryBtn) {
                editStoryBtn.click();
            }
        }
    } catch (e) {
        console.warn('URL parameter handling failed:', e);
    }
    
    console.log('Cover page initialized');
});

// Prevent scrolling on cover page
function preventScrolling() {
    // Block all scrolling methods with !important
    document.body.style.setProperty('overflow', 'hidden', 'important');
    document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    document.body.style.setProperty('position', 'fixed', 'important');
    document.documentElement.style.setProperty('position', 'fixed', 'important');
    
    // Prevent scroll events
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('keydown', preventScrollKeys, { passive: false });
    document.addEventListener('scroll', preventScroll, { passive: false });
    
    console.log('Scrolling prevented on cover page');
}

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function preventScrollKeys(e) {
    // Prevent arrow keys, page up/down, home, end from scrolling
    const scrollKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
    if (scrollKeys.includes(e.keyCode)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
}

// Edit functionality
function initializeEditFunctionality() {
    const editStoryBtn = document.getElementById('editStoryBtn');
    const editModeNotification = document.getElementById('editModeNotification');
    
    if (editStoryBtn) {
        editStoryBtn.addEventListener('click', toggleEditMode);
        console.log('Edit story button listener added to cover page');
    } else {
        console.error('Edit story button not found on cover page!');
    }
    
    if (editModeNotification) {
        console.log('Edit mode notification element found on cover page');
    } else {
        console.error('Edit mode notification element not found on cover page!');
    }
}

function toggleEditMode() {
    const body = document.body;
    const editStoryBtn = document.getElementById('editStoryBtn');
    const editModeNotification = document.getElementById('editModeNotification');
    
    // Check if we're currently in edit mode by looking for edit-mode class
    const isEditMode = body.classList.contains('edit-mode');
    
    console.log('Toggle edit mode on cover page - isEditMode:', isEditMode);
    console.log('Edit mode notification element:', editModeNotification);
    
    if (!isEditMode) {
        // Enable edit mode
        body.classList.add('edit-mode');
        
        // Show edit mode notification
        if (editModeNotification) {
            editModeNotification.classList.add('show');
            console.log('Edit mode notification shown on cover page');
        } else {
            console.error('Edit mode notification element not found when trying to show on cover page');
        }
        
        // Make hero elements editable
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroImage = document.getElementById('heroImage');
        const removeSubtitleBtn = document.getElementById('removeSubtitleBtn');
        
        if (heroTitle) {
            heroTitle.setAttribute('contenteditable', 'true');
        }
        if (heroSubtitle) {
            heroSubtitle.setAttribute('contenteditable', 'true');
        }
        if (removeSubtitleBtn) {
            removeSubtitleBtn.style.display = 'flex';
            removeSubtitleBtn.addEventListener('click', removeSubtitle);
        }
        if (heroImage) {
            heroImage.style.cursor = 'pointer';
            heroImage.addEventListener('click', handleImageClick);
        }
        
        // Change button to save mode (checkmark icon)
        editStoryBtn.innerHTML = `
            <svg class="edit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="white"/>
            </svg>
        `;
        editStoryBtn.title = 'Save Story';
        
    } else {
        // Save and disable edit mode
        saveCoverStoryData();
        body.classList.remove('edit-mode');
        
        // Hide edit mode notification
        if (editModeNotification) {
            editModeNotification.classList.remove('show');
            console.log('Edit mode notification hidden on cover page');
        } else {
            console.error('Edit mode notification element not found when trying to hide on cover page');
        }
        
        // Make hero elements non-editable
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroImage = document.getElementById('heroImage');
        const removeSubtitleBtn = document.getElementById('removeSubtitleBtn');
        
        if (heroTitle) {
            heroTitle.setAttribute('contenteditable', 'false');
        }
        if (heroSubtitle) {
            heroSubtitle.setAttribute('contenteditable', 'false');
        }
        if (removeSubtitleBtn) {
            removeSubtitleBtn.style.display = 'none';
            removeSubtitleBtn.removeEventListener('click', removeSubtitle);
        }
        if (heroImage) {
            heroImage.style.cursor = 'default';
            heroImage.removeEventListener('click', handleImageClick);
        }
        
        // Change button back to edit mode (pen icon)
        editStoryBtn.innerHTML = `
            <svg class="edit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
            </svg>
        `;
        editStoryBtn.title = 'Edit Story';
        
        // Show success notification
        showCoverNotification();
    }
}

function saveCoverStoryData() {
    // Save hero title
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        storyData.hero.title = heroTitle.textContent;
    }
    
    // Save hero subtitle (check if it still exists)
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        storyData.hero.subtitle = heroSubtitle.textContent;
    } else {
        // Subtitle was removed
        storyData.hero.subtitle = '';
    }
    
    // Save to localStorage
    localStorage.setItem('coverStoryData', JSON.stringify(storyData));
    console.log('Cover story data saved:', storyData);
}

function handleImageClick() {
    showImageOptions();
}

function removeSubtitle() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const subtitleContainer = document.querySelector('.subtitle-container');
    
    if (heroSubtitle && subtitleContainer) {
        // Remove the subtitle element
        subtitleContainer.remove();
        
        // Update story data (but don't save yet - wait for user to click save)
        storyData.hero.subtitle = '';
        
        console.log('Subtitle removed - changes will be saved when user clicks save button');
    }
}

function showImageOptions() {
    // Create hidden file input and trigger it immediately
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.style.display = 'none';
    
    // Add to DOM temporarily
    document.body.appendChild(imageInput);
    
    // Trigger file picker immediately
    imageInput.click();
    
    // Handle file selection
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const heroImage = document.getElementById('heroImage');
                if (heroImage) {
                    heroImage.src = e.target.result;
                    storyData.hero.image = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
        
        // Clean up
        document.body.removeChild(imageInput);
    });
    
    // Handle cancel (when user closes file picker without selecting)
    imageInput.addEventListener('cancel', () => {
        document.body.removeChild(imageInput);
    });
    
    // Also handle the case where user clicks outside or presses escape
    const handleCancel = () => {
        if (document.body.contains(imageInput)) {
            document.body.removeChild(imageInput);
        }
    };
    
    // Add event listeners for cancel scenarios
    setTimeout(() => {
        if (document.body.contains(imageInput)) {
            // If input is still there after a delay, user might have cancelled
            handleCancel();
        }
    }, 100);
}

function showCoverNotification() {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
        color: white;
        padding: 12px 40px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        font-family: "Source Serif Pro", serif;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        white-space: nowrap;
        min-width: 300px;
        text-align: center;
    `;
    notification.textContent = 'Changes saved successfully!';
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.visibility = 'visible';
        notification.style.animation = 'editModeIndicator 0.5s ease-out';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.visibility = 'hidden';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
