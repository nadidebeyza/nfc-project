// Translation data
const translations = {
    en: {
        shop: "Shop",
        all: "All",
        valentine: "Valentine",
        mother: "Mother",
        daughter: "For daughter",
        birthday: "Birthday",
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
        "nfc-hint": "Tap item to open gallery"
    },
    tr: {
        shop: "Mağaza",
        all: "Tümü",
        valentine: "Sevgililer",
        mother: "Anneler",
        daughter: "Kızlar için",
        birthday: "Doğum günü",
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
        "nfc-hint": "Galeriyi açmak için öğeye dokunun"
    }
};

// Current language
let currentLanguage = 'en';

// Sample product data
const products = [
    {
        id: 1,
        title: "Valentine's heart",
        subtitle: "5-photo portrait keepsake",
        basePrice: 24,
        personalizationPrice: 8,
        occasion: "valentine",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        message: "My dearest love, you are the light of my life and the reason my heart beats with joy every single day.",
        isNew: true,
        isLimited: false
    },
    {
        id: 2,
        title: "Mother's blessing",
        subtitle: "3-photo memory frame",
        basePrice: 19,
        personalizationPrice: 6,
        occasion: "mother",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        message: "To the most wonderful mother in the world, thank you for your endless love and support.",
        isNew: false,
        isLimited: true
    },
    {
        id: 3,
        title: "Daughter's treasure",
        subtitle: "Custom photo locket",
        basePrice: 32,
        personalizationPrice: 10,
        occasion: "daughter",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
        message: "My beautiful daughter, you are growing into an amazing woman and I'm so proud of you.",
        isNew: true,
        isLimited: false
    },
    {
        id: 4,
        title: "Birthday celebration",
        subtitle: "Photo memory box",
        basePrice: 28,
        personalizationPrice: 8,
        occasion: "birthday",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
        message: "Happy birthday! May this new year bring you endless joy and wonderful memories.",
        isNew: false,
        isLimited: false
    },
    {
        id: 5,
        title: "Love letter",
        subtitle: "Engraved wooden frame",
        basePrice: 22,
        personalizationPrice: 7,
        occasion: "valentine",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        message: "Write a short love note or personal message...",
        isNew: false,
        isLimited: true
    },
    {
        id: 6,
        title: "Family memories",
        subtitle: "Multi-photo keepsake",
        basePrice: 35,
        personalizationPrice: 12,
        occasion: "mother",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
        message: "To our amazing family, thank you for all the beautiful memories we've created together.",
        isNew: true,
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

    const occasionBadge = product.occasion.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    const isPlaceholder = product.message.includes('Write a short love note');
    const messagePreview = isPlaceholder ? product.message : product.message.split('\n').slice(0, 2).join(' ');

    card.innerHTML = `
        <div class="product-image-container">
            <img class="product-image loading" src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23fafafa'/><circle cx='200' cy='120' r='30' fill='none' stroke='%23ddd' stroke-width='2'/><path d='M170 150 L200 120 L230 150' fill='none' stroke='%23ddd' stroke-width='2'/><text x='200' y='200' font-family='serif' font-size='14' fill='%23aaa' text-anchor='middle'>Keepsake</text></svg>" data-src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="occasion-badge">${occasionBadge}</div>
        </div>
        <div class="product-content">
            <div class="product-title">${product.title.split(' ').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ')}</div>
            <div class="product-subtitle">${product.subtitle}</div>
            <div class="price-row">
                <span class="base-price">$${product.basePrice}</span>
                <span class="personalization-price">• Personalization +$${product.personalizationPrice}</span>
            </div>
            <div class="message-preview">${messagePreview}</div>
            <div class="cta-row">
                <button class="btn-primary" onclick="openQuickView(${product.id})">Personalize</button>
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
    const img = card.querySelector('.product-image');
    
    // Load the actual image after a delay to show the placeholder
    setTimeout(() => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    }, 2000);
    
    img.addEventListener('load', function() {
        this.classList.remove('loading');
    });

    img.addEventListener('error', function() {
        // Keep the placeholder image if the real image fails to load
        this.classList.remove('loading');
    });

    return card;
}

// Open quick view modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Populate modal
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductSubtitle').textContent = product.subtitle;
    document.getElementById('modalBasePrice').textContent = `$${product.basePrice}`;
    document.getElementById('modalPersonalizationPrice').textContent = `• Personalization +$${product.personalizationPrice}`;
    document.getElementById('personalMessage').value = product.message.includes('Write a short love note') ? '' : product.message;

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
