// Translation data
const translations = {
    en: {
        shop: "Shop",
        all: "All",
        valentine: "Valentine",
        mother: "Mother",
        daughter: "For daughter",
        son: "For son",
        friend: "Friend",
        birthday: "Birthday",
        pet: "Pet",
        limited: "Limited",
        recommended: "Recommended",
        new: "New",
        "price-low": "Price ↑",
        "price-high": "Price ↓",
        personalize: "Personalize",
        "send-gift": "Send as gift",
        "personalize-buy": "Personalize & buy",
        checkout: "Checkout",
        "personalize-keepsake": "Personalize your keepsake",
        "personal-message": "Personal message",
        "message-preview": "Preview your message",
        "nfc-hint": "Tap item to open gallery",
        "currency": "$",
        "currency-symbol": "USD",
        "products": {
            "valentine-heart": {
                "title": "Valentine's Heart",
                "subtitle": "5-photo portrait keepsake",
                "message": "My dearest love, you are the light of my life and the reason my heart beats with joy every single day."
            },
            "mothers-blessing": {
                "title": "Mother's Blessing",
                "subtitle": "3-photo memory frame",
                "message": "Mom, your love has shaped me into who I am today. Thank you for being my guiding light."
            },
            "daughters-treasure": {
                "title": "Daughter's Treasure",
                "subtitle": "4-photo keepsake box",
                "message": "To my precious daughter, you are my greatest joy and my heart's treasure."
            },
            "birthday-celebration": {
                "title": "Birthday Celebration",
                "subtitle": "6-photo memory book",
                "message": "Happy birthday! May this new year bring you endless joy and beautiful memories."
            },
            "sons-pride": {
                "title": "Son's Pride",
                "subtitle": "4-photo memory frame",
                "message": "To my amazing son, you make me so proud every single day."
            },
            "friendship-bond": {
                "title": "Friendship Bond",
                "subtitle": "3-photo keepsake box",
                "message": "Thank you for being the most wonderful friend I could ever ask for."
            },
            "pet-companion": {
                "title": "Pet Companion",
                "subtitle": "2-photo memory frame",
                "message": "My beloved companion, you bring so much joy to my life every day."
            },
            "limited-edition": {
                "title": "Limited Edition",
                "subtitle": "Exclusive 7-photo keepsake",
                "message": "A rare and beautiful keepsake, crafted with love for special moments."
            }
        }
    },
    tr: {
        shop: "Mağaza",
        all: "Tümü",
        valentine: "Sevgililer",
        mother: "Anneler",
        daughter: "Kızlar için",
        son: "Erkekler için",
        friend: "Arkadaş",
        birthday: "Doğum günü",
        pet: "Evcil Hayvan",
        limited: "Sınırlı",
        recommended: "Önerilen",
        new: "Yeni",
        "price-low": "Fiyat ↑",
        "price-high": "Fiyat ↓",
        personalize: "Kişiselleştir",
        "send-gift": "Hediye olarak gönder",
        "personalize-buy": "Kişiselleştir ve satın al",
        checkout: "Sepete ekle",
        "personalize-keepsake": "Anı objenizi kişiselleştirin",
        "personal-message": "Kişisel mesaj",
        "message-preview": "Mesajınızı önizleyin",
        "nfc-hint": "Galeriyi açmak için öğeye dokunun",
        "currency": "₺",
        "currency-symbol": "TRY",
        "products": {
            "valentine-heart": {
                "title": "Sevgililer Kalbi",
                "subtitle": "5 fotoğraflı portre anı objesi",
                "message": "En sevgili aşkım, sen hayatımın ışığısın ve kalbimin her gün sevinçle atmasının sebebisin."
            },
            "mothers-blessing": {
                "title": "Annenin Kutsaması",
                "subtitle": "3 fotoğraflı anı çerçevesi",
                "message": "Anne, sevgin beni bugünkü halime getirdi. Rehber ışığım olduğun için teşekkürler."
            },
            "daughters-treasure": {
                "title": "Kızın Hazinesi",
                "subtitle": "4 fotoğraflı anı kutusu",
                "message": "Değerli kızıma, sen benim en büyük sevincim ve kalbimin hazinesisin."
            },
            "birthday-celebration": {
                "title": "Doğum Günü Kutlaması",
                "subtitle": "6 fotoğraflı anı defteri",
                "message": "Mutlu yıllar! Bu yeni yıl sana sonsuz sevinç ve güzel anılar getirsin."
            },
            "sons-pride": {
                "title": "Oğlun Gururu",
                "subtitle": "4 fotoğraflı anı çerçevesi",
                "message": "Harika oğluma, her gün beni çok gururlandırıyorsun."
            },
            "friendship-bond": {
                "title": "Dostluk Bağı",
                "subtitle": "3 fotoğraflı anı kutusu",
                "message": "İstediğim en harika arkadaş olduğun için teşekkürler."
            },
            "pet-companion": {
                "title": "Evcil Hayvan Arkadaşı",
                "subtitle": "2 fotoğraflı anı çerçevesi",
                "message": "Sevgili arkadaşım, hayatıma her gün çok sevinç katıyorsun."
            },
            "limited-edition": {
                "title": "Sınırlı Baskı",
                "subtitle": "Özel 7 fotoğraflı anı objesi",
                "message": "Özel anlar için sevgiyle hazırlanmış nadir ve güzel bir anı objesi."
            }
        }
    }
};

// Current language
let currentLanguage = 'en';

// Helper functions for translations
function getProductInfo(product, field) {
    const translationKey = product.translationKey;
    if (translations[currentLanguage] && 
        translations[currentLanguage].products && 
        translations[currentLanguage].products[translationKey]) {
        return translations[currentLanguage].products[translationKey][field];
    }
    // Fallback to English
    if (translations.en && translations.en.products && translations.en.products[translationKey]) {
        return translations.en.products[translationKey][field];
    }
    return '';
}

function formatPrice(price) {
    const currency = translations[currentLanguage]?.currency || '$';
    return `${currency}${price}`;
}

// Sample product data
const products = [
    // Valentine product (images 1 & 8)
    {
        id: 1,
        translationKey: "valentine-heart",
        basePrice: 24,
        personalizationPrice: 8,
        occasion: "valentine",
        images: [
            "products/valentine/product-image-1.png",
            "products/valentine/product-image-8.png"
        ],
        image: "products/valentine/product-image-1.png", // Main image for display
        isNew: true,
        isLimited: true
    },
    // Mother product (images 2 & 3 from valentine folder)
    {
        id: 2,
        translationKey: "mothers-blessing",
        basePrice: 19,
        personalizationPrice: 6,
        occasion: "mother",
        images: [
            "products/valentine/product-image-2.png",
            "products/valentine/product-image-3.png"
        ],
        image: "products/valentine/product-image-2.png", // Main image for display
        isNew: false,
        isLimited: false
    },
    // Daughter product (1 image)
    {
        id: 3,
        translationKey: "daughters-treasure",
        basePrice: 22,
        personalizationPrice: 7,
        occasion: "daughter",
        images: [
            "products/daughter/product-image-7.png"
        ],
        image: "products/daughter/product-image-7.png",
        isNew: true,
        isLimited: false
    },
    // Son product (images 4 & 5)
    {
        id: 4,
        translationKey: "sons-pride",
        basePrice: 23,
        personalizationPrice: 8,
        occasion: "son",
        images: [
            "products/son/product-image-4.png",
            "products/son/product-image-5.png"
        ],
        image: "products/son/product-image-4.png", // Main image for display
        isNew: false,
        isLimited: true
    },
    // Friend product (images 4 & 5)
    {
        id: 5,
        translationKey: "friendship-bond",
        basePrice: 20,
        personalizationPrice: 6,
        occasion: "friend",
        images: [
            "products/friend/product-image-4.png",
            "products/friend/product-image-5.png"
        ],
        image: "products/friend/product-image-4.png", // Main image for display
        isNew: true,
        isLimited: false
    },
    // Birthday product (images 4 & 5)
    {
        id: 6,
        translationKey: "birthday-celebration",
        basePrice: 28,
        personalizationPrice: 8,
        occasion: "birthday",
        images: [
            "products/birthday/product-image-4.png",
            "products/birthday/product-image-5.png"
        ],
        image: "products/birthday/product-image-4.png", // Main image for display
        isNew: false,
        isLimited: true
    },
    // Pet product (1 image)
    {
        id: 7,
        translationKey: "pet-companion",
        basePrice: 18,
        personalizationPrice: 5,
        occasion: "pet",
        images: [
            "products/pet/product-image-6.png"
        ],
        image: "products/pet/product-image-6.png",
        isNew: false,
        isLimited: false
    }
];

// State management
let currentFilter = 'all';
let currentSort = 'recommended';
let selectedProducts = new Set();
let cartCount = 0;

// DOM elements
const productGrid = document.querySelector('.product-grid');
const filterChips = document.querySelectorAll('.filter-chip');
const sortOptions = document.querySelectorAll('.sort-option');
const stickyBar = document.getElementById('stickyBar');
const modalOverlay = document.getElementById('modalOverlay');
const modalDrawer = document.getElementById('modalDrawer');
const modalClose = document.getElementById('modalClose');
const cartIcon = document.querySelector('.cart-count');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupScrollListener();
});

// Event listeners
function setupEventListeners() {
    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderProducts();
        });
    });

    // Sort options
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            sortOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            currentSort = this.dataset.sort;
            renderProducts();
        });
    });

    // Modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Sticky bar checkout
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (selectedProducts.size > 0) {
            alert(`Proceeding to checkout with ${selectedProducts.size} items`);
        }
    });
}

// Scroll listener for sticky bar
function setupScrollListener() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 200) {
            stickyBar.classList.add('visible');
        } else {
            stickyBar.classList.remove('visible');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Filter and sort products
function getFilteredAndSortedProducts() {
    let filtered = products;

    // Apply filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.occasion === currentFilter);
    }

    // Apply sort
    switch (currentSort) {
        case 'new':
            filtered = filtered.filter(p => p.isNew);
            break;
        case 'price-low':
            filtered.sort((a, b) => a.basePrice - b.basePrice);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.basePrice - a.basePrice);
            break;
        case 'recommended':
        default:
            // Keep original order for recommended
            break;
    }

    return filtered;
}

// Render products
function renderProducts() {
    const filteredProducts = getFilteredAndSortedProducts();
    
    productGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;

    // Get translated content
    const title = getProductInfo(product, 'title');
    const subtitle = getProductInfo(product, 'subtitle');
    const message = getProductInfo(product, 'message');
    
    const occasionBadge = product.occasion.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    
    const messagePreview = message.split('\n').slice(0, 2).join(' ');

    // Create image container based on number of images
    let imageContainerHTML = '';
    if (product.images && product.images.length > 1) {
        // Show 2 images side by side
        imageContainerHTML = `
            <div class="product-image-container dual-images">
                <div class="image-left">
                    <img class="product-image loading" src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'><rect width='200' height='300' fill='%23fafafa'/><circle cx='100' cy='120' r='20' fill='none' stroke='%23ddd' stroke-width='2'/><path d='M85 140 L100 120 L115 140' fill='none' stroke='%23ddd' stroke-width='2'/><text x='100' y='200' font-family='serif' font-size='12' fill='%23aaa' text-anchor='middle'>Keepsake</text></svg>" data-src="${product.images[0]}" alt="${title}" loading="lazy">
                </div>
                <div class="image-right">
                    <img class="product-image loading" src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'><rect width='200' height='300' fill='%23fafafa'/><circle cx='100' cy='120' r='20' fill='none' stroke='%23ddd' stroke-width='2'/><path d='M85 140 L100 120 L115 140' fill='none' stroke='%23ddd' stroke-width='2'/><text x='100' y='200' font-family='serif' font-size='12' fill='%23aaa' text-anchor='middle'>Keepsake</text></svg>" data-src="${product.images[1]}" alt="${title}" loading="lazy">
                </div>
                <div class="occasion-badge">${occasionBadge}</div>
            </div>
        `;
    } else {
        // Show single image
        imageContainerHTML = `
            <div class="product-image-container">
                <img class="product-image loading" src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23fafafa'/><circle cx='200' cy='120' r='30' fill='none' stroke='%23ddd' stroke-width='2'/><path d='M170 150 L200 120 L230 150' fill='none' stroke='%23ddd' stroke-width='2'/><text x='200' y='200' font-family='serif' font-size='14' fill='%23aaa' text-anchor='middle'>Keepsake</text></svg>" data-src="${product.image}" alt="${title}" loading="lazy">
                <div class="occasion-badge">${occasionBadge}</div>
            </div>
        `;
    }

    card.innerHTML = `
        ${imageContainerHTML}
        <div class="product-content">
            <div class="product-title">${title}</div>
            <div class="product-subtitle">${subtitle}</div>
            <div class="price-row">
                <span class="base-price">${formatPrice(product.basePrice)}</span>
                <span class="personalization-price">• Personalization +${formatPrice(product.personalizationPrice)}</span>
            </div>
            <div class="message-preview">${messagePreview}</div>
            <div class="cta-row">
                <button class="btn-primary" onclick="goToValentinePage()">Personalize</button>
                <button class="btn-secondary">Buy as gift</button>
            </div>
            <div class="nfc-hint">
                <span class="nfc-icon">📱</span>
                <span data-translate="nfc-hint">Tap item to open gallery</span>
            </div>
        </div>
    `;

    // Add click handler for quick view
    card.addEventListener('click', function(e) {
        if (!e.target.closest('button')) {
            openQuickView(product.id);
        }
    });

    // Image loading
    const images = card.querySelectorAll('.product-image');
    
    // Load the actual images after a delay to show the placeholder
    setTimeout(() => {
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    }, 2000);
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });

        img.addEventListener('error', function() {
            // Keep the placeholder image if the real image fails to load
            this.classList.remove('loading');
        });
    });

    return card;
}

// Open quick view modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get translated content
    const title = getProductInfo(product, 'title');
    const subtitle = getProductInfo(product, 'subtitle');
    const message = getProductInfo(product, 'message');

    // Populate modal
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalProductTitle').textContent = title;
    document.getElementById('modalProductSubtitle').textContent = subtitle;
    document.getElementById('modalBasePrice').textContent = formatPrice(product.basePrice);
    document.getElementById('modalPersonalizationPrice').textContent = `• Personalization +${formatPrice(product.personalizationPrice)}`;
    document.getElementById('personalMessage').value = message;

    // Show modal
    modalOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';

    // Add to cart functionality
    const personalizeBtn = document.querySelector('.form-actions .btn-primary');
    personalizeBtn.onclick = function() {
        addToCart(productId);
        closeModal();
    };
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
}

// Add to cart
function addToCart(productId) {
    if (!selectedProducts.has(productId)) {
        selectedProducts.add(productId);
        cartCount++;
        cartIcon.textContent = cartCount;
        
        // Update sticky bar
        const filterSummary = document.querySelector('.filter-summary');
        filterSummary.textContent = `${selectedProducts.size} item${selectedProducts.size !== 1 ? 's' : ''} selected`;
        
        // Show success feedback
        showToast('Added to cart!');
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        background: #1a1a1a;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 500;
        z-index: 300;
        animation: slideDown 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// Add CSS animations for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for lazy loading
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

// Initialize lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Handle NFC tap simulation (for demo purposes)
function simulateNFCTap(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // In a real app, this would be triggered by NFC detection
        openQuickView(productId);
    }
}

// Language switching functions
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update modal title
    const modalTitle = document.querySelector('.modal-title');
    if (modalTitle && translations[lang] && translations[lang]['personalize-keepsake']) {
        modalTitle.textContent = translations[lang]['personalize-keepsake'];
    }
    
    // Update modal form label
    const formLabel = document.querySelector('.personalization-form label');
    if (formLabel && translations[lang] && translations[lang]['personal-message']) {
        formLabel.textContent = translations[lang]['personal-message'];
    }
    
    // Update modal buttons
    const personalizeBtn = document.querySelector('.btn-primary');
    const sendGiftBtn = document.querySelector('.btn-secondary');
    if (personalizeBtn && translations[lang] && translations[lang]['personalize-buy']) {
        personalizeBtn.textContent = translations[lang]['personalize-buy'];
    }
    if (sendGiftBtn && translations[lang] && translations[lang]['send-gift']) {
        sendGiftBtn.textContent = translations[lang]['send-gift'];
    }
    
    // Update checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn && translations[lang] && translations[lang]['checkout']) {
        checkoutBtn.textContent = translations[lang]['checkout'];
    }
    
    // Update NFC hint
    const nfcHint = document.querySelector('.nfc-hint');
    if (nfcHint && translations[lang] && translations[lang]['nfc-hint']) {
        nfcHint.textContent = translations[lang]['nfc-hint'];
    }
    
    // Update message preview
    const messagePreview = document.querySelector('.message-preview');
    if (messagePreview && translations[lang] && translations[lang]['message-preview']) {
        messagePreview.textContent = translations[lang]['message-preview'];
    }
    
    // Refresh product grid with new translations
    renderProducts();
}

// Add some demo functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switching
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // Simulate NFC taps for demo
    setTimeout(() => {
        console.log('Demo: Simulate NFC tap by calling simulateNFCTap(productId)');
    }, 1000);
});

// Function to redirect to Valentine page
function goToValentinePage() {
    // Get the personal message from the textarea
    const personalMessage = document.getElementById('personalMessage').value;
    
    // Store the message in localStorage to use in valentine page
    if (personalMessage.trim()) {
        localStorage.setItem('personalMessage', personalMessage);
    }
    
    // Close the modal
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('visible');
        document.body.style.overflow = '';
    }
    
    // Redirect to valentine page
    window.location.href = 'valentine.html';
}

