// Mock Data for Admin
const pendingSellers = [
  { id: 1, name: 'Creative Hands', category: 'Pottery', date: 'Oct 24, 2024' },
  { id: 2, name: 'Wood & Wonder', category: 'Woodwork', date: 'Oct 23, 2024' },
  { id: 3, name: 'Silver Linings', category: 'Jewelry', date: 'Oct 23, 2024' }
];

const allSellers = [
  { id: 101, name: 'Arjun Woodworks', email: 'arjun@example.com', category: 'Frames', products: 12, status: 'Active', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 102, name: 'Earth & Fire Ceramics', email: 'earthfire@example.com', category: 'Pottery', products: 8, status: 'Active', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  { id: 103, name: 'Knots & Weaves', email: 'knots@example.com', category: 'Textiles', products: 24, status: 'Active', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
  { id: 104, name: 'Liquid Art Studios', email: 'liquid@example.com', category: 'Resin', products: 5, status: 'Suspended', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' }
];

const adminProducts = [
  { id: 'p1', name: 'Rustic Teak Wood Frame', seller: 'Arjun Woodworks', price: 850, stock: 15, status: 'Live' },
  { id: 'p2', name: 'Ceramic Bowl Set', seller: 'Earth & Fire', price: 1450, stock: 0, status: 'Out of Stock' },
  { id: 'p3', name: 'Boho Macramé', seller: 'Knots & Weaves', price: 1200, stock: 5, status: 'Live' },
  { id: 'p4', name: 'Silver Floral Ring', seller: 'Silversmith Sara', price: 3500, stock: 2, status: 'Flagged' }
];

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
  renderPendingSellers();
  renderAllSellers();
  renderAdminProducts();
});

// Tab Switching Logic
function switchAdminTab(tabId, element) {
  // Update Nav
  document.querySelectorAll('.admin-nav-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  
  // Update Content
  document.querySelectorAll('.admin-section').forEach(el => el.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

// Render Functions
function renderPendingSellers() {
  const tbody = document.getElementById('pendingSellersTable');
  if(!tbody) return;
  
  tbody.innerHTML = pendingSellers.map(seller => `
    <tr>
      <td><strong>${seller.name}</strong></td>
      <td>${seller.category}</td>
      <td>${seller.date}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn btn-approve" onclick="alert('Approved ${seller.name}')">✓ Approve</button>
          <button class="action-btn btn-reject" onclick="alert('Rejected ${seller.name}')">✕ Reject</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderAllSellers() {
  const tbody = document.getElementById('allSellersTable');
  if(!tbody) return;
  
  tbody.innerHTML = allSellers.map(seller => `
    <tr>
      <td>
        <div class="seller-info-cell">
          <img src="${seller.img}" alt="${seller.name}">
          <div>
            <strong>${seller.name}</strong>
          </div>
        </div>
      </td>
      <td>${seller.email}</td>
      <td>${seller.category}</td>
      <td>${seller.products}</td>
      <td>
        <span class="status-badge ${seller.status === 'Active' ? 'success' : 'danger'}">
          ${seller.status}
        </span>
      </td>
      <td>
        <button class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.8rem">Manage</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminProducts() {
  const tbody = document.getElementById('adminProductsTable');
  if(!tbody) return;
  
  tbody.innerHTML = adminProducts.map(prod => `
    <tr>
      <td><strong>${prod.name}</strong></td>
      <td>${prod.seller}</td>
      <td>₹${prod.price}</td>
      <td>${prod.stock}</td>
      <td>
        <span class="status-badge ${prod.status === 'Live' ? 'success' : (prod.status === 'Flagged' ? 'danger' : 'warning')}">
          ${prod.status}
        </span>
      </td>
      <td>
        <button class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.8rem">Edit</button>
      </td>
    </tr>
  `).join('');
}
