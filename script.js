// ===== MOCK DATA =====
const mockProducts = [
  {
    id: 'p1',
    name: 'Rustic Teak Wood Photo Frame',
    category: 'frames',
    price: 850,
    mrp: 1200,
    rating: 4.8,
    reviews: 124,
    seller: 'Arjun Woodworks',
    sellerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1577083165350-14c1eb388b13?auto=format&fit=crop&q=80',
    tags: ['wood', 'rustic', 'handmade'],
    featured: true,
    inStock: true,
    customOrder: true
  },
  {
    id: 'p2',
    name: 'Hand-thrown Ceramic Bowl Set',
    category: 'pottery',
    price: 1450,
    mrp: 1800,
    rating: 4.9,
    reviews: 86,
    seller: 'Earth & Fire Ceramics',
    sellerImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80',
    tags: ['ceramic', 'kitchen', 'minimalist'],
    featured: true,
    inStock: true,
    customOrder: false
  },
  {
    id: 'p3',
    name: 'Boho Macramé Wall Hanging',
    category: 'textiles',
    price: 1200,
    mrp: 1500,
    rating: 4.7,
    reviews: 215,
    seller: 'Knots & Weaves',
    sellerImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&q=80',
    tags: ['cotton', 'boho', 'wall decor'],
    featured: true,
    inStock: false,
    customOrder: true
  },
  {
    id: 'p4',
    name: 'Ocean Wave Resin Serving Tray',
    category: 'resin',
    price: 2200,
    mrp: 2800,
    rating: 4.6,
    reviews: 42,
    seller: 'Liquid Art Studios',
    sellerImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80',
    tags: ['resin', 'tray', 'ocean'],
    featured: true,
    inStock: true,
    customOrder: true
  },
  {
    id: 'p5',
    name: 'Handcrafted Silver Floral Ring',
    category: 'jewelry',
    price: 3500,
    mrp: 4200,
    rating: 5.0,
    reviews: 68,
    seller: 'Silversmith Sara',
    sellerImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80',
    tags: ['silver', 'ring', 'floral'],
    featured: false,
    inStock: true,
    customOrder: true
  },
  {
    id: 'p6',
    name: 'Lavender & Chamomile Soy Candle',
    category: 'candles',
    price: 450,
    mrp: 600,
    rating: 4.5,
    reviews: 180,
    seller: 'Aroma Crafters',
    sellerImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458cb6c975?auto=format&fit=crop&q=80',
    tags: ['soy', 'candle', 'lavender'],
    featured: false,
    inStock: true,
    customOrder: false
  },
  {
    id: 'p7',
    name: 'Vintage Gold Ornate Frame',
    category: 'frames',
    price: 1850,
    mrp: 2400,
    rating: 4.8,
    reviews: 56,
    seller: 'The Frame Gallery',
    sellerImg: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1581343767220-42289657a79e?auto=format&fit=crop&q=80',
    tags: ['gold', 'ornate', 'vintage'],
    featured: false,
    inStock: true,
    customOrder: false
  },
  {
    id: 'p8',
    name: 'Abstract Sunset Oil Painting',
    category: 'painting',
    price: 4500,
    mrp: 5500,
    rating: 4.9,
    reviews: 24,
    seller: 'Colors of Joy',
    sellerImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80',
    tags: ['oil', 'canvas', 'abstract'],
    featured: false,
    inStock: true,
    customOrder: true
  }
];

// Current logged in user (mock state)
let currentUser = null; // null = guest, object = logged in seller

// ===== COMMON FUNCTIONS =====

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const navMenu = document.createElement('div');
    navMenu.className = 'nav-menu active';
    navMenu.innerHTML = `
      <ul class="nav-links" style="display:flex;">
        <li><a href="index.html" class="nav-link">Home</a></li>
        <li><a href="buyers.html" class="nav-link">Browse Crafts</a></li>
        <li><a href="sellers.html" class="nav-link">Sell With Us</a></li>
      </ul>
      <div class="nav-cta" style="display:flex;">
        <a href="sellers.html" class="btn btn-primary">Start Selling</a>
      </div>
    `;
    
    // Toggle logic
    const existingMenu = document.querySelector('.nav-menu');
    if (existingMenu) {
      existingMenu.remove();
    } else {
      document.querySelector('.nav-container').appendChild(navMenu);
    }
  });
}

// Generate Product Card HTML
function createProductCard(product) {
  return `
    <div class="product-card" onclick="openProductModal('${product.id}')">
      <div class="product-img-wrap">
        ${!product.inStock ? '<div class="product-badge" style="background:var(--error)">Out of Stock</div>' : ''}
        ${product.featured && product.inStock ? '<div class="product-badge">Featured</div>' : ''}
        <button class="product-like" onclick="event.stopPropagation(); toggleLike(this)" aria-label="Like">🤍</button>
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-cat">${product.category.toUpperCase()}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-seller">
          <img src="${product.sellerImg}" alt="${product.seller}" class="seller-avatar">
          <span>${product.seller}</span>
        </div>
        <div class="product-rating">
          ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating} (${product.reviews})
        </div>
        <div class="product-footer">
          <div class="product-price">₹${product.price}</div>
          ${product.mrp ? `<div style="text-decoration:line-through; color:var(--text-muted); font-size:0.9rem">₹${product.mrp}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Toggle Like
function toggleLike(btn) {
  if (btn.innerText === '🤍') {
    btn.innerText = '❤️';
    showToast('Added to wishlist!', 'success');
  } else {
    btn.innerText = '🤍';
    showToast('Removed from wishlist', 'success');
  }
}

// Toast Notification
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : '❌'}</span>
    <span>${message}</span>
  `;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Stats counter animation (for Home Page)
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCount = () => {
      current += step;
      if (current < target) {
        stat.innerText = Math.floor(current);
        requestAnimationFrame(updateCount);
      } else {
        stat.innerText = target;
      }
    };
    updateCount();
  });
}

// Initializer for Index Page
if (document.querySelector('.hero-stats')) {
  // Intersection Observer to trigger stats animation when visible
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      animateStats();
      observer.disconnect();
    }
  });
  observer.observe(document.querySelector('.hero-stats'));
  
  // Inject featured products
  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    const featuredProds = mockProducts.filter(p => p.featured).slice(0, 4);
    featuredGrid.innerHTML = featuredProds.map(createProductCard).join('');
  }
}

// How it works tab switcher (Home Page)
function switchTab(type) {
  document.querySelectorAll('.how-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${type}`).classList.add('active');
  
  const content = document.getElementById('stepsContent');
  if (type === 'buyer') {
    content.innerHTML = `
      <div class="step-card">
        <div class="step-num">1</div>
        <div class="step-icon">🔍</div>
        <h3>Discover</h3>
        <p>Browse thousands of unique, handmade crafts and frames from talented artisans.</p>
      </div>
      <div class="step-card">
        <div class="step-num">2</div>
        <div class="step-icon">💳</div>
        <h3>Purchase</h3>
        <p>Buy directly from the maker securely. Optional custom requests available.</p>
      </div>
      <div class="step-card">
        <div class="step-num">3</div>
        <div class="step-icon">🎁</div>
        <h3>Receive</h3>
        <p>Get your beautiful handcrafted item delivered straight to your doorstep.</p>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="step-card">
        <div class="step-num">1</div>
        <div class="step-icon">📝</div>
        <h3>Register</h3>
        <p>Create your free seller account and set up your personal artisan storefront.</p>
      </div>
      <div class="step-card">
        <div class="step-num">2</div>
        <div class="step-icon">📸</div>
        <h3>List</h3>
        <p>Upload photos and details of your crafts. Reach thousands of eager buyers.</p>
      </div>
      <div class="step-card">
        <div class="step-num">3</div>
        <div class="step-icon">💰</div>
        <h3>Earn</h3>
        <p>Ship your orders and receive secure payouts directly to your bank account.</p>
      </div>
    `;
  }
}
// Init buyer tab on home
if (document.getElementById('stepsContent')) {
  switchTab('buyer');
}

// ===== BUYERS PAGE LOGIC =====

let currentFilters = {
  search: '',
  categories: [],
  maxPrice: 5000,
  minRating: 0,
  inStockOnly: false,
  customOrders: false,
  sort: 'featured',
  view: 'grid'
};

function initBuyersPage() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') filterProducts();
    });
  }
  filterProducts(); // initial render
}

function updatePrice(val) {
  document.getElementById('priceMax').innerText = val;
  filterProducts();
}

function setCatFilter(cat, btnElement) {
  // Update pills UI
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  
  // Clear sidebar category checkboxes
  document.querySelectorAll('input[value="'+cat+'"]').forEach(cb => cb.checked = true);
  if (!cat) {
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => cb.checked = false);
  }
  
  filterProducts();
}

function clearAllFilters() {
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.filter-group input[type="radio"]').forEach(cb => cb.checked = false);
  document.querySelector('input[name="rating"][value="0"]').checked = true;
  document.getElementById('priceSlider').value = 5000;
  document.getElementById('priceMax').innerText = 5000;
  
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.cat-pill').classList.add('active'); // set "All" active
  
  filterProducts();
}

function setView(viewType) {
  currentFilters.view = viewType;
  document.getElementById('gridViewBtn').classList.toggle('active', viewType === 'grid');
  document.getElementById('listViewBtn').classList.toggle('active', viewType === 'list');
  const grid = document.getElementById('productsGrid');
  if (viewType === 'list') {
    grid.classList.add('list-view');
  } else {
    grid.classList.remove('list-view');
  }
}

function filterProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  // Gather filter values
  const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
  
  const checkedCats = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
    .filter(cb => ['frames','pottery','textiles','jewelry','woodwork','painting','candles','resin'].includes(cb.value))
    .map(cb => cb.value);
    
  // Check if a pill is active (if no checkboxes are checked)
  const activePill = document.querySelector('.cat-pill.active');
  let activeCat = null;
  if (activePill && activePill.innerText !== 'All' && checkedCats.length === 0) {
     activeCat = activePill.getAttribute('onclick').match(/'([^']+)'/)?.[1];
     if (activeCat) checkedCats.push(activeCat);
  }

  const maxPrice = parseInt(document.getElementById('priceSlider')?.value || 5000);
  const minRating = parseInt(document.querySelector('input[name="rating"]:checked')?.value || 0);
  const inStockOnly = document.getElementById('inStockOnly')?.checked || false;
  const customOrders = document.getElementById('customOrders')?.checked || false;
  const sort = document.getElementById('sortSelect')?.value || 'featured';
  
  // Filter array
  let filtered = mockProducts.filter(p => {
    // Search
    if (search && !p.name.toLowerCase().includes(search) && !p.tags.some(t => t.toLowerCase().includes(search))) return false;
    // Category
    if (checkedCats.length > 0 && !checkedCats.includes(p.category)) return false;
    // Price
    if (p.price > maxPrice) return false;
    // Rating
    if (p.rating < minRating) return false;
    // Availability
    if (inStockOnly && !p.inStock) return false;
    if (customOrders && !p.customOrder) return false;
    
    return true;
  });
  
  // Sort array
  filtered.sort((a, b) => {
    switch(sort) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.id.localeCompare(a.id); // mock sorting by id
      case 'featured': 
      default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });
  
  // Render
  document.getElementById('resultsCount').innerText = `Showing ${filtered.length} products`;
  
  if (filtered.length === 0) {
    grid.innerHTML = '';
    document.getElementById('noResults').style.display = 'block';
  } else {
    document.getElementById('noResults').style.display = 'none';
    grid.innerHTML = filtered.map(createProductCard).join('');
  }
}

// Modal Logic
function openProductModal(productId) {
  const product = mockProducts.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('productModal');
  const content = document.getElementById('modalContent');
  
  content.innerHTML = `
    <div class="modal-gallery">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-details">
      <div class="product-cat">${product.category.toUpperCase()}</div>
      <h2 style="font-size:2rem; margin-bottom:1rem">${product.name}</h2>
      
      <div class="product-seller" style="font-size:1rem; margin-bottom:1.5rem">
        <img src="${product.sellerImg}" alt="${product.seller}" class="seller-avatar" style="width:40px; height:40px">
        <div>
          <strong>${product.seller}</strong>
          <div style="font-size:0.8rem; color:var(--text-muted)">Verified Artisan ✓</div>
        </div>
      </div>
      
      <div class="product-rating" style="font-size:1.1rem; margin-bottom:1.5rem">
        ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating} <span style="color:var(--text-muted)">(${product.reviews} reviews)</span>
      </div>
      
      <div style="font-size:2rem; font-family:var(--font-heading); color:var(--primary); font-weight:700; margin-bottom:2rem">
        ₹${product.price}
        ${product.mrp ? `<span style="text-decoration:line-through; color:var(--text-muted); font-size:1.2rem; font-weight:400">₹${product.mrp}</span>` : ''}
      </div>
      
      <p style="color:var(--text-muted); margin-bottom:2rem; line-height:1.8">
        Beautifully handcrafted ${product.name.toLowerCase()} made with love and precision. Perfect for your home or as a thoughtful gift.
        <br><br>
        <strong>Materials:</strong> Premium quality materials<br>
        <strong>Dimensions:</strong> Standard size<br>
        <strong>Availability:</strong> ${product.inStock ? '<span style="color:var(--success)">In Stock - Ready to ship</span>' : '<span style="color:var(--error)">Made to Order (7-10 days)</span>'}
      </p>
      
      <div style="display:flex; gap:1rem">
        <button class="btn btn-primary btn-lg" style="flex:2" onclick="showToast('Added to Cart!')">🛍️ Add to Cart</button>
        <button class="btn btn-outline btn-lg" style="flex:1" onclick="toggleLike(this)">🤍 Save</button>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
}

function closeModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('productModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'productModal') closeModal();
});


// ===== SELLERS PAGE LOGIC =====

function initSellersPage() {
  // Check hash for direct tab linking
  const hash = window.location.hash;
  if (hash === '#dashboard') showPortalTab('dashboard');
  else if (hash === '#add-product') showPortalTab('addproduct');
  else showPortalTab('register'); // default
  
  checkLoginState();
}

function showPortalTab(tabId) {
  // Update URL hash without jumping
  window.history.replaceState(null, null, `#${tabId === 'addproduct' ? 'add-product' : tabId}`);
  
  // UI Updates
  document.querySelectorAll('.portal-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${tabId}`)?.classList.add('active');
  
  document.querySelectorAll('.portal-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`panel-${tabId}`)?.classList.add('active');
  
  checkLoginState(tabId);
}

// Auth UI Toggles
function showLoginCard() {
  document.getElementById('registerCard').classList.add('hidden');
  document.getElementById('loginCard').classList.remove('hidden');
}

function showRegisterCard() {
  document.getElementById('loginCard').classList.add('hidden');
  document.getElementById('registerCard').classList.remove('hidden');
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}

// Auth Handlers (Mock)
function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regFirstName').value;
  const shop = document.getElementById('regShopName').value;
  
  // Mock login
  currentUser = { name: name, shop: shop };
  showToast('Registration successful! Welcome to CraftNest.', 'success');
  
  // Go to dashboard
  setTimeout(() => showPortalTab('dashboard'), 1000);
}

function handleLogin(e) {
  e.preventDefault();
  // Mock login
  currentUser = { name: 'Artisan', shop: 'My Creative Studio' };
  showToast('Logged in successfully!', 'success');
  
  // Go to dashboard
  setTimeout(() => showPortalTab('dashboard'), 1000);
}

function handleLogout() {
  currentUser = null;
  showToast('Logged out safely', 'success');
  showPortalTab('register');
}

// Check if user is logged in to show locked/unlocked content
function checkLoginState(currentTab = null) {
  const isLogged = currentUser !== null;
  
  if (isLogged) {
    // Update dashboard UI
    document.getElementById('dashSellerName').innerText = currentUser.name;
    document.getElementById('dashShopName').innerText = currentUser.shop;
    
    // Hide locks, show content
    document.getElementById('dashboardLocked')?.classList.add('hidden');
    document.getElementById('dashboardContent')?.classList.remove('hidden');
    
    document.getElementById('addProductLocked')?.classList.add('hidden');
    document.getElementById('addProductContent')?.classList.remove('hidden');
    
    document.getElementById('myProductsLocked')?.classList.add('hidden');
    document.getElementById('myProductsContent')?.classList.remove('hidden');
    
    // Hide register panel entirely if already logged in and on that tab
    if (currentTab === 'register') {
      showPortalTab('dashboard'); // Redirect to dashboard
    }
  } else {
    // Show locks, hide content
    document.getElementById('dashboardLocked')?.classList.remove('hidden');
    document.getElementById('dashboardContent')?.classList.add('hidden');
    
    document.getElementById('addProductLocked')?.classList.remove('hidden');
    document.getElementById('addProductContent')?.classList.add('hidden');
    
    document.getElementById('myProductsLocked')?.classList.remove('hidden');
    document.getElementById('myProductsContent')?.classList.add('hidden');
  }
}

// Add Product Logic
function previewImages(e) {
  const previewContainer = document.getElementById('imagePreviews');
  const placeholder = document.getElementById('uploadPlaceholder');
  const files = e.target.files;
  
  if (files.length > 0) {
    placeholder.style.display = 'none';
    
    // Mock preview generation
    for(let i=0; i<Math.min(files.length, 5); i++) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'img-preview';
        previewContainer.appendChild(img);
      }
      reader.readAsDataURL(files[i]);
    }
  }
}

// Mock User Products array
let myProductsList = [];

function handleAddProduct(e) {
  e.preventDefault();
  
  const name = document.getElementById('prodName').value;
  const price = document.getElementById('prodPrice').value;
  const category = document.getElementById('prodCategory').value;
  
  const newProduct = {
    id: 'mp_' + Date.now(),
    name: name,
    price: price,
    category: category,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80' // Mock image
  };
  
  myProductsList.push(newProduct);
  
  // Update dashboard stats
  const totalCount = document.getElementById('dashTotalProducts');
  if(totalCount) totalCount.innerText = myProductsList.length;
  
  showToast('Product published successfully!', 'success');
  e.target.reset();
  document.getElementById('imagePreviews').innerHTML = '';
  document.getElementById('uploadPlaceholder').style.display = 'block';
  
  // Refresh grid and go to my products
  renderMyProducts();
  setTimeout(() => showPortalTab('myproducts'), 1000);
}

function saveDraft() {
  showToast('Draft saved securely.', 'success');
}

function renderMyProducts() {
  const grid = document.getElementById('myProductsGrid');
  const msg = document.getElementById('noProductsMsg');
  
  if (myProductsList.length === 0) {
    grid.innerHTML = '';
    msg.classList.remove('hidden');
  } else {
    msg.classList.add('hidden');
    grid.innerHTML = myProductsList.map(p => `
      <div class="seller-product-card" id="${p.id}">
        <img src="${p.image}" class="spc-img" alt="${p.name}">
        <div class="spc-info">
          <div class="product-cat">${p.category.toUpperCase()}</div>
          <div class="spc-title">${p.name}</div>
          <div class="spc-price">₹${p.price}</div>
        </div>
        <div class="spc-actions">
          <button class="spc-btn spc-edit" onclick="showToast('Edit mode opened')">✏️ Edit</button>
          <button class="spc-btn spc-delete" onclick="deleteMyProduct('${p.id}')">🗑️ Delete</button>
        </div>
      </div>
    `).join('');
  }
}

function deleteMyProduct(id) {
  if(confirm('Are you sure you want to delete this product?')) {
    myProductsList = myProductsList.filter(p => p.id !== id);
    renderMyProducts();
    
    const totalCount = document.getElementById('dashTotalProducts');
    if(totalCount) totalCount.innerText = myProductsList.length;
    
    showToast('Product deleted.', 'success');
  }
}
