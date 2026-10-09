/* =====================================
   RAJDHANI BAKERY - JAVASCRIPT
===================================== */

// Replace this with your bakery's WhatsApp number.
// Use country code + number, without + or spaces.
const WHATSAPP_NUMBER = "919876543210";

// Product information and sample prices in INR.
const products = [
    {
        id: 1,
        name: "Chocolate Cake",
        category: "Cakes",
        price: 650,
        unit: "500 g",
        tag: "BESTSELLER",
        description: "Rich chocolate cream and soft sponge.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Black Forest Cake",
        category: "Cakes",
        price: 599,
        unit: "500 g",
        tag: "POPULAR",
        description: "Chocolate, cream and cherry delight.",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Red Velvet Cake",
        category: "Cakes",
        price: 750,
        unit: "500 g",
        tag: "SPECIAL",
        description: "Velvety sponge with creamy frosting.",
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d5b8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Pineapple Cake",
        category: "Cakes",
        price: 499,
        unit: "500 g",
        tag: "FAVOURITE",
        description: "Light cream with juicy pineapple.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Chocolate Pastry",
        category: "Pastries",
        price: 80,
        unit: "1 piece",
        tag: "POPULAR",
        description: "A delicious chocolatey treat.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Black Forest Pastry",
        category: "Pastries",
        price: 90,
        unit: "1 piece",
        tag: "",
        description: "Chocolate layers with whipped cream.",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Fresh Cream Roll",
        category: "Pastries",
        price: 40,
        unit: "1 piece",
        tag: "",
        description: "Soft roll filled with sweet cream.",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "White Bread",
        category: "Bread",
        price: 40,
        unit: "400 g",
        tag: "DAILY FRESH",
        description: "Soft, fluffy bread for everyday meals.",
        image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Brown Bread",
        category: "Bread",
        price: 50,
        unit: "400 g",
        tag: "",
        description: "A wholesome choice for your breakfast.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Burger Buns",
        category: "Bread",
        price: 35,
        unit: "Pack of 4",
        tag: "",
        description: "Soft buns for homemade burgers.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Butter Cookies",
        category: "Cookies",
        price: 120,
        unit: "200 g",
        tag: "TEA TIME",
        description: "Crispy, buttery and wonderfully sweet.",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Choco Chip Cookies",
        category: "Cookies",
        price: 150,
        unit: "200 g",
        tag: "POPULAR",
        description: "Crunchy cookies loaded with chocolate chips.",
        image: "https://images.unsplash.com/photo-1493174140452-3c2e3e9b5b9b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Chocolate Brownie",
        category: "Snacks",
        price: 70,
        unit: "1 piece",
        tag: "MUST TRY",
        description: "A rich, fudgy chocolate brownie.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Veg Puff",
        category: "Snacks",
        price: 25,
        unit: "1 piece",
        tag: "",
        description: "Flaky pastry with a savoury veg filling.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        name: "Cheese Sandwich",
        category: "Snacks",
        price: 80,
        unit: "1 piece",
        tag: "",
        description: "A tasty cheese-filled bakery snack.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        name: "Chocolate Donut",
        category: "Snacks",
        price: 60,
        unit: "1 piece",
        tag: "FAVOURITE",
        description: "A soft donut with chocolate topping.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        name: "Cold Coffee",
        category: "Beverages",
        price: 90,
        unit: "300 ml",
        tag: "",
        description: "Chilled coffee with a creamy finish.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        name: "Hot Chocolate",
        category: "Beverages",
        price: 100,
        unit: "250 ml",
        tag: "",
        description: "A comforting cup of chocolate goodness.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be4b8c6d9?auto=format&fit=crop&w=600&q=80"
    }
];

/* =====================================
   SELECT HTML ELEMENTS
===================================== */

const productsGrid = document.getElementById("productsGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const drawerCount = document.getElementById("drawerCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

/* =====================================
   APPLICATION STATE
===================================== */

let selectedCategory = "All";
let searchTerm = "";
let cart = loadCart();
let toastTimer;

/* =====================================
   HELPERS
===================================== */

function formatPrice(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

function loadCart() {
    try {
        const savedCart = JSON.parse(
            localStorage.getItem("rajdhaniBakeryCart")
        );

        if (!Array.isArray(savedCart)) {
            return [];
        }

        return savedCart
            .filter(item =>
                item &&
                Number.isInteger(item.id) &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0 &&
                products.some(product => product.id === item.id)
            )
            .map(item => ({
                id: item.id,
                quantity: Math.min(item.quantity, 99)
            }));
    } catch (error) {
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem(
            "rajdhaniBakeryCart",
            JSON.stringify(cart)
        );
    } catch (error) {
        console.warn("Cart could not be saved in this browser.");
    }
}

function getCartQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

/* =====================================
   DISPLAY PRODUCTS
===================================== */

function renderProducts() {
    const filteredProducts = products.filter(product => {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const searchableText = [
            product.name,
            product.category,
            product.description,
            product.unit
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    productsGrid.innerHTML = filteredProducts.map(product => `
        <article class="product-card">
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                >

                ${product.tag ? `
                    <span class="product-tag">
                        ${escapeHTML(product.tag)}
                    </span>
                ` : ""}
            </div>

            <div class="product-info">
                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h3>${escapeHTML(product.name)}</h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="product-bottom">
                    <div>
                        <div class="product-price">
                            ${formatPrice(product.price)}
                        </div>
                        <span style="font-size:10px;color:#897b73">
                            ${escapeHTML(product.unit)}
                        </span>
                    </div>

                    <button
                        class="add-btn"
                        data-add="${product.id}"
                        aria-label="Add ${escapeHTML(product.name)} to cart"
                        title="Add to cart"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    noResults.hidden = filteredProducts.length !== 0;
}

/* =====================================
   CATEGORY FILTERS
===================================== */

categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    selectedCategory = button.dataset.category;

    categoryFilters.querySelectorAll(".filter-btn").forEach(filter => {
        filter.classList.toggle("active", filter === button);
    });

    renderProducts();
});

document.querySelectorAll("[data-footer-category]").forEach(link => {
    link.addEventListener("click", () => {
        selectedCategory = link.dataset.footerCategory;

        categoryFilters.querySelectorAll(".filter-btn").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.category === selectedCategory
            );
        });

        renderProducts();
    });
});

/* =====================================
   SEARCH
===================================== */

document.getElementById("searchToggle").addEventListener("click", () => {
    searchBar.classList.toggle("open");

    if (searchBar.classList.contains("open")) {
        searchInput.focus();
    }
});

document.getElementById("closeSearch").addEventListener("click", () => {
    searchBar.classList.remove("open");
    searchInput.value = "";
    searchTerm = "";
    renderProducts();
});

searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    renderProducts();
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach(navLink => {
            navLink.classList.toggle("active", navLink === link);
        });

        document.getElementById("navbar").classList.remove("open");
        document.getElementById("menuToggle").innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    });
});

/* =====================================
   MOBILE NAVIGATION
===================================== */

document.getElementById("menuToggle").addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");

    document.getElementById("menuToggle").innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

/* =====================================
   SHOPPING CART
===================================== */

function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity >= 99) {
            showToast("Maximum quantity reached!");
            return;
        }

        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    renderCart();

    showToast(product.name + " added to cart!");
}

productsGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");

    if (!button) return;

    addToCart(Number(button.dataset.add));
});

function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    } else if (item.quantity > 99) {
        item.quantity = 99;
        showToast("Maximum quantity is 99.");
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    saveCart();
    renderCart();
    showToast("Item removed from cart.");
}

function renderCart() {
    const totalQuantity = getCartQuantity();
    const totalPrice = getCartTotal();

    cartCount.textContent = totalQuantity;
    drawerCount.textContent = `(${totalQuantity})`;
    cartTotal.textContent = formatPrice(totalPrice);

    checkoutBtn.disabled = cart.length === 0;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <h3>Your cart is empty!</h3>
                <p>Your favourite treats are waiting for you.</p>
            </div>
        `;

        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);

        if (!product) return "";

        return `
            <div class="cart-item">
                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >

                <div>
                    <h3>${escapeHTML(product.name)}</h3>

                    <p class="cart-item-price">
                        ${formatPrice(product.price * item.quantity)}
                    </p>

                    <div class="quantity-controls">
                        <button
                            data-quantity="${product.id}"
                            data-change="-1"
                            aria-label="Decrease quantity"
                        >−</button>

                        <span>${item.quantity}</span>

                        <button
                            data-quantity="${product.id}"
                            data-change="1"
                            aria-label="Increase quantity"
                        >+</button>
                    </div>
                </div>

                <button
                    class="remove-item"
                    data-remove="${product.id}"
                    aria-label="Remove ${escapeHTML(product.name)}"
                    title="Remove item"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join("");
}

cartItems.addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-quantity]");
    const removeButton = event.target.closest("[data-remove]");

    if (quantityButton) {
        changeQuantity(
            Number(quantityButton.dataset.quantity),
            Number(quantityButton.dataset.change)
        );
    }

    if (removeButton) {
        removeFromCart(Number(removeButton.dataset.remove));
    }
});

/* =====================================
   OPEN AND CLOSE CART
===================================== */

function openCart() {
    cartDrawer.classList.add("open");
    overlay.classList.add("active");
    cartDrawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");

    document.getElementById("closeCart").focus();
}

function closeCart() {
    cartDrawer.classList.remove("open");
    overlay.classList.remove("active");
    cartDrawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("continueShopping").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCart();

        searchBar.classList.remove("open");

        document.getElementById("navbar").classList.remove("open");
    }
});

/* =====================================
   WHATSAPP CHECKOUT
===================================== */

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Please add products to your cart.");
        return;
    }

    // Prevent accidental checkout using the example number.
    if (WHATSAPP_NUMBER === "919876543210") {
        showToast("Please set your bakery WhatsApp number in script.js.");
        return;
    }

    const orderLines = cart.map(item => {
        const product = products.find(p => p.id === item.id);

        return `${product.name} (${product.unit}) x ${item.quantity} = ${
            formatPrice(product.price * item.quantity)
        }`;
    });

    const message = [
        "Hello RAJDHANI Bakery! I would like to place an order.",
        "",
        ...orderLines,
        "",
        `Total: ${formatPrice(getCartTotal())}`,
        "",
        "Please confirm availability, delivery charges and order details."
    ].join("\n");

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

/* =====================================
   TOAST NOTIFICATIONS
===================================== */

function showToast(message) {
    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* =====================================
   INITIALISE WEBSITE
===================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

renderProducts();
renderCart();