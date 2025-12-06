// ============================================
// STATE MANAGEMENT
// ============================================
let cart = [];
let currentQuantity = 1;
const PRODUCT_PRICE = 180000;
const SHIPPING_COST = 6000;
const WHATSAPP_NUMBER = '573001234567'; // Cambiar por el número real

// Product data
const product = {
    id: 1,
    name: 'Keratina French\'s Gold',
    size: '500ml',
    price: PRODUCT_PRICE,
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=800&fit=crop'
};

// ============================================
// PHASE NAVIGATION SYSTEM
// ============================================
function showPhase(phaseName) {
    // Hide all phases
    const phases = document.querySelectorAll('.phase');
    phases.forEach(phase => {
        phase.classList.remove('active');
    });
    
    // Show selected phase
    const targetPhase = document.getElementById(`phase-${phaseName}`);
    if (targetPhase) {
        targetPhase.classList.add('active');
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update cart display if going to cart
        if (phaseName === 'cart') {
            renderCart();
        }
        
        // Update checkout summary if going to checkout
        if (phaseName === 'checkout') {
            renderCheckoutSummary();
        }
    }
}

// ============================================
// QUANTITY CONTROLS
// ============================================
function changeQuantity(delta) {
    currentQuantity = Math.max(1, currentQuantity + delta);
    const quantityInput = document.getElementById('product-quantity');
    if (quantityInput) {
        quantityInput.value = currentQuantity;
    }
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart() {
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Reset quantity
    currentQuantity = 1;
    document.getElementById('product-quantity').value = 1;
    
    // Update UI
    updateCartBadge();
    showNotification('¡Producto agregado a la canasta!', 'success');
    
    // Optionally show cart
    setTimeout(() => {
        showPhase('cart');
    }, 1000);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCart();
    showNotification('Producto eliminado de la canasta', 'info');
}

function updateCartItemQuantity(index, delta) {
    cart[index].quantity = Math.max(1, cart[index].quantity + delta);
    if (cart[index].quantity === 0) {
        removeFromCart(index);
    } else {
        updateCartBadge();
        renderCart();
    }
}

function updateCartBadge() {
    const badge = document.getElementById('nav-cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartTotalWithShipping() {
    return getCartTotal() + SHIPPING_COST;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(amount);
}

// ============================================
// RENDER CART
// ============================================
function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p style="color: var(--color-text-light); font-size: 1.1rem;">Tu canasta está vacía</p>
                <button class="btn-continue-shopping" onclick="showPhase('product')" style="margin-top: 1.5rem;">
                    <i class="fas fa-arrow-left"></i>
                    <span>Ir a Comprar</span>
                </button>
            </div>
        `;
        subtotalEl.textContent = formatCurrency(0);
        totalEl.textContent = formatCurrency(SHIPPING_COST);
        return;
    }
    
    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.size} - ${formatCurrency(item.price)} c/u</div>
                </div>
                <div class="cart-item-controls">
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateCartItemQuantity(${index}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span style="min-width: 40px; text-align: center; font-weight: 600;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartItemQuantity(${index}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="cart-item-total">${formatCurrency(item.price * item.quantity)}</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    const total = getCartTotalWithShipping();
    
    subtotalEl.textContent = formatCurrency(subtotal);
    totalEl.textContent = formatCurrency(total);
}

// ============================================
// CHECKOUT FUNCTIONS
// ============================================
function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items-summary');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const totalEl = document.getElementById('checkout-total');
    
    if (cart.length === 0) {
        showNotification('Tu canasta está vacía. Agrega productos primero.', 'error');
        showPhase('product');
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="checkout-item-summary">
            <span>${item.quantity}x ${item.name} (${item.size})</span>
            <span>${formatCurrency(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    const total = getCartTotalWithShipping();
    
    subtotalEl.textContent = formatCurrency(subtotal);
    totalEl.textContent = formatCurrency(total);
}

function handleCheckout(event) {
    event.preventDefault();
    
    // Validate cart
    if (cart.length === 0) {
        showNotification('Tu canasta está vacía. Agrega productos primero.', 'error');
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('customer-name').value.trim(),
        phone: document.getElementById('customer-phone').value.trim(),
        address: document.getElementById('customer-address').value.trim(),
        notes: document.getElementById('customer-notes').value.trim()
    };
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.address) {
        showNotification('Por favor completa todos los campos requeridos.', 'error');
        return;
    }
    
    // Generate order number
    const orderNumber = `#FG-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    document.getElementById('order-number').textContent = orderNumber;
    
    // Store order data for WhatsApp
    window.orderData = {
        ...formData,
        orderNumber,
        items: cart.map(item => ({
            name: item.name,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        })),
        subtotal: getCartTotal(),
        shipping: SHIPPING_COST,
        total: getCartTotalWithShipping()
    };
    
    // Show confirmation
    showPhase('confirmation');
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================
function openWhatsApp() {
    if (!window.orderData) {
        showNotification('Error: No hay datos del pedido. Por favor, completa el formulario nuevamente.', 'error');
        showPhase('checkout');
        return;
    }
    
    const { name, phone, address, notes, orderNumber, items, subtotal, shipping, total } = window.orderData;
    
    // Build message
    let message = `¡Hola! Quiero confirmar mi pedido de French's Gold\n\n`;
    message += `📋 *Número de Pedido:* ${orderNumber}\n\n`;
    message += `👤 *Datos del Cliente:*\n`;
    message += `Nombre: ${name}\n`;
    message += `Teléfono: ${phone}\n`;
    message += `Dirección: ${address}\n`;
    if (notes) {
        message += `Notas: ${notes}\n`;
    }
    message += `\n🛍️ *Productos:*\n`;
    items.forEach(item => {
        message += `• ${item.quantity}x ${item.name} (${item.size}) - ${formatCurrency(item.total)}\n`;
    });
    message += `\n💰 *Resumen:*\n`;
    message += `Subtotal: ${formatCurrency(subtotal)}\n`;
    message += `Envío: ${formatCurrency(shipping)}\n`;
    message += `*TOTAL: ${formatCurrency(total)}*\n\n`;
    message += `Por favor, confírmame disponibilidad y forma de pago. ¡Gracias! 😊`;
    
    // Encode message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
}

// ============================================
// RESET AND GO HOME
// ============================================
function resetAndGoHome() {
    // Clear cart (optional - you might want to keep it)
    // cart = [];
    // updateCartBadge();
    
    // Clear form
    const form = document.getElementById('checkout-form');
    if (form) {
        form.reset();
    }
    
    // Clear order data
    window.orderData = null;
    
    // Reset quantity
    currentQuantity = 1;
    
    // Go to landing
    showPhase('landing');
}

// ============================================
// NOTIFICATIONS
// ============================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="fas ${icons[type] || icons.success}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#e91e63' : type === 'info' ? '#2196f3' : '#8bc34a'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Handle quantity input changes
    const quantityInput = document.getElementById('product-quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            const value = parseInt(this.value) || 1;
            currentQuantity = Math.max(1, value);
            this.value = currentQuantity;
        });
    }
    
    // Initialize cart badge
    updateCartBadge();
    
    // Handle navbar scroll
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Prevent form submission on Enter in quantity input
    if (quantityInput) {
        quantityInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    }
});

// ============================================
// SCROLL TO SECTION
// ============================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function validatePhone(phone) {
    // Basic phone validation (Colombian format)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateAddress(address) {
    return address.length >= 10; // Minimum address length
}

// Export functions for global access
window.showPhase = showPhase;
window.changeQuantity = changeQuantity;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.handleCheckout = handleCheckout;
window.openWhatsApp = openWhatsApp;
window.resetAndGoHome = resetAndGoHome;
window.scrollToSection = scrollToSection;

