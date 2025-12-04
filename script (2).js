// --- Employee Data Mockup (FEAT 8: Expert Connect Data) ---
const salesExperts = {
    Jars: { 
        name: "Mr.Manish ", 
        role: "Plastic Jars Specialist",
        phone: "9958655713", 
        whatsapp: "919958655713",
        city: "Mumbai"
    },
    Boxes: { 
        name: "Mr.Abhay Ray", 
        role: "Corrugated Boxes Expert",
        phone: "9871514017", 
        whatsapp: "919871514017",
        city: "Bangalore"
    },
    Sealing: { 
        name: "Mr.Manish", 
        role: "Logistics Material Consultant",
        phone: "9958655713",
        whatsapp: "919958655713",
        city: "Chennai"
    },
    Custom: { 
        name: "Mr.Abhay Ray ", 
        role: "Bulk & Custom Order Manager",
        phone: "9871514017", 
        whatsapp: "919871514017",
        city: "Delhi"
    }
};

// --- Catalogue Product Data (FEAT 55: Catalogue Data) ---
// Note: URLs are mock images (imgur) for demonstration purposes.
const catalogueProducts = {
    // FEAT 55.1: Small Jars (25 ML to 150 ML)
    'small-jars': [
        { name: "25 ML Jar (Cosmo)", img: "https://i.imgur.com/k9b6o2R.png", desc: "Small jar suitable for cosmetics, powders, and Pujan material. Cap Size: 30mm.", specs: "Capacity: 25ml, Cap Size: 30mm, Use: Powders, Cosmetics", stock: 'high', price: 3.50 },
        { name: "60 ML Jar (Honey/Spice)", img: "https://i.imgur.com/p0B7fV4.png", desc: "Ideal for cosmetics, honey, spices, Pujan material, and slime. Cap Size: 40mm.", specs: "Capacity: 60ml, Cap Size: 40mm, Use: Honey, Spices, Slime", stock: 'high', price: 4.90 },
        { name: "100 ML Hira/Om", img: "https://i.imgur.com/fVzL9wE.png", desc: "Multi-purpose jar for Ghee, Pickles, Spices, and Cosmetics. Cap Size: 53mm.", specs: "Capacity: 100ml, Cap Size: 53mm, Use: Ghee, Pickles, Spices", stock: 'low', price: 6.10 },
        { name: "150 ML Jar (Pujan)", img: "https://i.imgur.com/eB3jVwK.png", desc: "Medium small size for cosmetics, honey, and Pujan material. Cap Size: 58mm.", specs: "Capacity: 150ml, Cap Size: 58mm, Use: Cosmetics, Honey, Pujan", stock: 'high', price: 7.50 },
        { name: "30 ML (Powder)", img: "https://i.imgur.com/j6sHqF8.png", desc: "Used in Cosmetics, Powders, Spices, Pujan Material etc. Cap Size: 38mm.", specs: "Capacity: 30ml, Cap Size: 38mm, Use: Powders, Spices", stock: 'high', price: 4.10 },
        { name: "40 ML (Slime/Kimaam)", img: "https://i.imgur.com/y8zH0QG.png", desc: "Used in Slime, Pujan Material, Kimaam etc. Cap Size: 45mm.", specs: "Capacity: 40ml, Cap Size: 45mm, Use: Slime, Kimaam", stock: 'low', price: 4.50 },
        { name: "75 ML (Cosmetic)", img: "https://i.imgur.com/g9vL5U3.png", desc: "Used in Cosmetics, Honey, Pujan Material etc. Cap Size: 50mm.", specs: "Capacity: 75ml, Cap Size: 50mm, Use: Cosmetics, Honey", stock: 'high', price: 5.80 },
    ],
    // FEAT 55.2: Medium Jars (200 ML to 650 ML)
    'medium-jars': [
        { name: "250 ML Dumbell", img: "https://i.imgur.com/k6lP0Uq.png", desc: "Dumbell shape jar for pickles, spices, dry fruits, and kitchen storage. Cap Size: 63mm.", specs: "Capacity: 250ml, Cap Size: 63mm, Use: Kitchen Storage, Pickles", stock: 'low', price: 8.80 },
        { name: "400 ML Bournvita", img: "https://i.imgur.com/v8tT9f2.png", desc: "Bournvita shape, often used for protein powder, honey, and mukhwas. Cap Size: 70mm.", specs: "Capacity: 400ml, Cap Size: 70mm, Use: Protein Powder, Honey", stock: 'high', price: 11.20 },
        { name: "500 ML New Square", img: "https://i.imgur.com/Hl5uU6Y.png", desc: "Square jar for easy stacking, good for pickles and dry fruits. Cap Size: 83mm.", specs: "Capacity: 500ml, Cap Size: 83mm, Use: Pickles, Dry Fruits", stock: 'high', price: 13.50 },
        { name: "650 ML Bournvita", img: "https://i.imgur.com/3qC5pM0.png", desc: "Large size Bournvita design, specialized for protein powder and supplements. Cap Size: 89mm.", specs: "Capacity: 650ml, Cap Size: 89mm, Use: Protein Powder", stock: 'low', price: 16.90 },
        { name: "200 ML AM/Prabhat", img: "https://i.imgur.com/7wL5sVd.png", desc: "Used in Cosmetics, Pujan Material, Ghee, Pickles etc. Cap Size: 63mm.", specs: "Capacity: 200ml, Cap Size: 63mm, Use: Ghee, Pickles", stock: 'high', price: 7.90 },
        { name: "325 ML Round", img: "https://i.imgur.com/5uA8bM9.png", desc: "Used for Peanut Butter, Kitchen Storage etc. Cap Size: 77mm.", specs: "Capacity: 325ml, Cap Size: 77mm, Use: Peanut Butter", stock: 'high', price: 10.50 },
        { name: "500 ML Oval", img: "https://i.imgur.com/j6sHqF8.png", desc: "Used for Dry Fruits, Fancy Storage etc. Cap Size: 58mm.", specs: "Capacity: 500ml, Cap Size: 58mm, Use: Dry Fruits, Fancy", stock: 'low', price: 12.80 },
    ],
    // FEAT 55.3: Large Jars (1 LITER to 6 LITER)
    'large-jars': [
        { name: "1 LITER New Round", img: "https://i.imgur.com/d8pX3sV.png", desc: "New round design ideal for Ghee, major kitchen storage, and bulk items. Cap Size: 89mm.", specs: "Capacity: 1000ml, Cap Size: 89mm, Use: Ghee, Kitchen Storage", stock: 'high', price: 22.00 },
        { name: "2 LITER Dumbell", img: "https://i.imgur.com/s0B7fV4.png", desc: "Large volume Dumbell design for bulk pickles, spices, dry fruits, and food grains. Cap Size: 100mm.", specs: "Capacity: 2000ml, Cap Size: 100mm, Use: Pickles, Food Grains", stock: 'low', price: 35.00 },
        { name: "5 LITER Square", img: "https://i.imgur.com/gA9mX5a.png", desc: "Large square container for bulk Ghee, Food Grains, and industrial storage. Cap Size: 120mm.", specs: "Capacity: 5000ml, Cap Size: 120mm, Use: Bulk Ghee, Food Grains", stock: 'high', price: 85.00 },
        { name: "6 LITER Square", img: "https://i.imgur.com/h9vL0wE.png", desc: "Largest square container for maximum volume storage. Cap Size: 120mm.", specs: "Capacity: 6000ml, Cap Size: 120mm, Use: Maximum Bulk Storage", stock: 'low', price: 99.00 },
        { name: "3 LITER Round", img: "https://i.imgur.com/l5uR0vK.png", desc: "Round Bottom Design for large volume Ghee and Pickles. Cap Size: 100mm.", specs: "Capacity: 3000ml, Cap Size: 100mm, Use: Ghee, Pickles, Dry Fruits", stock: 'high', price: 48.00 },
    ]
};
let quoteItems = []; // FEAT 1: Quote Cart Data

// --- ADVANCED FEATURE 101: AI Chat Support Logic ---
const WHATSAPP_NUMBERS = ["919958655713", "919871514017"];

function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
        document.getElementById('chatInput').focus();
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    }
}

function appendMessage(sender, text) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    const isBot = sender === 'bot';
    
    messageDiv.className = `flex ${isBot ? 'justify-start' : 'justify-end'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = `${isBot ? 'bg-gray-200' : 'bg-blue-500 text-white'} p-3 rounded-lg max-w-[80%] text-sm`;
    
    if (typeof text === 'object' && text.html) {
        contentDiv.innerHTML = text.html;
    } else {
        contentDiv.textContent = text;
    }
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;

    appendMessage('user', message);
    chatInput.value = '';

    setTimeout(() => {
        simulateAIResponse(message);
    }, 800);
}

function simulateAIResponse(userMessage) {
    let response = "I'm sorry, I couldn't find an exact match for that. Please try asking about product names (like '1 LITER New Round'), tracking (e.g., 'Track SD-456'), or for human support.";
    let responseHindi = "क्षमा करें, मुझे इसका सटीक उत्तर नहीं मिला। कृपया उत्पाद का नाम (जैसे '1 LITER New Round'), ट्रैकिंग (जैसे 'Track SD-456'), या मानव सहायता के लिए पूछें।";
    let lowerMessage = userMessage.toLowerCase();
    let productMatch = null;

    // 1. WhatsApp / Human Connect Logic (Randomly chooses one of two numbers)
    if (lowerMessage.includes('customer care') || lowerMessage.includes('whatsapp') || lowerMessage.includes('human') || lowerMessage.includes('insaan') || lowerMessage.includes('expert')) {
        const randomIndex = Math.floor(Math.random() * WHATSAPP_NUMBERS.length);
        const selectedNumber = WHATSAPP_NUMBERS[randomIndex];
        const formattedNumber = selectedNumber.substring(2);

        response = {
            html: `
                <p>Sure, I can connect you to a human expert. Please click the button below to start a chat directly with our team on WhatsApp:</p>
                <div class="mt-2 text-center">
                    <a href="https://wa.me/${selectedNumber}?text=Hello,%20I%20need%20assistance%20with%20a%20bulk%20packaging%20query." target="_blank" class="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 inline-flex items-center space-x-2 justify-center">
                        <i class="fab fa-whatsapp"></i> Chat with Expert (${formattedNumber})
                    </a>
                    <p class="text-xs text-gray-700 mt-1">**Only chat is supported. No direct calls.** (केवल चैट समर्थित है।)</p>
                </div>
            `
        };
    }
    // 2. Product Detail Retrieval Logic
    else {
        // Search through all products for a match
        for (const category in catalogueProducts) {
            productMatch = catalogueProducts[category].find(p => lowerMessage.includes(p.name.toLowerCase().split('(')[0].trim()) || lowerMessage.includes(p.desc.toLowerCase().split('.')[0].trim()));
            if (productMatch) break;
        }

        if (productMatch) {
            response = `
                **Product:** ${productMatch.name}
                **Description:** ${productMatch.desc}
                **Specs:** ${productMatch.specs}
                **Stock:** ${productMatch.stock === 'high' ? 'In Stock ✅' : (productMatch.stock === 'low' ? 'Low Stock ⏳' : 'Out of Stock ❌')}
                **Approx Price:** ₹${productMatch.price.toFixed(2)}/unit.
                To get a bulk quote, please ask for 'Bulk Price' with your required quantity.
            `;
            responseHindi = `
                **उत्पाद:** ${productMatch.name}
                **विवरण:** ${productMatch.desc}
                **विशेषताएँ:** ${productMatch.specs}
                **स्टॉक:** ${productMatch.stock === 'high' ? 'स्टॉक में है ✅' : (productMatch.stock === 'low' ? 'कम स्टॉक है ⏳' : 'स्टॉक में नहीं है ❌')}
                **अनुमानित मूल्य:** ₹${productMatch.price.toFixed(2)} प्रति यूनिट।
                थोक मूल्य के लिए, कृपया आवश्यक मात्रा के साथ 'थोक मूल्य' पूछें।
            `;
        }
        // 3. General Commands (Bilingual)
        else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste')) {
            response = "Hello! I am the Safe Door AI Assistant. I can help you with bulk pricing, order tracking, product details, or connect you to a human. (नमस्ते! मैं Safe Door AI असिस्टेंट हूँ।)";
        } else if (lowerMessage.includes('track')) {
            const orderIdMatch = userMessage.match(/sd-\d{3}/i);
            if (orderIdMatch) {
                // FIXED: Directing user to main tracking section
                response = `I am checking the status for Order ID: ${orderIdMatch[0].toUpperCase()}. For the live visual timeline, please scroll up to the 'Track Order' section and enter the ID there. (ऑर्डर ID के लिए स्थिति जाँच रहा हूँ।)`;
            } else {
                response = "To track your order, please provide the Order ID in the format: SD-XXX. (ट्रैक करने के लिए ID SD-XXX फ़ॉर्मेट में दें।)";
            }
        } else if (lowerMessage.includes('price') || lowerMessage.includes('bulk') || lowerMessage.includes('cost') || lowerMessage.includes('daam')) {
            response = "For accurate bulk pricing, please tell me the exact product name (e.g., '1 LITER New Round') and the required quantity (min 500 units). (थोक मूल्य के लिए, कृपया उत्पाद का नाम और आवश्यक मात्रा बताएं।)";
        }
        // 4. Fallback (Bilingual)
        else if (userMessage.match(/[\u0900-\u097F]+/)) { // Check if message contains Hindi characters
            response = responseHindi; // Use Hindi fallback
        }
    }
    
    // Check if the response is a complex object (like the WhatsApp button)
    if (typeof response === 'object' && response.html) {
        appendMessage('bot', response);
    } else if (productMatch) {
        // If product matched, show bilingual response
        appendMessage('bot', `${response}\n\n---\n\n${responseHindi}`);
    } else {
        // General or English response
        appendMessage('bot', response);
    }
}

// FEAT 102: Simulated Dynamic Inventory API Call (Used internally by AI response)
function checkSimulatedInventory(query) {
    for (const category in catalogueProducts) {
        const foundProduct = catalogueProducts[category].find(p => query.includes(p.name.toLowerCase().split('(')[0].trim()));
        if (foundProduct) {
            if (foundProduct.stock === 'high') {
                return `✅ The ${foundProduct.name} is currently **In Stock**! Price is approx ₹${foundProduct.price.toFixed(2)}/unit. How many units do you need?`;
            } else if (foundProduct.stock === 'low') {
                return `⏳ The ${foundProduct.name} is in **Low Stock**. Price is approx ₹${foundProduct.price.toFixed(2)}/unit. Order soon!`;
            }
        }
    }
    return null;
}

// --- UNIQUE FEATURE 1: Price Fluctuation Alert (FEAT 3) ---
function displayPriceAlert() {
    const banner = document.getElementById('priceAlertBanner');
    const trends = [
        { icon: 'fas fa-arrow-alt-circle-up text-red-600', text: 'Market Price Alert: Plastic Raw Material prices have RISEN 2.5% this week. Order now to lock current rates!', color: 'bg-red-100 text-red-800' },
        { icon: 'fas fa-arrow-alt-circle-down text-green-600', text: 'Market Price Update: Plastic Raw Material prices are DOWN 1.1%. Great time to place bulk orders!', color: 'bg-green-100 text-green-800' },
        { icon: 'fas fa-arrow-right-arrow-left text-blue-600', text: 'Price Stable: Current rates are holding steady. Get your quote today!', color: 'bg-blue-100 text-blue-800' }
    ];
    
    const trend = trends[Math.floor(Math.random() * trends.length)];
    
    banner.className = `text-center font-semibold text-lg p-3 rounded-lg flex items-center justify-center space-x-3 ${trend.color}`;
    banner.innerHTML = `<i class="${trend.icon}"></i> <span>${trend.text}</span>`;
}

// --- Global Functions ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function dismissAlertBar() {
    const alertBar = document.getElementById('alertBar');
    const mainNav = document.getElementById('mainNav');
    const homeSection = document.getElementById('home');
    
    alertBar.classList.remove('alert-slide-down');
    alertBar.classList.add('alert-slide-up');
    
    mainNav.style.top = '0';
    homeSection.style.paddingTop = '90px'; 
}

function openCatalogue() {
    // FEAT 53.1: Catalogue Link opening the provided PDF.
    window.open('jar-catalogue.pdf', '_blank');
}
// FEAT 1: Add Item to Floating Quote Cart
function addToQuoteCart(productName, price) {
    quoteItems.push({ name: productName, price: price });
    updateQuoteCartDisplay();
    // Replaced alert with a more subtle notification
    const cartButton = document.getElementById('quoteCart');
    cartButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartButton.style.transform = 'scale(1.05)';
    }, 200);
}

// FEAT 1: Update Floating Quote Cart Display
function updateQuoteCartDisplay() {
    const cartElement = document.getElementById('quoteCart');
    const itemCountElement = document.getElementById('quoteItemCount');
    
    if (quoteItems.length > 0) {
        const totalCost = quoteItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        itemCountElement.textContent = `${quoteItems.length} Items (₹${totalCost})`;
        cartElement.classList.remove('hidden');
    } else {
        cartElement.classList.add('hidden');
        itemCountElement.textContent = '0 Items';
    }
}
// FEAT 56: Dynamic Product Filter (New Clean View)
function showProducts(view) {
    const indexSection = document.getElementById('products');
    const productViewSection = document.getElementById('productView');
    const gridContainer = document.getElementById('productDetailsGrid');
    const titleElement = document.getElementById('productViewTitle');

    if (view === 'index') {
        productViewSection.classList.add('hidden');
        indexSection.classList.remove('hidden');
        return;
    }

    // Show specific category
    const category = catalogueProducts[view];
    if (!category) return; 

    gridContainer.innerHTML = ''; // Clear previous products
    titleElement.textContent = view.replace('-', ' ').toUpperCase();

    category.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-xl p-6 shadow-md relative';
        
        // Stock Indicator Logic (FEAT 5)
        const stockClass = product.stock === 'high' ? 'high-stock' : (product.stock === 'low' ? 'low-stock' : 'out-of-stock');
        const stockText = product.stock === 'high' ? 'In Stock' : (product.stock === 'low' ? 'Low Stock' : 'Out of Stock');
        const buttonDisabled = product.stock === 'out' ? 'disabled' : '';
        const buttonClass = product.stock === 'out' ? 'bg-red-400 cursor-not-allowed' : 'gradient-bg hover:shadow-lg';

        productCard.innerHTML = `
            <div class="absolute top-4 right-4 stock-indicator ${stockClass}">${stockText}</div>
            <img src="${product.img}" alt="${product.name}" class="w-32 h-32 mx-auto mb-4 object-contain">
            <h3 class="text-lg font-semibold mb-1 text-center">${product.name}</h3>
            <p class="text-xs text-gray-500 mb-3 text-center">${product.desc.substring(0, 50)}...</p>
            <p class="text-xl font-bold text-center text-purple-600 mb-4">₹${product.price.toFixed(2)}</p>
            
            <div class="space-y-2">
                <button onclick="openProductModal('${product.name}', '${product.desc}', '${product.specs}', '${product.stock}', ${product.price})" 
                        class="w-full border border-purple-400 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition">
                    Quick View
                </button>
                <button class="w-full text-white py-2 rounded-lg transition ${buttonClass}" 
                        onclick="event.stopPropagation(); addToQuoteCart('${product.name}', ${product.price});" ${buttonDisabled}>
                    Add to Quote <i class="fas fa-plus ml-1"></i>
                </button>
            </div>
        `;
        gridContainer.appendChild(productCard);
    });

    indexSection.classList.add('hidden');
    productViewSection.classList.remove('hidden');
}

// FEAT 7: Quick Quote Calculator Logic
function calculateQuote() {
    const productSelect = document.getElementById('calcProduct');
    const quantityInput = document.getElementById('calcQuantity');
    const resultDiv = document.getElementById('quoteResult');
    const resultValue = document.getElementById('quoteValue');

    const pricePerUnit = parseFloat(productSelect.value);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity < 500) {
        alert("Please enter a quantity of 500 units or more.");
        resultDiv.classList.add('hidden');
        return;
    }

    let estimatedTotal = pricePerUnit * quantity;

    if (estimatedTotal > 50000) {
        estimatedTotal *= 0.90; // 10% discount
    }

    resultValue.textContent = `₹${estimatedTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    resultDiv.classList.remove('hidden');
}

// FEAT 19: Product Quick View Modal Logic
function openProductModal(title, description, specs, stockStatus, price) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    
    const stockDiv = document.getElementById('modalStockStatus');
    stockDiv.className = 'font-bold text-lg mb-4';

    if (stockStatus === 'high') {
        stockDiv.classList.add('text-green-600');
        stockDiv.textContent = `✅ In Stock (Approx ₹${price}/unit)`;
    } else if (stockStatus === 'low') {
        stockDiv.classList.add('text-yellow-600');
        stockDiv.textContent = `⏳ Low Stock (Approx ₹${price}/unit - Order Soon!)`;
    } else {
        stockDiv.classList.add('text-red-600');
        stockDiv.textContent = '❌ Out of Stock (Contact for ETA)';
    }

    const specsList = document.getElementById('modalSpecs');
    specsList.innerHTML = ''; 
    specs.split(', ').forEach(spec => {
        const li = document.createElement('li');
        li.className = 'flex items-center text-gray-700';
        li.innerHTML = `<i class="fas fa-check-circle text-purple-500 mr-2"></i><span>${spec}</span>`;
        specsList.appendChild(li);
    });
    
    // NOTE: Removed WhatsApp link and added AI Chat logic in HTML

    document.getElementById('productModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = ''; 
}
// --- Order Tracking Logic (FEAT 6: Live Tracking Simulator) ---
function trackOrder() {
    const orderId = document.getElementById('orderIdInput').value.toUpperCase().trim();
    const resultDiv = document.getElementById('trackingResult');
    const timelineDiv = document.getElementById('trackingTimeline');
    const progressFill = document.getElementById('progressFill');
    const trackingSteps = document.querySelectorAll('.tracking-step');
    const trackingTitle = document.getElementById('trackingTitle');

    resultDiv.classList.add('hidden');
    timelineDiv.innerHTML = ''; 

    let currentStep;
    let statusText;
    let timelineEntries = [];
    const today = new Date();
    // Hash now uses current minute for more dynamic tracking
    const mockHash = orderId.length > 3 ? (parseInt(orderId.slice(-3)) + today.getMinutes()) % 10 : 0; 

    if (!orderId.startsWith('SD-') || orderId.length < 5) {
        statusText = "Error: Invalid Order ID format.";
        timelineEntries.push({ icon: 'fas fa-times-circle text-red-500', text: 'Please use the correct format (e.g., SD-456).', time: '' });
        currentStep = 0;
    } else if (mockHash >= 7) {
        currentStep = 4;
        statusText = `✅ Delivered Successfully! (Order ${orderId})`;
        timelineEntries.push({ icon: 'fas fa-home text-green-600', text: `Package delivered to customer.`, time: today.toLocaleTimeString() });
        today.setDate(today.getDate() - 1);
        timelineEntries.push({ icon: 'fas fa-map-marker-alt text-blue-600', text: 'Out for final local delivery.', time: today.toLocaleTimeString() });
        today.setDate(today.getDate() - 2);
        timelineEntries.push({ icon: 'fas fa-truck-loading text-blue-600', text: 'Arrived at destination city hub (Delhi/Mumbai).', time: today.toLocaleTimeString() });
    } else if (mockHash >= 4) {
        currentStep = 3;
        statusText = `🚀 In Transit (Shipped) - Order ${orderId}`;
        today.setDate(today.getDate() - 1);
        timelineEntries.push({ icon: 'fas fa-shipping-fast text-blue-600', text: 'Shipped from warehouse. Tracking number assigned.', time: today.toLocaleTimeString() });
        today.setDate(today.getDate() - 1);
        timelineEntries.push({ icon: 'fas fa-boxes text-yellow-600', text: 'Packaging completed, awaiting carrier pickup.', time: today.toLocaleTimeString() });
    } else {
        currentStep = 2;
        statusText = `⏳ Processing Order - Order ${orderId}`;
        today.setDate(today.getDate() - 0);
        timelineEntries.push({ icon: 'fas fa-boxes text-yellow-600', text: 'Undergoing Quality Control (QC) Check.', time: today.toLocaleTimeString() });
        today.setDate(today.getDate() - 1);
        timelineEntries.push({ icon: 'fas fa-clipboard-check text-purple-600', text: 'Order confirmed and materials allocated.', time: today.toLocaleTimeString() });
    }

    // Update Visual Progress Bar
    const progressWidths = [0, 16.6, 50, 83.3, 100]; 
    progressFill.style.width = `${progressWidths[currentStep]}%`;

    // Highlight step icons and text
    trackingSteps.forEach((step, index) => {
        const stepIcon = step.querySelector('i');
        const stepText = step.querySelector('p');
        const stepNumber = index + 1;

        stepIcon.classList.remove('text-purple-600', 'text-green-600', 'text-purple-300', 'border-purple-600', 'border-purple-300');
        stepText.classList.remove('text-gray-600', 'font-bold');

        if (stepNumber <= currentStep) {
            stepIcon.classList.add('text-green-600', 'border-green-600');
            stepText.classList.add('text-gray-900', 'font-bold');
        } else {
            stepIcon.classList.add('text-purple-300', 'border-purple-300');
            stepText.classList.add('text-gray-400');
        }
    });

    // Populate Timeline Details
    timelineEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'relative';
        entryDiv.innerHTML = `
            <div class="absolute w-3 h-3 bg-white rounded-full mt-1 -left-[18.5px] border-2 ${entry.icon.includes('green') ? 'border-green-600' : 'border-purple-600'}"></div>
            <p class="text-sm font-semibold flex items-center space-x-2">
                <i class="${entry.icon}"></i> <span>${entry.text}</span>
            </p>
            ${entry.time ? `<p class="text-xs text-gray-500">${new Date().toLocaleDateString()} at ${entry.time}</p>` : ''}
        `;
        timelineDiv.appendChild(entryDiv);
    });
    
    trackingTitle.textContent = statusText;
    resultDiv.classList.remove('hidden');
}


// --- UNIQUE FEATURE 2: Sample Request Wizard Logic (UPDATED for 9871514017) ---
function submitSampleRequest() {
    const sampleName = document.getElementById('sampleName').value;
    const samplePincode = document.getElementById('samplePincode').value;
    const sampleProducts = document.getElementById('sampleProducts').value;

    if (!sampleName || !samplePincode || !sampleProducts) {
        alert("Please fill in all details for the sample request.");
        return;
    }
    
    const whatsappMessage = encodeURIComponent(
        `SAMPLE REQUEST:
        \n- Name/Company: ${sampleName}
        \n- Pincode: ${samplePincode}
        \n- Items Requested: ${sampleProducts}
        \n- Confirmation: I am ready to pay the ₹499 sample fee via UPI/Bank transfer.
        \n.`
    );
    
    // Redirect to WhatsApp number 9871514017 for payment confirmation
    const whatsappURL = `https://wa.me/+91 98715 14017?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    alert("Redirecting to WhatsApp (9871514017) for ₹499 payment confirmation. Please send the message and pay the sample fee.");
    document.getElementById('sampleForm').reset();
}


// --- Expert Connect Logic (FEAT 8) ---
function connectExpert() {
    const productKey = document.getElementById('expertProduct').value;
    const resultDiv = document.getElementById('expertConnectResult');
    
    const expert = salesExperts[productKey.replace(/\s/g, '').replace('Plastic', '').replace('Packaging', '').replace('Materials', '').replace('/', '')]; 
    
    if (expert) {
        const whatsappMessage = encodeURIComponent(`Hello ${expert.name}, I am interested in ${expert.role} and need to place a bulk order. Please connect with me.`);
        
        resultDiv.innerHTML = `
            <p class="font-bold text-lg mb-2">👋 Expert Found: ${expert.name}</p>
            <p class="text-sm text-gray-700">Role: ${expert.role} | WhatsApp: +91 ${expert.whatsapp.substring(2)}</p>
            <div class="mt-3 flex flex-col space-y-2">
                <a href="https://wa.me/${expert.whatsapp}?text=${whatsappMessage}" target="_blank" class="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 inline-flex items-center space-x-2 justify-center">
                    <i class="fab fa-whatsapp"></i> <span>Start WhatsApp Chat Now</span>
                </a>
                <p class="text-xs text-gray-500 mt-2 text-center">No direct calling. Your expert will respond quickly via WhatsApp.</p>
            </div>
        `;
        resultDiv.classList.remove('hidden');
    } else {
        resultDiv.innerHTML = `<p class="text-red-500">Sorry, expert not found. Please use the general contact form or AI chat.</p>`;
        resultDiv.classList.remove('hidden');
    }
}
// FEAT 9: Review Submission Logic
let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    const stars = document.getElementById('ratingStars').children;

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars[i].classList.remove('far');
            stars[i].classList.add('fas');
        } else {
            stars[i].classList.remove('fas');
            stars[i].classList.add('far');
        }
    }
    document.getElementById('reviewRating').value = rating;
}

function submitReview() {
    if (currentRating === 0) {
        alert("Please select a star rating before submitting.");
        return;
    }
    
    const reviewName = document.getElementById('reviewName').value;
    if (!reviewName) {
        alert("Please enter your name.");
        return;
    }

    const reviewData = {
        name: reviewName,
        product: document.getElementById('reviewProduct').value,
        rating: currentRating,
        text: document.getElementById('reviewText').value,
        timestamp: new Date().toLocaleDateString('en-IN')
    };

    console.log("--- New Review Submitted (Mock Backend Data) ---");
    console.log(JSON.stringify(reviewData, null, 2));

    const reviewCard = document.createElement('div');
    reviewCard.className = 'flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-md slide-in border-t-4 border-green-500 snap-center';
    reviewCard.innerHTML = `
        <div class="flex items-center text-yellow-500 mb-3">
            ${'<i class="fas fa-star"></i>'.repeat(reviewData.rating)}
            ${'<i class="far fa-star"></i>'.repeat(5 - reviewData.rating)}
            <span class="ml-3 text-gray-700 font-semibold text-sm">${reviewData.rating}.0 | ${reviewData.product} (New!)</span>
        </div>
        <p class="text-gray-700 italic mb-4">"${reviewData.text}"</p>
        <div class="flex items-center">
            <img src="https://picsum.photos/seed/newreview-${Math.random()}/40/40" alt="New Reviewer" class="w-10 h-10 rounded-full mr-3">
            <div>
                <p class="font-semibold text-green-600">${reviewData.name}</p>
                <p class="text-xs text-gray-500">Submitted on ${reviewData.timestamp}</p>
            </div>
        </div>
    `;

    document.getElementById('reviewCardsContainer').prepend(reviewCard); 
    
    alert('Review Submitted Successfully! (Simulated). Thank you for your feedback!');
    document.getElementById('reviewForm').reset();
    setRating(0);
}


// FEAT 11: Pincode Check Logic
function checkDeliveryArea() {
    const pincode = prompt("Please enter your 6-digit Pincode to check delivery availability:");

    if (pincode && /^\d{6}$/.test(pincode)) {
        // FEAT 104: Enhanced Logistics Check (Simulated)
        const checkResult = mockLogisticsCheck(pincode);
        alert(checkResult);
    } else if (pincode !== null) {
        alert("❌ Please enter a valid 6-digit Pincode.");
    }
}

// FEAT 104: Enhanced Logistics Check (Simulated)
function mockLogisticsCheck(pincode) {
    const firstTwo = pincode.substring(0, 2);
    const lastDigit = parseInt(pincode.slice(-1));

    if (['11', '40', '70', '56'].includes(firstTwo)) {
        return `✅ Pincode ${pincode} is a **Major Hub**! Delivery expected within 2-5 business days.`;
    } else if (lastDigit % 3 === 0) {
        return `⚠️ Pincode ${pincode} is in a **Tier 2/3 Zone**. Delivery time is 5-9 business days. Contact us to confirm COD availability.`;
    } else {
         return `📦 Pincode ${pincode} is covered under our extended network. Expect 4-7 business days for delivery.`;
    }
}

// FEAT 14: Contact Form Submission & Mock Backend Logging
function handleSubmit(event) {
    event.preventDefault();

    const phoneInput = document.getElementById('contactPhone').value;
    if (!validateIndianPhoneNumber(phoneInput)) {
        alert("❌ Please enter a valid 10-digit Indian mobile number.");
        return;
    }
    
    const formData = {
        name: document.getElementById('contactName').value,
        company: document.getElementById('contactCompany').value,
        email: document.getElementById('contactEmail').value,
        phone: phoneInput,
        productInterest: document.getElementById('contactProduct').value,
        message: document.getElementById('contactMessage').value,
        timestamp: new Date().toISOString()
    };

    console.log("--- New Inquiry Submitted (Mock Backend Data) ---");
    console.log(JSON.stringify(formData, null, 2));
    
    alert('Inquiry Sent Successfully! (Data captured for backend). We will contact you shortly on your provided contact details. Thank you!');
    event.target.reset(); 
}

// FEAT 103: AI-Enhanced Form Validation (Basic Regex for Indian Mobile)
function validateIndianPhoneNumber(phone) {
    // Basic check for 10 digits
    return /^\d{10}$/.test(phone.replace(/\s/g, '').replace('+91', ''));
}


// --- General Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial calls
    displayPriceAlert(); // Show the unique price alert
    updateQuoteCartDisplay(); // Initialize cart display
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Note: Event listener for contact form is attached directly in HTML
    }
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // FIXED: Prevent anchor tags from opening new pages, just call toggleChatWindow()
            if (this.getAttribute('href') === '#aiChatWidget') {
                e.preventDefault();
                toggleChatWindow();
                return;
            }
            
            // Handle smooth scrolling for all other internal links
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Close modal when clicking outside (FEAT 51: Modal Backdrop Close)
    const modal = document.getElementById('productModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProductModal();
        }
    });

    // Handle initial alert bar positioning
    const alertBar = document.getElementById('alertBar');
    const mainNav = document.getElementById('mainNav');
    const homeSection = document.getElementById('home');
    
    if (alertBar && mainNav && homeSection) {
        const navHeight = mainNav.offsetHeight; 
        const alertHeight = alertBar.offsetHeight;
        
        mainNav.style.top = `${alertHeight}px`; 
        homeSection.style.paddingTop = `${navHeight + alertHeight + 30}px`; 
    }
});
