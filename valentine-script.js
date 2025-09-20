// Translation data
const translations = {
    en: {
        "edit-story": "Edit Story",
        "save-story": "Save Story",
        "changes-saved": "Changes saved successfully!",
        "proceed-payment": "Proceed to Payment",
        "from-lover": "To my dearest love, on our special day",
        "hero-title": "Happy Anniversary, my forever Valentine",
        "journey-intro": "Another year together, another year of growing in love, another year of choosing each other every single day",
        "journey-title": "Our Anniversary Journey",
        "memories-title": "Anniversary Memories",
        "memories-subtitle": "Our precious moments together",
        "all-memories": "All Memories",
        "photos": "Photos",
        "videos": "Videos",
        "add-memory": "Add Memory",
        "memory-media": "Memory Media",
        "memory-date": "Date",
        "words-title": "Words from the Heart",
        "heart-quote": "\"Another year of loving you, another year of being loved by you, another year of our beautiful story together\"",
        "heart-quote-author": "- Your Forever Valentine",
        "milestones-title": "Our Anniversary Milestones",
        "add-milestone": "Add Milestone",
        "promise-title": "To Another Year Together",
        "promise-subtitle": "My Anniversary Promise",
        "promise-text": "As we celebrate another year of love, I promise to continue choosing you every day, to grow with you through all of life's seasons, and to make every day feel like Valentine's Day with you by my side.",
        "promise-signature": "Happy Anniversary, my forever Valentine",
        "edit-section": "Edit Section",
        "section-title": "Section Title",
        "section-text": "Text Content",
        "section-image": "Section Image",
        "upload-instruction": "Click to add image",
        "cancel": "Cancel",
        "save-changes": "Save Changes",
        "memory-title": "Memory Title",
        "memory-description": "Description",
        "memory-image": "Memory Image",
        "save-memory": "Save Memory",
        "milestone-title": "Milestone Title",
        "milestone-year": "Year",
        "milestone-description": "Description",
        "save-milestone": "Save Milestone"
    },
    tr: {
        "edit-story": "Hikayeyi Düzenle",
        "save-story": "Hikayeyi Kaydet",
        "changes-saved": "Değişiklikler başarıyla kaydedildi!",
        "proceed-payment": "Ödemeye Geç",
        "from-lover": "En sevgili aşkıma, özel günümüzde",
        "hero-title": "Mutlu Yıldönümü, sonsuz sevgilim",
        "journey-intro": "Birlikte geçirdiğimiz bir yıl daha, aşkta büyüdüğümüz bir yıl daha, her gün birbirimizi seçtiğimiz bir yıl daha",
        "journey-title": "Yıldönümü Yolculuğumuz",
        "memories-title": "Yıldönümü Anıları",
        "memories-subtitle": "Birlikte yaşadığımız değerli anlar",
        "all-memories": "Tüm Anılar",
        "photos": "Fotoğraflar",
        "videos": "Videolar",
        "add-memory": "Anı Ekle",
        "memory-media": "Anı Medyası",
        "memory-date": "Tarih",
        "words-title": "Kalpten Sözler",
        "heart-quote": "\"Seni sevdiğim bir yıl daha, senin tarafından sevildiğim bir yıl daha, birlikte güzel hikayemizin bir yılı daha\"",
        "heart-quote-author": "- Sonsuz Sevgilin",
        "milestones-title": "Yıldönümü Dönüm Noktalarımız",
        "add-milestone": "Dönüm Noktası Ekle",
        "promise-title": "Birlikte Bir Yıl Daha",
        "promise-subtitle": "Yıldönümü Sözüm",
        "promise-text": "Aşkımızın bir yılını daha kutlarken, her gün seni seçmeye devam edeceğime, hayatın tüm mevsimlerinde seninle büyüyeceğime ve senin yanımda olduğun her günü Sevgililer Günü gibi hissettireceğime söz veriyorum.",
        "promise-signature": "Mutlu Yıldönümü, sonsuz sevgilim",
        "edit-section": "Bölümü Düzenle",
        "section-title": "Bölüm Başlığı",
        "section-text": "Metin İçeriği",
        "section-image": "Bölüm Resmi",
        "upload-instruction": "Resim eklemek için tıklayın",
        "cancel": "İptal",
        "save-changes": "Değişiklikleri Kaydet",
        "memory-title": "Anı Başlığı",
        "memory-description": "Açıklama",
        "memory-image": "Anı Resmi",
        "save-memory": "Anıyı Kaydet",
        "milestone-title": "Dönüm Noktası Başlığı",
        "milestone-year": "Yıl",
        "milestone-description": "Açıklama",
        "save-milestone": "Dönüm Noktasını Kaydet"
    }
};

// Current language
let currentLanguage = 'en';

// Notification functions
function showNotification() {
    const notification = document.getElementById('notificationToast');
    if (notification) {
        notification.classList.add('show');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            hideNotification();
        }, 3000);
    }
}

function hideNotification() {
    const notification = document.getElementById('notificationToast');
    if (notification) {
        notification.classList.remove('show');
    }
}

// Proceed to payment function
function proceedToPayment() {
    // Get the current product selection from URL parameters or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product') || localStorage.getItem('selectedProduct');
    
    // Construct payment URL with product information
    let paymentUrl = 'payment.html';
    if (productId) {
        paymentUrl += `?product=${productId}`;
    }
    
    // Add story data to localStorage for payment page
    localStorage.setItem('storyData', JSON.stringify(storyData));
    
    // Redirect to payment page
    window.location.href = paymentUrl;
}

// Improve scroll sensitivity
function improveScrollSensitivity() {
    // Add CSS for better scroll sensitivity
    const style = document.createElement('style');
    style.textContent = `
        * {
            scroll-behavior: auto !important;
        }
        
        html, body {
            scroll-behavior: auto !important;
            -webkit-overflow-scrolling: touch !important;
        }
        
        /* Improve scroll sensitivity on mobile */
        @media (max-width: 768px) {
            html, body {
                -webkit-overflow-scrolling: touch !important;
                scroll-behavior: auto !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Disable smooth scrolling for better responsiveness
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
}

// Story data
let storyData = {
    hero: {
        title: "Happy Anniversary, my forever Valentine",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop&crop=face"
    },
    journey: {
        intro: "Another year together, another year of growing in love, another year of choosing each other every single day",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop"
    },
    memories: [
        {
            id: 1,
            title: "Our First Date",
            description: "The day we first met and knew it was something special",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&crop=face"
                }
            ],
            date: "2023-02-14"
        },
        {
            id: 2,
            title: "Summer Vacation",
            description: "Our amazing trip to the beach together",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop"
                }
            ],
            date: "2023-07-15"
        },
        {
            id: 3,
            title: "Anniversary Dinner",
            description: "Celebrating our love with a romantic dinner",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop"
                }
            ],
            date: "2024-02-14"
        },
        {
            id: 4,
            title: "Daily Moments",
            description: "Simple moments that make our love special",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop"
                }
            ],
            date: "2024-01-20"
        },
        {
            id: 5,
            title: "Wedding Day",
            description: "The most beautiful day of our lives",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop"
                }
            ],
            date: "2023-06-15"
        },
        {
            id: 6,
            title: "Honeymoon Adventure",
            description: "Exploring the world together as newlyweds",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop"
                }
            ],
            date: "2023-06-20"
        },
        {
            id: 7,
            title: "Christmas Together",
            description: "Our first Christmas as a married couple",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=400&fit=crop"
                }
            ],
            date: "2023-12-25"
        },
        {
            id: 8,
            title: "Morning Coffee",
            description: "Starting each day with love and coffee",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
                }
            ],
            date: "2024-01-15"
        },
        {
            id: 9,
            title: "Birthday Surprise",
            description: "Surprising you with your favorite cake",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop"
                }
            ],
            date: "2023-09-10"
        },
        {
            id: 10,
            title: "Weekend Getaway",
            description: "Escaping to the mountains for some peace",
            media: [
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
                },
                {
                    type: "image",
                    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                }
            ],
            date: "2023-11-05"
        }
    ],
    words: {
        quote: "\"Another year of loving you, another year of being loved by you, another year of our beautiful story together\"",
        author: "- Your Forever Valentine"
    },
    milestones: [
        {
            id: 1,
            title: "First Meeting",
            year: "2023",
            description: "The day our love story began"
        },
        {
            id: 2,
            title: "First Date",
            year: "2023",
            description: "Our first romantic dinner together"
        },
        {
            id: 3,
            title: "Moving In Together",
            year: "2023",
            description: "Starting our life as a couple"
        },
        {
            id: 4,
            title: "First Anniversary",
            year: "2024",
            description: "Celebrating one year of love"
        }
    ],
    promise: {
        text: "As we celebrate another year of love, I promise to continue choosing you every day, to grow with you through all of life's seasons, and to make every day feel like Valentine's Day with you by my side.",
        signature: "Happy Anniversary, my forever Valentine",
        date: null, // Will be set to current date when loaded
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop"
    }
};

// Current editing section
let currentEditingSection = null;

// DOM Elements - will be initialized when DOM is loaded
let editStoryBtn;
let editModal;
let addMemoryModal;
let addMilestoneModal;



// Story data management
function loadStoryData() {
    const savedStory = localStorage.getItem('storyData');
    if (savedStory) {
        const savedData = JSON.parse(savedStory);
        
        // If saved data has no memories, use our example data
        if (!savedData.memories || savedData.memories.length === 0) {
            savedData.memories = storyData.memories;
        }
        
        // If saved data has no milestones, use our example data
        if (!savedData.milestones || savedData.milestones.length === 0) {
            savedData.milestones = storyData.milestones;
        }
        
        storyData = savedData;
    }
    
    // Check for personal message from main page
    const personalMessage = localStorage.getItem('personalMessage');
    if (personalMessage && personalMessage.trim()) {
        // Add the personal message to the heart quote or create a new memory
        storyData.words.quote = `"${personalMessage}"`;
        // Clear the message from localStorage after using it
        localStorage.removeItem('personalMessage');
    }
    
    // Always set current date as default (user can still edit it)
    const currentDate = new Date().toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    storyData.promise.date = currentDate;
}

function saveStoryData() {
    localStorage.setItem('storyData', JSON.stringify(storyData));
}

function renderStory() {
    // Update hero section
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
    
    // Update journey section
    const journeyIntro = document.getElementById('journeyIntro');
    if (journeyIntro) {
        // Use translation if available, otherwise use story data
        if (translations[currentLanguage] && translations[currentLanguage]['journey-intro']) {
            journeyIntro.textContent = translations[currentLanguage]['journey-intro'];
        } else if (storyData.journey.intro) {
        journeyIntro.textContent = storyData.journey.intro;
        }
    }
    
    const journeyImage = document.getElementById('journeyImage');
    if (journeyImage && storyData.journey.image) {
        journeyImage.src = storyData.journey.image;
    }
    
    // Update words section
    const heartQuote = document.getElementById('heartQuote');
    if (heartQuote) {
        // Use translation if available, otherwise use story data
        if (translations[currentLanguage] && translations[currentLanguage]['heart-quote']) {
            heartQuote.textContent = translations[currentLanguage]['heart-quote'];
        } else if (storyData.words.quote) {
        heartQuote.textContent = storyData.words.quote;
        }
    }
    
    const heartQuoteAuthor = document.getElementById('heartQuoteAuthor');
    if (heartQuoteAuthor) {
        // Use translation if available, otherwise use story data
        if (translations[currentLanguage] && translations[currentLanguage]['heart-quote-author']) {
            heartQuoteAuthor.textContent = translations[currentLanguage]['heart-quote-author'];
        } else if (storyData.words.author) {
        heartQuoteAuthor.textContent = storyData.words.author;
        }
    }
    
    // Update milestones section
    const milestonesTitle = document.getElementById('milestonesTitle');
    if (milestonesTitle && storyData.milestones.length > 0) {
        milestonesTitle.textContent = translations[currentLanguage]['milestones-title'];
    }
    
    // Update promise section
    const promiseText = document.getElementById('promiseText');
    if (promiseText) {
        // Use translation if available, otherwise use story data
        if (translations[currentLanguage] && translations[currentLanguage]['promise-text']) {
            promiseText.textContent = translations[currentLanguage]['promise-text'];
        } else if (storyData.promise.text) {
        promiseText.textContent = storyData.promise.text;
        }
    }
    
    const promiseSignature = document.getElementById('promiseSignature');
    if (promiseSignature) {
        // Use translation if available, otherwise use story data
        if (translations[currentLanguage] && translations[currentLanguage]['promise-signature']) {
            promiseSignature.textContent = translations[currentLanguage]['promise-signature'];
        } else if (storyData.promise.signature) {
        promiseSignature.textContent = storyData.promise.signature;
        }
    }
    
    const storyDate = document.getElementById('storyDate');
    if (storyDate) {
        // Always use current date (user can edit it)
        const currentDate = new Date().toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        storyDate.textContent = currentDate;
        storyData.promise.date = currentDate;
    }
    
    const promiseImage = document.getElementById('promiseImage');
    if (promiseImage && storyData.promise.image) {
        promiseImage.src = storyData.promise.image;
    }
    
    // Render memories and milestones
    renderMemories();
    renderMilestones();
}

function renderMemories() {
    const memoriesGallery = document.getElementById('memoriesGallery');
    if (!memoriesGallery) {
        console.error('memoriesGallery element not found');
        return;
    }
    
    memoriesGallery.innerHTML = '';
    
    storyData.memories.forEach((memory, index) => {
        const memoryItem = createMemoryItem(memory, index);
        memoriesGallery.appendChild(memoryItem);
    });
}

function createMemoryItem(memory, index) {
    const item = document.createElement('div');
    item.className = 'memory-item';
    item.dataset.index = index;
    
    const firstMedia = memory.media[0];
    const mediaType = firstMedia ? firstMedia.type : 'image';
    const mediaUrl = firstMedia ? firstMedia.url : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zz4KPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGMEYwRjAiLz4KPHBhdGggZD0iTTE3NSAxMjVIMjI1VjE3NUgxNzVWMjVWiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjA1VjE1NUgxOTVWMTQ1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8L3N2Zz4K';
    const mediaCount = memory.media.length > 1 ? memory.media.length : '';
    
    item.innerHTML = `
        <div class="memory-media">
            ${mediaType === 'video' ? 
                `<video src="${mediaUrl}" muted></video>` : 
                `<img src="${mediaUrl}" alt="${memory.title}">`
            }
            ${mediaCount ? `<div class="media-count">+${mediaCount - 1}</div>` : ''}
        </div>
        <div class="memory-content">
            <h3 class="memory-title" contenteditable="false" data-memory-index="${index}" data-field="title">${memory.title}</h3>
            <p class="memory-description" contenteditable="false" data-memory-index="${index}" data-field="description">${memory.description}</p>
            <div class="memory-meta">
                <span class="memory-date" contenteditable="false" data-memory-index="${index}" data-field="date">${formatDate(memory.date)}</span>
            </div>
        </div>
        <div class="memory-actions">
            <button class="action-btn delete" onclick="deleteMemory(${index})" title="Delete">
                🗑️
            </button>
        </div>
    `;
    
    // Add click handler for lightbox
    item.addEventListener('click', function(e) {
        if (!e.target.closest('.memory-actions')) {
            openMemoryLightbox(memory, index);
        }
    });
    
    return item;
}

function renderMilestones() {
    const milestonesTimeline = document.getElementById('milestonesTimeline');
    milestonesTimeline.innerHTML = '';
    
    storyData.milestones.forEach((milestone, index) => {
        const milestoneItem = createMilestoneItem(milestone, index);
        milestonesTimeline.appendChild(milestoneItem);
    });
}

function createMilestoneItem(milestone, index) {
    const item = document.createElement('div');
    item.className = 'milestone-item';
    item.dataset.index = index;
    
    item.innerHTML = `
        <div class="milestone-year" contenteditable="false" data-milestone-index="${index}" data-field="year">${milestone.year}</div>
        <div class="milestone-title" contenteditable="false" data-milestone-index="${index}" data-field="title">${milestone.title}</div>
        <div class="milestone-description" contenteditable="false" data-milestone-index="${index}" data-field="description">${milestone.description}</div>
        <div class="milestone-actions">
            <button class="action-btn delete" onclick="deleteMilestone(${index})" title="Delete">
                🗑️
            </button>
        </div>
    `;
    
    return item;
}

// Event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Edit story button
    if (editStoryBtn) {
        editStoryBtn.addEventListener('click', toggleEditMode);
        console.log('Edit story button listener added');
    } else {
        console.error('Edit story button not found!');
    }
    
    // Proceed to payment button
    const proceedPaymentBtn = document.getElementById('proceedPaymentBtn');
    if (proceedPaymentBtn) {
        proceedPaymentBtn.addEventListener('click', proceedToPayment);
        console.log('Proceed payment button listener added');
    } else {
        console.error('Proceed payment button not found!');
    }
    
    // Modal close buttons
    const closeEditModalBtn = document.getElementById('closeEditModal');
    const closeMemoryModalBtn = document.getElementById('closeMemoryModal');
    const closeMilestoneModalBtn = document.getElementById('closeMilestoneModal');
    
    if (closeEditModalBtn) {
        closeEditModalBtn.addEventListener('click', closeEditModal);
        console.log('Close edit modal listener added');
    } else {
        console.error('Close edit modal button not found!');
    }
    
    if (closeMemoryModalBtn) {
        closeMemoryModalBtn.addEventListener('click', closeAddMemoryModal);
        console.log('Close memory modal listener added');
    } else {
        console.error('Close memory modal button not found!');
    }
    
    if (closeMilestoneModalBtn) {
        closeMilestoneModalBtn.addEventListener('click', closeAddMilestoneModal);
        console.log('Close milestone modal listener added');
    } else {
        console.error('Close milestone modal button not found!');
    }
    
    // Form submissions
    const editForm = document.getElementById('editForm');
    const memoryForm = document.getElementById('memoryForm');
    const milestoneForm = document.getElementById('milestoneForm');
    
    if (editForm) {
        editForm.addEventListener('submit', handleEditSection);
        console.log('Edit form listener added');
    } else {
        console.error('Edit form not found!');
    }
    
    if (memoryForm) {
        memoryForm.addEventListener('submit', handleAddMemory);
        console.log('Memory form listener added');
    } else {
        console.error('Memory form not found!');
    }
    
    if (milestoneForm) {
        milestoneForm.addEventListener('submit', handleAddMilestone);
        console.log('Milestone form listener added');
    } else {
        console.error('Milestone form not found!');
    }
    
    // Cancel buttons
    const cancelEditBtn = document.getElementById('cancelEdit');
    const cancelMemoryBtn = document.getElementById('cancelMemory');
    const cancelMilestoneBtn = document.getElementById('cancelMilestone');
    
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', closeEditModal);
        console.log('Cancel edit listener added');
    } else {
        console.error('Cancel edit button not found!');
    }
    
    if (cancelMemoryBtn) {
        cancelMemoryBtn.addEventListener('click', closeAddMemoryModal);
        console.log('Cancel memory listener added');
    } else {
        console.error('Cancel memory button not found!');
    }
    
    if (cancelMilestoneBtn) {
        cancelMilestoneBtn.addEventListener('click', closeAddMilestoneModal);
        console.log('Cancel milestone listener added');
    } else {
        console.error('Cancel milestone button not found!');
    }
    
    // Image upload
    setupImageUpload();
    
    // Content editable save
    setupContentEditableSave();
    
    // Image click handler for edit mode only
    document.body.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            const img = e.target;
            
            // Skip if image is inside a memory lightbox
            if (img.closest('.lightbox-media')) {
                return;
            }
            
            // Only work in edit mode
            if (document.body.classList.contains('edit-mode')) {
                e.preventDefault();
                e.stopPropagation();
                replaceImage(img);
            }
        }
    });
    
    // Memory filters
    setupMemoryFilters();
    
    // Lightbox event listeners
    const closeLightboxBtn = document.getElementById('closeLightbox');
    const lightboxPrevBtn = document.getElementById('lightboxPrev');
    const lightboxNextBtn = document.getElementById('lightboxNext');
    const memoryLightbox = document.getElementById('memoryLightbox');
    
    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeMemoryLightbox);
    }
    if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', () => navigateLightbox('prev'));
    }
    if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', () => navigateLightbox('next'));
    }
    
    // Close lightbox on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (memoryLightbox && memoryLightbox.classList.contains('visible')) {
                closeMemoryLightbox();
            }
        }
    });
    
    // Close lightbox on overlay click
    if (memoryLightbox) {
        memoryLightbox.addEventListener('click', function(e) {
            if (e.target === memoryLightbox) {
                closeMemoryLightbox();
            }
        });
    }
    
    
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('visible');
            }
        });
    });
}

// Replace image function
function replaceImage(imageElement) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                if (imageElement) {
                    imageElement.src = e.target.result;
                    console.log('Image replaced successfully');
                }
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Edit mode
function toggleEditMode() {
    // Get all elements that should be editable (by class/ID, not by contenteditable attribute)
    const contentEditableElements = document.querySelectorAll('.hero-subtitle, .hero-title, .journey-intro, .section-title, .memories-subtitle, .heart-quote, .heart-quote-author, .promise-subtitle, .promise-text, .promise-signature, .story-date');
    const memoryTextElements = document.querySelectorAll('.memory-title, .memory-description, .memory-date');
    const milestoneTextElements = document.querySelectorAll('.milestone-year, .milestone-title, .milestone-description');
    const editButtons = document.querySelectorAll('.edit-image-btn');
    const addMemoryContainer = document.getElementById('addMemoryContainer');
    const addMilestoneBtn = document.getElementById('addMilestoneBtn');
    const sectionControls = document.querySelectorAll('.section-controls');
    const body = document.body;
    
    if (editStoryBtn.textContent.includes('Edit')) {
        // Enable edit mode
        body.classList.add('edit-mode');
        
        // Enable contenteditable for all editable elements
        contentEditableElements.forEach(element => {
            element.setAttribute('contenteditable', 'true');
        });
        
        // Enable contenteditable for memory text elements
        memoryTextElements.forEach(element => {
            element.setAttribute('contenteditable', 'true');
        });
        
        // Enable contenteditable for milestone text elements
        milestoneTextElements.forEach(element => {
            element.setAttribute('contenteditable', 'true');
        });
        
        // Show section controls
        sectionControls.forEach(control => {
            control.style.display = 'flex';
        });
        
        // Show add buttons
        if (addMemoryContainer) addMemoryContainer.style.display = 'block';
        if (addMilestoneBtn) addMilestoneBtn.style.display = 'flex';
        
        editStoryBtn.innerHTML = '<span data-translate="save-story">Save Story</span>';
    } else {
        // Save and disable edit mode
        saveContentEditableElements();
        saveMemoryTextElements();
        saveMilestoneTextElements();
        body.classList.remove('edit-mode');
        
        // Show success notification
        showNotification();
        
        // Disable contenteditable for all editable elements
        contentEditableElements.forEach(element => {
            element.setAttribute('contenteditable', 'false');
        });
        
        // Disable contenteditable for memory text elements
        memoryTextElements.forEach(element => {
            element.setAttribute('contenteditable', 'false');
        });
        
        // Disable contenteditable for milestone text elements
        milestoneTextElements.forEach(element => {
            element.setAttribute('contenteditable', 'false');
        });
        
        // Hide section controls
        sectionControls.forEach(control => {
            control.style.display = 'none';
        });
        
        // Hide add buttons
        if (addMemoryContainer) addMemoryContainer.style.display = 'none';
        if (addMilestoneBtn) addMilestoneBtn.style.display = 'none';
        
        editStoryBtn.innerHTML = '<span data-translate="edit-story">Edit Story</span>';
    }
}

function saveContentEditableElements() {
    // Save hero title
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        storyData.hero.title = heroTitle.textContent;
    }
    
    // Save journey intro
    const journeyIntro = document.getElementById('journeyIntro');
    if (journeyIntro) {
        storyData.journey.intro = journeyIntro.textContent;
    }
    
    // Save heart quote
    const heartQuote = document.getElementById('heartQuote');
    if (heartQuote) {
        storyData.words.quote = heartQuote.textContent;
    }
    
    // Save heart quote author
    const heartQuoteAuthor = document.getElementById('heartQuoteAuthor');
    if (heartQuoteAuthor) {
        storyData.words.author = heartQuoteAuthor.textContent;
    }
    
    // Save milestones title
    const milestonesTitle = document.getElementById('milestonesTitle');
    if (milestonesTitle) {
        // This is handled by the section title
    }
    
    // Save promise text
    const promiseText = document.getElementById('promiseText');
    if (promiseText) {
        storyData.promise.text = promiseText.textContent;
    }
    
    // Save promise signature
    const promiseSignature = document.getElementById('promiseSignature');
    if (promiseSignature) {
        storyData.promise.signature = promiseSignature.textContent;
    }
    
    // Save story date
    const storyDate = document.getElementById('storyDate');
    if (storyDate) {
        storyData.promise.date = storyDate.textContent;
    }
    
    saveStoryData();
}

function saveMemoryTextElements() {
    // Save memory text changes
    const memoryTextElements = document.querySelectorAll('.memory-title, .memory-description, .memory-date');
    
    memoryTextElements.forEach(element => {
        const memoryIndex = parseInt(element.dataset.memoryIndex);
        const field = element.dataset.field;
        
        if (memoryIndex >= 0 && memoryIndex < storyData.memories.length && field) {
            if (field === 'title') {
                storyData.memories[memoryIndex].title = element.textContent;
            } else if (field === 'description') {
                storyData.memories[memoryIndex].description = element.textContent;
            } else if (field === 'date') {
                // Parse the date text and convert to proper date format
                const dateText = element.textContent.trim();
                try {
                    // Try to parse the date and convert to ISO format
                    const parsedDate = new Date(dateText);
                    if (!isNaN(parsedDate.getTime())) {
                        storyData.memories[memoryIndex].date = parsedDate.toISOString().split('T')[0];
                    }
                } catch (e) {
                    console.warn('Invalid date format:', dateText);
                }
            }
        }
    });
    
    // Save to localStorage
    saveStoryData();
}

function saveMilestoneTextElements() {
    // Save milestone text changes
    const milestoneTextElements = document.querySelectorAll('.milestone-year, .milestone-title, .milestone-description');
    
    milestoneTextElements.forEach(element => {
        const milestoneIndex = parseInt(element.dataset.milestoneIndex);
        const field = element.dataset.field;
        
        if (milestoneIndex >= 0 && milestoneIndex < storyData.milestones.length && field) {
            if (field === 'year') {
                storyData.milestones[milestoneIndex].year = element.textContent;
            } else if (field === 'title') {
                storyData.milestones[milestoneIndex].title = element.textContent;
            } else if (field === 'description') {
                storyData.milestones[milestoneIndex].description = element.textContent;
            }
        }
    });
    
    // Save to localStorage
    saveStoryData();
}

function setupContentEditableSave() {
    document.querySelectorAll('.hero-subtitle, .hero-title, .journey-intro, .section-title, .memories-subtitle, .heart-quote, .heart-quote-author, .promise-subtitle, .promise-text, .promise-signature, .story-date').forEach(element => {
        element.addEventListener('blur', function() {
            saveContentEditableElements();
        });
    });
    
    // Also handle memory text elements
    document.querySelectorAll('.memory-title, .memory-description, .memory-date').forEach(element => {
        element.addEventListener('blur', function() {
            saveMemoryTextElements();
        });
    });
    
    // Also handle milestone text elements
    document.querySelectorAll('.milestone-year, .milestone-title, .milestone-description').forEach(element => {
        element.addEventListener('blur', function() {
            saveMilestoneTextElements();
        });
    });
}

// Section editing
function editSection(section) {
    currentEditingSection = section;
    editModal.classList.add('visible');
    document.body.style.overflow = 'hidden';
    
    // Populate form based on section
    const form = document.getElementById('editForm');
    form.reset();
    
    if (section === 'hero') {
        document.getElementById('sectionTitle').value = storyData.hero.title || '';
        document.getElementById('sectionText').value = '';
    } else if (section === 'journey') {
        document.getElementById('sectionTitle').value = 'Journey Section';
        document.getElementById('sectionText').value = storyData.journey.intro || '';
    } else if (section === 'promise') {
        document.getElementById('sectionTitle').value = 'Promise Section';
        document.getElementById('sectionText').value = storyData.promise.text || '';
    }
    
    // Show current image if exists
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = '';
    
    let currentImage = null;
    if (section === 'hero' && storyData.hero.image) {
        currentImage = storyData.hero.image;
    } else if (section === 'journey' && storyData.journey.image) {
        currentImage = storyData.journey.image;
    } else if (section === 'promise' && storyData.promise.image) {
        currentImage = storyData.promise.image;
    }
    
    if (currentImage) {
        const img = document.createElement('img');
        img.src = currentImage;
        imagePreview.appendChild(img);
    }
}

function closeEditModal() {
    editModal.classList.remove('visible');
    document.body.style.overflow = '';
    currentEditingSection = null;
}

function handleEditSection(e) {
    e.preventDefault();
    
    const title = document.getElementById('sectionTitle').value;
    const text = document.getElementById('sectionText').value;
    const imageFile = document.getElementById('imageInput').files[0];
    
    if (currentEditingSection === 'hero') {
        if (title) storyData.hero.title = title;
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            storyData.hero.image = imageUrl;
        }
    } else if (currentEditingSection === 'journey') {
        if (text) storyData.journey.intro = text;
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            storyData.journey.image = imageUrl;
        }
    } else if (currentEditingSection === 'promise') {
        if (text) storyData.promise.text = text;
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            storyData.promise.image = imageUrl;
        }
    }
    
    saveStoryData();
    renderStory();
    closeEditModal();
}

// Memory management
function addMemory() {
    addMemoryModal.classList.add('visible');
    document.body.style.overflow = 'hidden';
    document.getElementById('memoryForm').reset();
    const memoryMediaPreview = document.getElementById('memoryMediaPreview');
    if (memoryMediaPreview) {
        memoryMediaPreview.innerHTML = '';
    }
}

function closeAddMemoryModal() {
    addMemoryModal.classList.remove('visible');
    document.body.style.overflow = '';
}

function handleAddMemory(e) {
    e.preventDefault();
    
    const title = document.getElementById('memoryTitle').value;
    const description = document.getElementById('memoryDescription').value;
    const date = document.getElementById('memoryDate').value;
    const mediaFiles = document.getElementById('memoryMediaInput').files;
    
    const memory = {
        id: Date.now(),
        title: title,
        description: description,
        date: date,
        media: []
    };
    
    // Process media files
    Array.from(mediaFiles).forEach(file => {
        const mediaUrl = URL.createObjectURL(file);
        const mediaType = file.type.startsWith('video/') ? 'video' : 'image';
        memory.media.push({
            type: mediaType,
            url: mediaUrl,
            name: file.name
        });
    });
    
    storyData.memories.push(memory);
    saveStoryData();
    renderMemories();
    
    // Show success notification
    showNotification();
    
    closeAddMemoryModal();
}

function deleteMemory(index) {
    const memory = storyData.memories[index];
    const memoryTitle = memory ? memory.title : 'this memory';
    
    if (confirm(`Are you sure you want to delete "${memoryTitle}"? This action cannot be undone.`)) {
        storyData.memories.splice(index, 1);
        saveStoryData();
        renderMemories();
        
        // Show a brief success message
        const message = document.createElement('div');
        message.textContent = 'Memory deleted successfully';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            font-family: 'Source Serif Pro', serif;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}

// Milestone management
function addMilestone() {
    addMilestoneModal.classList.add('visible');
    document.body.style.overflow = 'hidden';
    document.getElementById('milestoneForm').reset();
}

function closeAddMilestoneModal() {
    addMilestoneModal.classList.remove('visible');
    document.body.style.overflow = '';
}

function handleAddMilestone(e) {
    e.preventDefault();
    
    const title = document.getElementById('milestoneTitle').value;
    const year = document.getElementById('milestoneYear').value;
    const description = document.getElementById('milestoneDescription').value;
    
    const milestone = {
        title: title,
        year: year,
        description: description
    };
    
    storyData.milestones.push(milestone);
    saveStoryData();
    renderMilestones();
    
    // Show success notification
    showNotification();
    
    closeAddMilestoneModal();
}

function deleteMilestone(index) {
    if (confirm('Are you sure you want to delete this milestone?')) {
        storyData.milestones.splice(index, 1);
        saveStoryData();
        renderMilestones();
    }
}

// Image upload handling
function setupImageUpload() {
    // Edit modal
    const imageUploadArea = document.getElementById('imageUploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    
    if (imageUploadArea && imageInput) {
    imageUploadArea.addEventListener('click', () => imageInput.click());
    imageInput.addEventListener('change', handleImageUpload);
    }
    
    // Memory modal - updated to use new IDs
    const memoryMediaUploadArea = document.getElementById('memoryMediaUploadArea');
    const memoryMediaInput = document.getElementById('memoryMediaInput');
    const memoryMediaPreview = document.getElementById('memoryMediaPreview');
    
    if (memoryMediaUploadArea && memoryMediaInput) {
        memoryMediaUploadArea.addEventListener('click', () => memoryMediaInput.click());
        memoryMediaInput.addEventListener('change', handleMemoryMediaUpload);
    }
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
    }
}

function handleMemoryMediaUpload(e) {
    const files = Array.from(e.target.files);
    const mediaPreview = document.getElementById('memoryMediaPreview');
    
    if (mediaPreview) {
        mediaPreview.innerHTML = '';
        
        files.forEach(file => {
            const mediaUrl = URL.createObjectURL(file);
            const mediaType = file.type.startsWith('video/') ? 'video' : 'image';
            
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-preview-item';
            
            const mediaElement = document.createElement(mediaType);
            mediaElement.src = mediaUrl;
            if (mediaType === 'video') {
                mediaElement.muted = true;
            }
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-media';
            removeBtn.innerHTML = '×';
            removeBtn.onclick = () => {
                mediaItem.remove();
            };
            
            mediaItem.appendChild(mediaElement);
            mediaItem.appendChild(removeBtn);
            mediaPreview.appendChild(mediaItem);
        });
    }
}

// Memory filtering
function setupMemoryFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterMemories(filter);
        });
    });
}

function filterMemories(filter) {
    const memoryItems = document.querySelectorAll('.memory-item');
    
    memoryItems.forEach(item => {
        let show = true;
        
        switch(filter) {
            case 'photos':
                show = !item.querySelector('video');
                break;
            case 'videos':
                show = !!item.querySelector('video');
                break;
            case 'all':
            default:
                show = true;
                break;
        }
        
        item.style.display = show ? 'block' : 'none';
    });
}

// Lightbox functionality
let currentLightboxIndex = 0;
let currentLightboxMemories = [];
let currentImageIndex = 0;


function openMemoryLightbox(memory, index) {
    currentLightboxIndex = index;
    currentLightboxMemories = storyData.memories;
    currentImageIndex = 0; // Reset image index when opening new memory
    
    const lightbox = document.getElementById('memoryLightbox');
    const lightboxMedia = document.getElementById('lightboxMedia');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxDate = document.getElementById('lightboxDate');
    const lightboxCategory = document.getElementById('lightboxCategory');
    
    // Show lightbox immediately at the beginning
    
    // Set up lightbox to follow the star and make it visible immediately
    if (lightbox) {
        // Set up popup positioning
        
        // Initially position at center (will be updated by moveStarToScrollCenter)
        lightbox.style.position = 'absolute';
        lightbox.style.top = '50%';
        lightbox.style.left = '50%';
        lightbox.style.transform = 'translate(-50%, -50%)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = '10000';
        
        // Make lightbox visible immediately with no transitions
        lightbox.style.opacity = '1';
        lightbox.style.visibility = 'visible';
        lightbox.style.transition = 'none';
        lightbox.classList.add('visible');
        document.body.style.overflow = 'hidden';
        
        // Add basic content immediately so lightbox isn't empty
        lightboxTitle.textContent = memory.title;
        lightboxDescription.textContent = memory.description;
        lightboxDate.textContent = formatDate(memory.date);
        
        // Stitch popup to initial center position
        stitchPopupToInitialPosition();
        
        // Add click handlers for left/right navigation
        setupPopupClickNavigation();
        
        // Prevent zoom when popup is open
        preventZoom();
    }
    
    // Update media after lightbox is visible - show only current image
    updateLightboxMedia();
}

function closeMemoryLightbox() {
    console.log('Closing memory lightbox...');
    const lightbox = document.getElementById('memoryLightbox');
    if (lightbox) {
        // Close memory popup
        
        // Remove click navigation listeners
        lightbox.removeEventListener('click', handlePopupClick);
        
        // Restore zoom functionality when popup closes
        restoreZoom();
        
        // Reset positioning and visibility
        lightbox.style.position = '';
        lightbox.style.top = '';
        lightbox.style.left = '';
        lightbox.style.transform = '';
        lightbox.style.zIndex = '';
        lightbox.style.visibility = '';
        lightbox.style.opacity = '';
        lightbox.style.display = '';
        lightbox.style.alignItems = '';
        lightbox.style.justifyContent = '';
        lightbox.style.transition = '';
        
        // Immediately reset all styles to prevent transition delays
        document.body.style.overflow = '';
        document.body.style.filter = '';
        document.body.style.backdropFilter = '';
        document.body.style.webkitBackdropFilter = '';
        document.body.style.transform = '';
        document.body.style.opacity = '';
        document.body.style.background = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.bottom = '';
        
        // Remove visible class immediately
        lightbox.classList.remove('visible');
        console.log('Lightbox visible class removed');
        
        // Reset any potential modal overlay effects
        document.body.classList.remove('modal-open', 'lightbox-open', 'memory-lightbox-open');
        document.documentElement.classList.remove('modal-open', 'lightbox-open', 'memory-lightbox-open');
        
        // Reset any potential backdrop effects on other elements
        const elementsWithBackdrop = document.querySelectorAll('[style*="backdrop-filter"], [style*="filter"]');
        elementsWithBackdrop.forEach(el => {
            if (el !== lightbox) {
                el.style.backdropFilter = '';
                el.style.webkitBackdropFilter = '';
                el.style.filter = '';
            }
        });
        
        // Force immediate reflow
        document.body.offsetHeight;
        
        console.log('Memory lightbox closed and page reset immediately');
    }
}

function navigateLightbox(direction) {
    const memory = currentLightboxMemories[currentLightboxIndex];
    const totalImages = memory.media.length;
    
    // If memory has multiple images, navigate between images first
    if (totalImages > 1) {
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
        } else {
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        }
        updateLightboxMedia();
        return;
    }
    
    // If only one image or no more images to navigate, go to next/previous memory
    const total = currentLightboxMemories.length;
    if (direction === 'next') {
        currentLightboxIndex = (currentLightboxIndex + 1) % total;
    } else {
        currentLightboxIndex = (currentLightboxIndex - 1 + total) % total;
    }
    
    const newMemory = currentLightboxMemories[currentLightboxIndex];
    currentImageIndex = 0; // Reset image index for new memory
    updateLightboxContent(newMemory, currentLightboxIndex);
}

// Update lightbox media to show current image
function updateLightboxMedia() {
    const lightboxMedia = document.getElementById('lightboxMedia');
    const memory = currentLightboxMemories[currentLightboxIndex];
    
    if (!lightboxMedia || !memory || !memory.media.length) return;
    
    const currentMedia = memory.media[currentImageIndex];
    lightboxMedia.innerHTML = '';
    
    const mediaElement = document.createElement(currentMedia.type === 'video' ? 'video' : 'img');
    mediaElement.src = currentMedia.url;
    if (currentMedia.type === 'video') {
        mediaElement.controls = true;
        mediaElement.muted = true;
    }
    
    lightboxMedia.appendChild(mediaElement);
    
    console.log(`Showing image ${currentImageIndex + 1} of ${memory.media.length} for memory: ${memory.title}`);
}

// Update lightbox content without repositioning
function updateLightboxContent(memory, index) {
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxDate = document.getElementById('lightboxDate');
    
    if (lightboxTitle) lightboxTitle.textContent = memory.title;
    if (lightboxDescription) lightboxDescription.textContent = memory.description;
    if (lightboxDate) lightboxDate.textContent = formatDate(memory.date);
    
    // Update media content
    updateLightboxMedia();
    
    // Update navigation based on number of images
    setupPopupClickNavigation();
    
    console.log('Lightbox content updated for memory:', memory.title);
}

// Prevent zoom when popup is open
function preventZoom() {
    // Store original viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.dataset.originalContent = viewport.content;
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }
    
    // Only prevent multi-touch zoom, allow single touch scrolling
    document.addEventListener('touchstart', preventZoomTouch, { passive: true });
    
    console.log('Zoom prevention enabled');
}

// Restore zoom functionality when popup closes
function restoreZoom() {
    // Restore original viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport && viewport.dataset.originalContent) {
        viewport.content = viewport.dataset.originalContent;
        delete viewport.dataset.originalContent;
    }
    
    // Remove touch event listeners
    document.removeEventListener('touchstart', preventZoomTouch);
    
    console.log('Zoom functionality restored');
}

// Prevent zoom touch events - only block multi-touch
function preventZoomTouch(e) {
    // Only prevent if more than 1 finger (pinch zoom)
    if (e.touches.length > 1) {
        e.preventDefault();
    }
    // Allow single touch scrolling to work normally
}

// Star functions removed - no longer needed

// Enhance scroll sensitivity for mobile
function enhanceScrollSensitivity() {
    // Remove any potential touch interference
    // Let the browser handle scrolling naturally
    console.log('Scroll sensitivity optimized - using native browser scrolling');
}

// Swipe up detection and content reveal
let swipeUpDetected = false;
let touchStartY = 0;
let touchEndY = 0;

function initializeSwipeUpDetection() {
    const heroSection = document.getElementById('hero');
    const mainContentWrapper = document.getElementById('mainContentWrapper');
    const swipeUpIndicator = document.getElementById('swipeUpIndicator');
    
    if (!heroSection || !mainContentWrapper || !swipeUpIndicator) {
        console.log('Missing elements for swipe detection');
        return;
    }
    
    // Touch events for swipe detection
    heroSection.addEventListener('touchstart', handleTouchStart, { passive: true });
    heroSection.addEventListener('touchmove', handleTouchMove, { passive: true });
    heroSection.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Also listen for scroll events as backup
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add click/tap detection as additional fallback
    heroSection.addEventListener('click', handleHeroClick, { passive: true });
    
    console.log('Swipe up detection initialized with multiple methods');
}

function handleTouchStart(e) {
    if (swipeUpDetected) return;
    touchStartY = e.touches[0].clientY;
    console.log('Touch start Y:', touchStartY);
}

function handleTouchMove(e) {
    if (swipeUpDetected) return;
    
    const currentY = e.touches[0].clientY;
    const swipeDistance = touchStartY - currentY;
    
    // If user has swiped up more than 20px, reveal content
    if (swipeDistance > 20) {
        console.log('Touch move swipe detected! Distance:', swipeDistance);
        revealMainContent();
    }
}

function handleTouchEnd(e) {
    if (swipeUpDetected) return;
    touchEndY = e.changedTouches[0].clientY;
    
    const swipeDistance = touchStartY - touchEndY;
    const minSwipeDistance = 30; // Reduced minimum distance for easier detection
    
    console.log('Touch end Y:', touchEndY);
    console.log('Swipe distance:', swipeDistance);
    console.log('Min distance needed:', minSwipeDistance);
    
    if (swipeDistance > minSwipeDistance) {
        console.log('Swipe up detected! Revealing content...');
        revealMainContent();
    } else {
        console.log('Swipe distance too small');
    }
}

function handleScroll(e) {
    if (swipeUpDetected) return;
    
    // If user scrolls down even a little, reveal content
    if (window.scrollY > 5) {
        console.log('Scroll detected! Revealing content...');
        revealMainContent();
    }
}

function handleHeroClick(e) {
    if (swipeUpDetected) return;
    
    // If user clicks/taps on hero section, reveal content
    console.log('Hero click detected! Revealing content...');
    revealMainContent();
}

function revealMainContent() {
    if (swipeUpDetected) return;
    
    swipeUpDetected = true;
    const mainContentWrapper = document.getElementById('mainContentWrapper');
    const swipeUpIndicator = document.getElementById('swipeUpIndicator');
    
    if (mainContentWrapper) {
        mainContentWrapper.classList.add('revealed');
    }
    
    if (swipeUpIndicator) {
        swipeUpIndicator.style.opacity = '0';
        swipeUpIndicator.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            swipeUpIndicator.style.display = 'none';
        }, 300);
    }
    
    console.log('Main content revealed via swipe up');
}

// Throttle function for smooth performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Stitch popup to initial center position when memory popup opens
function stitchPopupToInitialPosition() {
    const memoryLightbox = document.getElementById('memoryLightbox');
    
    if (memoryLightbox && memoryLightbox.classList.contains('visible')) {
        // Get current scroll position with high precision
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        
        // Get viewport dimensions with high precision
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
        // Calculate exact center of current viewport (this becomes the "stitched" position)
        const centerY = scrollTop + (viewportHeight / 2);
        const centerX = scrollLeft + (viewportWidth / 2);
        
        // Position memory popup at the center of current viewport
        memoryLightbox.style.position = 'absolute';
        memoryLightbox.style.top = centerY + 'px';
        memoryLightbox.style.left = centerX + 'px';
        memoryLightbox.style.transform = 'translate(-50%, -50%)';
        memoryLightbox.style.zIndex = '10000';
        memoryLightbox.style.transition = 'none'; // No transition to keep it stitched
        
        console.log('Popup stitched to position:', centerX, centerY);
    }
}

// Setup click navigation for popup left/right areas
function setupPopupClickNavigation() {
    const lightbox = document.getElementById('memoryLightbox');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const memory = currentLightboxMemories[currentLightboxIndex];
    
    if (!lightbox || !memory) return;
    
    // Remove any existing click listeners to avoid duplicates
    lightbox.removeEventListener('click', handlePopupClick);
    
    // Only add click navigation if memory has multiple images
    if (memory.media.length > 1) {
        lightbox.addEventListener('click', handlePopupClick);
        // Show navigation arrows
        if (lightboxPrev) lightboxPrev.style.display = 'flex';
        if (lightboxNext) lightboxNext.style.display = 'flex';
    } else {
        // Hide navigation arrows for single image
        if (lightboxPrev) lightboxPrev.style.display = 'none';
        if (lightboxNext) lightboxNext.style.display = 'none';
    }
}

// Handle clicks on popup for navigation
function handlePopupClick(e) {
    // Don't navigate if clicking on navigation buttons or close button
    if (e.target.closest('.lightbox-nav') || e.target.closest('.lightbox-close')) {
        return;
    }
    
    const lightbox = document.getElementById('memoryLightbox');
    if (!lightbox) return;
    
    // Get popup dimensions and position
    const rect = lightbox.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const popupWidth = rect.width;
    
    // Calculate left and right zones (each 40% of popup width)
    const leftZone = popupWidth * 0.4;
    const rightZone = popupWidth * 0.6;
    
    // Navigate based on click position
    if (clickX < leftZone) {
        // Click on left side - go to previous memory
        console.log('Left side clicked - navigating to previous memory');
        navigateLightbox('prev');
    } else if (clickX > rightZone) {
        // Click on right side - go to next memory
        console.log('Right side clicked - navigating to next memory');
        navigateLightbox('next');
    }
    // Middle zone (40%-60%) does nothing - allows clicking on content without navigation
}

// No star movement needed - star has been removed

// Star functions removed - no longer needed

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Section management
function removeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const sectionTitle = section.querySelector('.section-title')?.textContent || sectionId;
    
    if (confirm(`Are you sure you want to remove the "${sectionTitle}" section? This action cannot be undone.`)) {
        section.style.transition = 'all 0.3s ease';
        section.style.opacity = '0';
        section.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            section.remove();
            
            // Show success message
            const message = document.createElement('div');
            message.textContent = 'Section removed successfully';
            message.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #28a745;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                z-index: 1000;
                font-family: 'Source Serif Pro', serif;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            `;
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
        }, 300);
    }
}

// Global functions for onclick handlers
window.editSection = editSection;
window.addMemory = addMemory;
window.deleteMemory = deleteMemory;
window.addMilestone = addMilestone;
window.deleteMilestone = deleteMilestone;
window.openMemoryLightbox = openMemoryLightbox;
window.closeMemoryLightbox = closeMemoryLightbox;
window.navigateLightbox = navigateLightbox;
window.removeSection = removeSection;
// Star function exports removed - no longer needed


// Performance and UX enhancements
function setupSmoothScrolling() {
    // Add smooth scroll to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupImageOptimization() {
    // Add loading states to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });
        
        img.addEventListener('error', function() {
            this.classList.remove('loading');
            // Add fallback image or placeholder
            this.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)';
        });
        
        // Add loading class initially
        if (!img.complete) {
            img.classList.add('loading');
        }
    });
}

function setupPerformanceMonitoring() {
    // Monitor page performance
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                }
            }, 0);
        });
    }
    
    // Add intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

function setupScrollAnimations() {
    // Add intersection observer for scroll animations
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            sectionObserver.observe(section);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('visible');
        });
    }
}

// Language switching
function setupLanguageSwitching() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            updateLanguage();
        });
    }
}

function updateLanguage() {
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Re-render the story with new language
    renderStory();
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    editStoryBtn = document.getElementById('editStoryBtn');
    editModal = document.getElementById('editModal');
    addMemoryModal = document.getElementById('addMemoryModal');
    addMilestoneModal = document.getElementById('addMilestoneModal');
    
    // Enhance scroll sensitivity for mobile
    enhanceScrollSensitivity();
    
    // Initialize swipe up detection
    initializeSwipeUpDetection();

    // Disable contenteditable by default
    const contentEditableElements = document.querySelectorAll('.hero-subtitle, .hero-title, .journey-intro, .section-title, .memories-subtitle, .heart-quote, .heart-quote-author, .promise-subtitle, .promise-text, .promise-signature, .story-date');
    contentEditableElements.forEach(element => {
        element.setAttribute('contenteditable', 'false');
    });

    // Load saved data or use default
    loadStoryData();

    // Render the story
    renderStory();

    // Setup event listeners
    setupEventListeners();

    // Setup language switching
    setupLanguageSwitching();

    // Add smooth scroll behavior for better UX
    setupSmoothScrolling();

    // Add image loading optimization
    setupImageOptimization();

    // Add performance monitoring
    setupPerformanceMonitoring();

    // Add scroll animations
    setupScrollAnimations();
});
