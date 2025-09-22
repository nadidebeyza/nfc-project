// Checkout Page JavaScript

// Translation data
const translations = {
    en: {
        'select-product': 'Select Product',
        'edit-content': 'Edit Content',
        'review-finalize': 'Review & Finalize',
        'payment': 'Payment',
        'order-summary': 'Order Summary',
        'nfc-technology': 'NFC Technology',
        'personalized-content': 'Personalized Content',
        'premium-quality': 'Premium Quality',
        'base-price': 'Base Price',
        'personalization': 'Personalization',
        'shipping': 'Shipping',
        'free': 'Free',
        'total': 'Total',
        'payment-details': 'Payment Details',
        'card-number': 'Card Number',
        'expiry-date': 'Expiry Date',
        'cvv': 'CVV',
        'cardholder-name': 'Cardholder Name',
        'email': 'Email Address',
        'phone': 'Phone Number',
        'shipping-address': 'Shipping Address',
        'first-name': 'First Name',
        'last-name': 'Last Name',
        'street-address': 'Street Address',
        'city': 'City',
        'state': 'State',
        'zip-code': 'ZIP Code',
        'country': 'Country',
        'united-states': 'United States',
        'canada': 'Canada',
        'united-kingdom': 'United Kingdom',
        'turkey': 'Turkey',
        'secure-payment': 'Secure Payment',
        'ssl-encrypted': 'SSL Encrypted',
        'money-back': 'Money Back Guarantee',
        'back-to-review': 'Back to Review',
        'place-order': 'Place Order',
        'order-note': 'By placing this order, you agree to our Terms of Service and Privacy Policy.',
        'product': 'Product',
        'design': 'Design'
    },
    tr: {
        'select-product': 'Ürün Seç',
        'edit-content': 'İçerik Düzenle',
        'review-finalize': 'İncele & Son Hal',
        'payment': 'Ödeme',
        'order-summary': 'Sipariş Özeti',
        'nfc-technology': 'NFC Teknolojisi',
        'personalized-content': 'Kişiselleştirilmiş İçerik',
        'premium-quality': 'Premium Kalite',
        'base-price': 'Temel Fiyat',
        'personalization': 'Kişiselleştirme',
        'shipping': 'Kargo',
        'free': 'Ücretsiz',
        'total': 'Toplam',
        'payment-details': 'Ödeme Detayları',
        'card-number': 'Kart Numarası',
        'expiry-date': 'Son Kullanma Tarihi',
        'cvv': 'CVV',
        'cardholder-name': 'Kart Sahibi Adı',
        'email': 'E-posta Adresi',
        'phone': 'Telefon Numarası',
        'shipping-address': 'Teslimat Adresi',
        'first-name': 'Ad',
        'last-name': 'Soyad',
        'street-address': 'Sokak Adresi',
        'city': 'Şehir',
        'state': 'İl',
        'zip-code': 'Posta Kodu',
        'country': 'Ülke',
        'united-states': 'Amerika Birleşik Devletleri',
        'canada': 'Kanada',
        'united-kingdom': 'Birleşik Krallık',
        'turkey': 'Türkiye',
        'secure-payment': 'Güvenli Ödeme',
        'ssl-encrypted': 'SSL Şifreli',
        'money-back': 'Para İade Garantisi',
        'back-to-review': 'İncelemeye Geri Dön',
        'place-order': 'Sipariş Ver',
        'order-note': 'Bu siparişi vererek Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz.',
        'product': 'Ürün',
        'design': 'Tasarım'
    }
};

let currentLanguage = 'en';

// Sample product data (in real app, this would come from localStorage or URL params)
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
    console.log('Checkout page loaded');
    
    // Load product data
    loadProductData();
    
    // Setup language switching
    setupLanguageSwitching();
    
    // Setup form validation
    setupFormValidation();
    
    // Setup action buttons
    setupActionButtons();
});

function loadProductData() {
    // In a real app, this would come from localStorage or URL parameters
    const orderProductImage = document.getElementById('orderProductImage');
    const orderDesignImage = document.getElementById('orderDesignImage');
    const orderProductTitle = document.getElementById('orderProductTitle');
    const orderProductSubtitle = document.getElementById('orderProductSubtitle');
    const orderBasePrice = document.getElementById('orderBasePrice');
    const breakdownBasePrice = document.getElementById('breakdownBasePrice');
    const breakdownPersonalizationPrice = document.getElementById('breakdownPersonalizationPrice');
    const orderTotal = document.getElementById('orderTotal');
    
    // Load product image
    if (orderProductImage) orderProductImage.src = 'https://nadidebeyza.github.io/nfc-project/products/valentine/product-image-1.png';
    if (orderProductImage) orderProductImage.alt = sampleProduct.title;
    
    // Load design image (in real app, this would be the personalized design from storyData)
    if (orderDesignImage) {
        // For demo, use a sample design image. In real app, this would come from storyData
        orderDesignImage.src = 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&crop=faces';
        orderDesignImage.alt = 'Personalized Design';
    }
    
    if (orderProductTitle) orderProductTitle.textContent = sampleProduct.title;
    if (orderProductSubtitle) orderProductSubtitle.textContent = sampleProduct.subtitle;
    if (orderBasePrice) orderBasePrice.textContent = `$${sampleProduct.basePrice.toFixed(2)}`;
    if (breakdownBasePrice) breakdownBasePrice.textContent = `$${sampleProduct.basePrice.toFixed(2)}`;
    if (breakdownPersonalizationPrice) breakdownPersonalizationPrice.textContent = `$${sampleProduct.personalizationPrice.toFixed(2)}`;
    
    const total = sampleProduct.basePrice + sampleProduct.personalizationPrice;
    if (orderTotal) orderTotal.textContent = `$${total.toFixed(2)}`;
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

function setupFormValidation() {
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Expiry date formatting
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // CVV formatting
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
    
    // ZIP code formatting
    const zipCodeInput = document.getElementById('zipCode');
    if (zipCodeInput) {
        zipCodeInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = `(${value}`;
                } else if (value.length <= 6) {
                    value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
                } else {
                    value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`;
                }
            }
            e.target.value = value;
        });
    }
}

function setupActionButtons() {
    const backToReviewBtn = document.getElementById('backToReviewBtn');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    if (backToReviewBtn) {
        backToReviewBtn.addEventListener('click', function() {
            // Navigate back to Valentine page (review page)
            window.location.href = 'valentine.html?fromPreview=1';
        });
    }
    
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function() {
            if (validateForm()) {
                processOrder();
            }
        });
    }
}

function validateForm() {
    const requiredFields = [
        'cardNumber', 'expiryDate', 'cvv', 'cardName', 'email', 'phone',
        'firstName', 'lastName', 'address', 'city', 'state', 'zipCode'
    ];
    
    let isValid = true;
    const errors = [];
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            isValid = false;
            errors.push(fieldId);
            field.style.borderColor = '#e74c3c';
        } else if (field) {
            field.style.borderColor = '#e9ecef';
        }
    });
    
    // Email validation
    const emailField = document.getElementById('email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#e74c3c';
            errors.push('email');
        }
    }
    
    // Card number validation (basic)
    const cardNumberField = document.getElementById('cardNumber');
    if (cardNumberField && cardNumberField.value) {
        const cardNumber = cardNumberField.value.replace(/\s/g, '');
        if (cardNumber.length < 13 || cardNumber.length > 19) {
            isValid = false;
            cardNumberField.style.borderColor = '#e74c3c';
            errors.push('cardNumber');
        }
    }
    
    if (!isValid) {
        showNotification('Please fill in all required fields correctly.', 'error');
    }
    
    return isValid;
}

function processOrder() {
    // Show loading state
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.textContent = 'Processing...';
        placeOrderBtn.disabled = true;
    }
    
    // Simulate order processing
    setTimeout(() => {
        showNotification('Order placed successfully! You will receive a confirmation email shortly.', 'success');
        
        // In a real app, redirect to order confirmation page
        setTimeout(() => {
            // For demo purposes, redirect to a success page or back to main page
            window.location.href = 'index.html';
        }, 2000);
    }, 2000);
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
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}
