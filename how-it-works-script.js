// How It Works Page JavaScript

// Translation data
const translations = {
    en: {
        'select-product': 'Select Product',
        'edit-content': 'Edit Content',
        'review-finalize': 'Review & Finalize',
        'payment': 'Payment',
        'your-selection': 'Your Selection',
        'nfc-technology': 'NFC Technology',
        'personalized-content': 'Personalized Content',
        'premium-quality': 'Premium Quality',
        'how-it-works': 'How It Works',
        'step-1-title': '1. Select Your Product',
        'step-1-desc': 'Choose from our collection of beautiful NFC keepsakes designed for special moments and relationships.',
        'step-2-title': '2. Edit Your Content',
        'step-2-desc': 'Personalize your keepsake with photos, stories, and memories that make it uniquely yours.',
        'step-3-title': '3. Review & Finalize',
        'step-3-desc': 'Preview your personalized keepsake and make any final adjustments before placing your order.',
        'step-4-title': '4. Secure Payment',
        'step-4-desc': 'Complete your purchase with our secure payment system and receive confirmation of your order.',
        'ready-to-start': 'Ready to Start?',
        'next-steps-desc': 'Your personalized keepsake is just a few steps away. Begin by creating your unique story and memories.',
        'start-personalization': 'Start Personalization',
        'view-products': 'View All Products'
    },
    tr: {
        'select-product': 'Ürün Seç',
        'edit-content': 'İçerik Düzenle',
        'review-finalize': 'İncele & Son Hal',
        'payment': 'Ödeme',
        'your-selection': 'Seçiminiz',
        'nfc-technology': 'NFC Teknolojisi',
        'personalized-content': 'Kişiselleştirilmiş İçerik',
        'premium-quality': 'Premium Kalite',
        'how-it-works': 'Nasıl Çalışır',
        'step-1-title': '1. Ürününüzü Seçin',
        'step-1-desc': 'Özel anlar ve ilişkiler için tasarlanmış güzel NFC hatıralarımız koleksiyonundan seçim yapın.',
        'step-2-title': '2. İçeriğinizi Düzenleyin',
        'step-2-desc': 'Hatıranızı benzersiz kılan fotoğraflar, hikayeler ve anılarla kişiselleştirin.',
        'step-3-title': '3. İnceleyin & Son Hal',
        'step-3-desc': 'Kişiselleştirilmiş hatıranızı önizleyin ve sipariş vermeden önce son ayarlamaları yapın.',
        'step-4-title': '4. Güvenli Ödeme',
        'step-4-desc': 'Güvenli ödeme sistemimizle satın alma işleminizi tamamlayın ve sipariş onayınızı alın.',
        'ready-to-start': 'Başlamaya Hazır mısınız?',
        'next-steps-desc': 'Kişiselleştirilmiş hatıranız sadece birkaç adım uzakta. Benzersiz hikayenizi ve anılarınızı oluşturarak başlayın.',
        'start-personalization': 'Kişiselleştirmeye Başla',
        'view-products': 'Tüm Ürünleri Görüntüle'
    }
};

let currentLanguage = 'en';

// Sample product data (in real app, this would come from URL params or localStorage)
const sampleProduct = {
    id: 'valentine-nfc',
    title: 'Valentine\'s Day NFC Keepsake',
    subtitle: 'Share your love story with NFC technology',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&crop=faces',
    basePrice: 29.99,
    personalizationPrice: 5.00,
    features: ['NFC Technology', 'Personalized Content', 'Premium Quality']
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('How It Works page loaded');
    
    // Load product data
    loadProductData();
    
    // Setup language switching
    setupLanguageSwitching();
    
    // Setup action buttons
    setupActionButtons();
});

function loadProductData() {
    // In a real app, this would come from URL parameters or localStorage
    // For now, we'll use sample data
    const productImage = document.getElementById('productImage');
    const productTitle = document.getElementById('productTitle');
    const productSubtitle = document.getElementById('productSubtitle');
    const basePrice = document.getElementById('basePrice');
    const personalizationPrice = document.getElementById('personalizationPrice');
    
    if (productImage) productImage.src = sampleProduct.image;
    if (productImage) productImage.alt = sampleProduct.title;
    if (productTitle) productTitle.textContent = sampleProduct.title;
    if (productSubtitle) productSubtitle.textContent = sampleProduct.subtitle;
    if (basePrice) basePrice.textContent = `$${sampleProduct.basePrice.toFixed(2)}`;
    if (personalizationPrice) personalizationPrice.textContent = `+$${sampleProduct.personalizationPrice.toFixed(2)} personalization`;
}

function setupLanguageSwitching() {
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function setupActionButtons() {
    const startPersonalizationBtn = document.getElementById('startPersonalizationBtn');
    const viewProductsBtn = document.getElementById('viewProductsBtn');
    
    if (startPersonalizationBtn) {
        startPersonalizationBtn.addEventListener('click', function() {
            // Navigate to cover page to start personalization
            window.location.href = 'cover.html';
        });
    }
    
    if (viewProductsBtn) {
        viewProductsBtn.addEventListener('click', function() {
            // Navigate back to main products page
            window.location.href = 'index.html';
        });
    }
}


function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#000000'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 400px;
        text-align: center;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}
