import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  UserCheck, 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Shield, 
  RefreshCw, 
  Download, 
  ArrowUpRight, 
  ArrowDownRight, 
  Check, 
  X, 
  Key, 
  Code,
  Menu,
  MoreVertical,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Lock,
  Camera,
  Bell
} from 'lucide-react';

// Mock Data Store for initial state & API payload simulation
const INITIAL_PRODUCTS = [
  { id: 'PRD-001', title: 'Eco-Friendly Bamboo Water Bottle', price: 28.50, stock: 45, category: 'Lifestyle', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-002', title: 'Wireless Noise-Canceling Headphones', price: 189.99, stock: 3, category: 'Electronics', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-003', title: 'Organic Cotton Crewneck Sweatshirt', price: 54.00, stock: 12, category: 'Apparel', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-004', title: 'Minimalist Matte Ceramic Planter', price: 32.00, stock: 2, category: 'Home & Garden', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-005', title: 'Ergonomic Mechanical Keyboard', price: 129.50, stock: 18, category: 'Electronics', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-006', title: 'Recycled Canvas Backpack', price: 79.00, stock: 1, category: 'Accessories', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-007', title: 'Stainless Steel French Press', price: 42.00, stock: 28, category: 'Kitchen', status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=200' },
  { id: 'PRD-008', title: 'Smart Fitness Tracker Watch', price: 99.00, stock: 0, category: 'Electronics', status: 'INACTIVE', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200' }
];

const INITIAL_ORDERS = [
  { id: 'ORD-9481', customer: 'Sarah Jenkins', email: 'sarah.j@example.com', total: 218.49, paymentStatus: 'PAID', orderStatus: 'SHIPPED', date: '2026-08-28', itemsCount: 2, shippingAddress: '742 Evergreen Terrace, Springfield, OR', paymentMethod: 'Credit Card (Visa ****4242)', items: [{ name: 'Wireless Noise-Canceling Headphones', qty: 1, price: 189.99 }, { name: 'Eco-Friendly Water Bottle', qty: 1, price: 28.50 }] },
  { id: 'ORD-9482', customer: 'Marcus Vance', email: 'm.vance@techcorp.io', total: 64.00, paymentStatus: 'PAID', orderStatus: 'PROCESSING', date: '2026-08-28', itemsCount: 2, shippingAddress: '100 Market St, Suite 400, San Francisco, CA', paymentMethod: 'PayPal', items: [{ name: 'Minimalist Matte Ceramic Planter', qty: 2, price: 32.00 }] },
  { id: 'ORD-9483', customer: 'Elena Rostova', email: 'elena.rostova@design.co', total: 129.50, paymentStatus: 'PENDING', orderStatus: 'PENDING', date: '2026-08-29', itemsCount: 1, shippingAddress: '12 Wall Street, New York, NY', paymentMethod: 'Bank Transfer', items: [{ name: 'Ergonomic Mechanical Keyboard', qty: 1, price: 129.50 }] },
  { id: 'ORD-9484', customer: 'David Kim', email: 'dkim99@gmail.com', total: 54.00, paymentStatus: 'FAILED', orderStatus: 'CANCELLED', date: '2026-08-27', itemsCount: 1, shippingAddress: '456 Oak Lane, Austin, TX', paymentMethod: 'Credit Card (Mastercard ****1189)', items: [{ name: 'Organic Cotton Crewneck Sweatshirt', qty: 1, price: 54.00 }] },
  { id: 'ORD-9485', customer: 'Amara Okafor', email: 'amara.o@global.org', total: 312.00, paymentStatus: 'PAID', orderStatus: 'DELIVERED', date: '2026-08-26', itemsCount: 4, shippingAddress: '88 Lakeview Dr, Chicago, IL', paymentMethod: 'Apple Pay', items: [{ name: 'Recycled Canvas Backpack', qty: 2, price: 79.00 }, { name: 'Stainless Steel French Press', qty: 2, price: 42.00 }] }
];

const INITIAL_USERS = [
  { id: 'USR-101', email: 'sarah.j@example.com', name: 'Sarah Jenkins', role: 'customer', status: 'ACTIVE', regDate: '2026-01-15', totalSpent: 1240.50, ordersCount: 8, address: '742 Evergreen Terrace, Springfield, OR' },
  { id: 'USR-102', email: 'alexander.vance@verdant.com', name: 'Alexander Vance', role: 'admin', status: 'ACTIVE', regDate: '2025-11-01', totalSpent: 0.00, ordersCount: 0, address: 'HQ Offices, San Francisco, CA' },
  { id: 'USR-103', email: 'm.vance@techcorp.io', name: 'Marcus Vance', role: 'customer', status: 'ACTIVE', regDate: '2026-03-22', totalSpent: 430.00, ordersCount: 3, address: '100 Market St, San Francisco, CA' },
  { id: 'USR-104', email: 'elena.rostova@design.co', name: 'Elena Rostova', role: 'customer', status: 'SUSPENDED', regDate: '2026-05-10', totalSpent: 129.50, ordersCount: 1, address: '12 Wall Street, New York, NY' },
  { id: 'USR-105', email: 'david.kim@gmail.com', name: 'David Kim', role: 'customer', status: 'ACTIVE', regDate: '2026-07-04', totalSpent: 890.20, ordersCount: 5, address: '456 Oak Lane, Austin, TX' }
];

const MONTHLY_REVENUE_DATA = [
  { month: 'Jan', revenue: 32000, orders: 410 },
  { month: 'Feb', revenue: 41000, orders: 520 },
  { month: 'Mar', revenue: 38000, orders: 480 },
  { month: 'Apr', revenue: 51000, orders: 630 },
  { month: 'May', revenue: 46000, orders: 590 },
  { month: 'Jun', revenue: 62000, orders: 780 },
  { month: 'Jul', revenue: 75000, orders: 890 },
  { month: 'Aug', revenue: 94000, orders: 1120 }
];

const App = () => {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Admin Profile State
  const [adminProfile, setAdminProfile] = useState({
    name: 'Alexander Vance',
    email: 'alexander.vance@verdant.com',
    role: 'Super Administrator',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    title: 'Head of Operations'
  });
  const [isAdminProfileModalOpen, setIsAdminProfileModalOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  // Entities State
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [users, setUsers] = useState(INITIAL_USERS);

  // Toast Notification System
  const [toast, setToast] = useState(null);
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Modals & Selection States
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [isAddEditProductOpen, setIsAddEditProductOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);

  // Filter & Search States
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('ALL');
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('ALL');
  const [userSearch, setUserSearch] = useState('');
  const [userRoleFilter, setUserRoleFilter] = useState('ALL');

  // --- Calculations for Analytics ---
  const totalRevenue = useMemo(() => {
    return orders.reduce((sum, o) => o.paymentStatus === 'PAID' ? sum + o.total : sum, 0) + 128450;
  }, [orders]);

  const totalOrders = useMemo(() => orders.length + 1420, [orders]);
  const activeUsersCount = useMemo(() => users.filter(u => u.status === 'ACTIVE').length + 3890, [users]);
  const lowStockProducts = useMemo(() => products.filter(p => p.stock < 5), [products]);

  // --- Handlers: Product Management ---
  const handleSaveProduct = (formData) => {
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p));
      showToast(`Updated product: ${formData.title}`);
    } else {
      const newProduct = {
        id: `PRD-00${products.length + 1}`,
        ...formData,
        image: formData.image || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200'
      };
      setProducts(prev => [newProduct, ...prev]);
      showToast(`Added new product: ${formData.title}`);
    }
    setIsAddEditProductOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    setSelectedProductIds(prev => prev.filter(pId => pId !== id));
    showToast('Product deleted successfully', 'error');
  };

  const handleBulkDeleteProducts = () => {
    setProducts(prev => prev.filter(p => !selectedProductIds.includes(p.id)));
    showToast(`Deleted ${selectedProductIds.length} products`, 'error');
    setSelectedProductIds([]);
  };

  const handleBulkUpdateStock = (newStock) => {
    setProducts(prev => prev.map(p => selectedProductIds.includes(p.id) ? { ...p, stock: newStock } : p));
    showToast(`Updated stock for ${selectedProductIds.length} items`);
    setSelectedProductIds([]);
  };

  // --- Handlers: Order Management ---
  const handleOrderStatusChange = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, orderStatus: newStatus } : o));
    showToast(`Order ${orderId} status changed to ${newStatus}`);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(prev => ({ ...prev, orderStatus: newStatus }));
    }
  };

  // --- Handlers: User Management ---
  const handleToggleUserStatus = (userId) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const nextStatus = u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
        showToast(`User ${u.name} status updated to ${nextStatus}`, nextStatus === 'ACTIVE' ? 'success' : 'error');
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  const handleToggleUserRole = (userId) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const nextRole = u.role === 'admin' ? 'customer' : 'admin';
        showToast(`User ${u.name} role set to ${nextRole.toUpperCase()}`);
        return { ...u, role: nextRole };
      }
      return u;
    }));
  };

  const handleAdminProfileSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setAdminProfile(prev => ({
      ...prev,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      title: formData.get('title')
    }));
    setIsAdminProfileModalOpen(false);
    showToast('Admin profile updated successfully');
  };

  const handleLogout = () => {
    setIsLoggedOut(true);
    setProfileDropdownOpen(false);
    showToast('Logged out successfully', 'error');
  };

  if (isLoggedOut) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="w-20 h-20 bg-[#16a34a]/10 border-2 border-[#16a34a] rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-[#16a34a]/20">
          <Layers className="w-10 h-10 text-[#16a34a]" />
        </div>
        <h1 className="text-3xl font-black text-white mb-2">You have been logged out</h1>
        <p className="text-zinc-400 max-w-md text-base mb-8">
          Session ended for <span className="text-white font-bold">{adminProfile.email}</span>. Click below to sign back in to the admin console.
        </p>
        <button 
          onClick={() => {
            setIsLoggedOut(false);
            showToast('Welcome back, Alexander!');
          }}
          className="px-8 py-3.5 bg-[#16a34a] text-white font-bold rounded-2xl hover:bg-[#15803d] transition-all shadow-lg shadow-[#16a34a]/25 text-base"
        >
          Re-login to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#09090b] font-sans flex flex-col md:flex-row antialiased selection:bg-[#16a34a] selection:text-white">
      
      {/* Toast Notification Alert */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-white font-semibold text-base transition-all transform animate-in slide-in-from-top-4 duration-300 ${toast.type === 'error' ? 'bg-[#09090b] border-l-4 border-red-500' : 'bg-[#09090b] border-l-4 border-[#16a34a]'}`}>
          {toast.type === 'error' ? <XCircle className="w-6 h-6 text-red-500" /> : <CheckCircle2 className="w-6 h-6 text-[#16a34a]" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Mobile Top Navigation Header */}
      <div className="md:hidden bg-[#09090b] text-white p-5 flex justify-between items-center sticky top-0 z-40 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="bg-[#16a34a] p-2.5 rounded-xl">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="font-black text-xl tracking-tight">VERDANT<span className="text-[#16a34a]">.admin</span></span>
        </div>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-zinc-300 hover:text-white focus:outline-none"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Main Sidebar Navigation */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-72 md:w-[26%] lg:w-[22%] xl:w-[20%] bg-[#09090b] text-white flex flex-col justify-between transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} border-r border-zinc-800/80 shadow-2xl shrink-0`}>
        <div>
          {/* Sidebar Header */}
          <div className="p-6 lg:p-8 hidden md:flex items-center gap-3.5 border-b border-zinc-800/80">
            <div className="bg-[#16a34a] p-3 rounded-2xl shadow-lg shadow-[#16a34a]/25">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl tracking-tight text-white leading-tight">VERDANT</h1>
              <span className="text-xs font-bold text-[#16a34a] uppercase tracking-widest">Enterprise HQ</span>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="p-5 lg:p-6 space-y-3">
            <button
              onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all ${activeTab === 'dashboard' ? 'bg-[#16a34a] text-white shadow-xl shadow-[#16a34a]/30' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'}`}
            >
              <div className="flex items-center gap-3.5">
                <LayoutDashboard className="w-6 h-6 shrink-0" />
                <span>Analytics</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('products'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all ${activeTab === 'products' ? 'bg-[#16a34a] text-white shadow-xl shadow-[#16a34a]/30' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'}`}
            >
              <div className="flex items-center gap-3.5">
                <Package className="w-6 h-6 shrink-0" />
                <span>Products</span>
              </div>
              {lowStockProducts.length > 0 && (
                <span className="bg-red-500/20 text-red-400 text-xs font-extrabold px-2.5 py-1 rounded-full border border-red-500/30">
                  {lowStockProducts.length}
                </span>
              )}
            </button>

            <button
              onClick={() => { setActiveTab('orders'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all ${activeTab === 'orders' ? 'bg-[#16a34a] text-white shadow-xl shadow-[#16a34a]/30' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'}`}
            >
              <div className="flex items-center gap-3.5">
                <ShoppingCart className="w-6 h-6 shrink-0" />
                <span>Orders</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('users'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all ${activeTab === 'users' ? 'bg-[#16a34a] text-white shadow-xl shadow-[#16a34a]/30' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'}`}
            >
              <div className="flex items-center gap-3.5">
                <Users className="w-6 h-6 shrink-0" />
                <span>Customers</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('alerts'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-base lg:text-lg transition-all ${activeTab === 'alerts' ? 'bg-[#16a34a] text-white shadow-xl shadow-[#16a34a]/30' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'}`}
            >
              <div className="flex items-center gap-3.5">
                <AlertTriangle className="w-6 h-6 shrink-0" />
                <span>Low Stock</span>
              </div>
              <span className="bg-amber-500/20 text-amber-400 text-xs font-extrabold px-2.5 py-1 rounded-full border border-amber-500/30">
                {lowStockProducts.length}
              </span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer: API Readiness & User Profile Controls */}
        <div className="p-5 lg:p-6 border-t border-zinc-800/80 space-y-4">
          <button
            onClick={() => setIsApiModalOpen(true)}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 text-sm text-zinc-300 font-semibold transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Code className="w-4 h-4 text-[#16a34a]" />
              <span>API Schema Ready</span>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </button>

          {/* Admin Account Controls Widget */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 transition-all text-left"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img 
                  src={adminProfile.avatar} 
                  alt={adminProfile.name} 
                  className="w-10 h-10 rounded-full object-cover border border-[#16a34a]"
                />
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-white truncate">{adminProfile.name}</p>
                  <p className="text-xs text-[#16a34a] font-semibold truncate">{adminProfile.role}</p>
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Admin Profile Popup Menu */}
            {profileDropdownOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-[#09090b] border border-zinc-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150">
                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    setIsAdminProfileModalOpen(true);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <User className="w-4 h-4 text-[#16a34a]" />
                  <span>Edit Admin Profile</span>
                </button>

                <button
                  onClick={() => {
                    setProfileDropdownOpen(false);
                    setIsAdminProfileModalOpen(true);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <Lock className="w-4 h-4 text-zinc-400" />
                  <span>Security & Passwords</span>
                </button>

                <div className="h-px bg-zinc-800/80 my-1"></div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>Logout Session</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 w-full md:w-[74%] lg:w-[78%] xl:w-[80%] max-w-[1920px] mx-auto">

        {/* Header Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-zinc-200/80">
          <div>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-[#09090b] tracking-tight capitalize">
              {activeTab === 'dashboard' && 'Analytics Overview'}
              {activeTab === 'products' && 'Product Catalog'}
              {activeTab === 'orders' && 'Order Fulfillment'}
              {activeTab === 'users' && 'Customer Management'}
              {activeTab === 'alerts' && 'Low Stock Inventory Alerts'}
            </h1>
            <p className="text-base md:text-lg text-zinc-500 mt-2 font-medium">
              Real-time enterprise metrics, order processing, and administrative controls.
            </p>
          </div>

          {/* Quick Actions Header Toolbar */}
          <div className="flex items-center gap-4">
            {activeTab === 'products' && (
              <button
                onClick={() => { setEditingProduct(null); setIsAddEditProductOpen(true); }}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-[#16a34a] text-white rounded-2xl font-bold hover:bg-[#15803d] transition-all shadow-lg shadow-[#16a34a]/25 text-base active:scale-95"
              >
                <Plus className="w-5 h-5" />
                <span>Add Product</span>
              </button>
            )}

            <button 
              onClick={() => showToast('Refreshed data sync with backend')}
              className="p-3.5 bg-white border border-zinc-200/80 text-zinc-700 hover:bg-zinc-50 rounded-2xl transition-all shadow-sm"
              title="Refresh Data"
            >
              <RefreshCw className="w-5 h-5" />
            </button>

            {/* Quick Admin Avatar Button */}
            <button
              onClick={() => setIsAdminProfileModalOpen(true)}
              className="hidden sm:flex items-center gap-3 p-1.5 pr-4 bg-white border border-zinc-200/80 rounded-2xl hover:bg-zinc-50 transition-all shadow-sm"
            >
              <img src={adminProfile.avatar} alt={adminProfile.name} className="w-9 h-9 rounded-full object-cover border border-[#16a34a]" />
              <div className="text-left">
                <p className="text-xs font-bold text-[#09090b]">{adminProfile.name}</p>
                <p className="text-[11px] text-zinc-500">{adminProfile.title}</p>
              </div>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: ANALYTICS & OVERVIEW DASHBOARD ================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-7 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest">Total Revenue</span>
                  <div className="p-3 bg-[#16a34a]/10 text-[#16a34a] rounded-2xl group-hover:bg-[#16a34a] group-hover:text-white transition-colors">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-[#09090b] tracking-tight">
                  ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-sm font-bold text-[#16a34a]">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+14.2% from last month</span>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest">Total Orders</span>
                  <div className="p-3 bg-zinc-100 text-zinc-900 rounded-2xl group-hover:bg-[#09090b] group-hover:text-white transition-colors">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-[#09090b] tracking-tight">
                  {totalOrders.toLocaleString()}
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-sm font-bold text-[#16a34a]">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+8.1% order volume</span>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest">Active Customers</span>
                  <div className="p-3 bg-zinc-100 text-zinc-900 rounded-2xl group-hover:bg-[#09090b] group-hover:text-white transition-colors">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-[#09090b] tracking-tight">
                  {activeUsersCount.toLocaleString()}
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-sm font-bold text-[#16a34a]">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+22.4% new signups</span>
                </div>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest">Active Catalog</span>
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <Package className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-[#09090b] tracking-tight">
                  {products.length} Products
                </div>
                <div className="flex items-center gap-1.5 mt-3 text-sm font-bold text-amber-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{lowStockProducts.length} low stock warnings</span>
                </div>
              </div>

            </div>

            {/* Charts & Graphs Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Monthly Revenue Trend Line Chart */}
              <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-extrabold text-xl text-[#09090b]">Monthly Revenue Trend</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">Gross sales performance over the current fiscal year</p>
                  </div>
                  <span className="text-xs font-extrabold px-4 py-1.5 bg-green-50 text-[#16a34a] rounded-full border border-green-200">
                    2026 YTD
                  </span>
                </div>

                {/* Interactive Responsive SVG Area Chart */}
                <div className="h-72 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16a34a" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#16a34a" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Gridlines */}
                    <line x1="0" y1="40" x2="700" y2="40" stroke="#f4f4f5" strokeWidth="1.5" />
                    <line x1="0" y1="90" x2="700" y2="90" stroke="#f4f4f5" strokeWidth="1.5" />
                    <line x1="0" y1="140" x2="700" y2="140" stroke="#f4f4f5" strokeWidth="1.5" />

                    {/* Area Fill */}
                    <path
                      d="M 20 160 Q 110 130, 200 140 T 380 90 T 560 40 T 680 10 L 680 180 L 20 180 Z"
                      fill="url(#greenGradient)"
                    />

                    {/* Line Path */}
                    <path
                      d="M 20 160 Q 110 130, 200 140 T 380 90 T 560 40 T 680 10"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Plot Points */}
                    {[
                      { x: 20, y: 160 },
                      { x: 110, y: 130 },
                      { x: 200, y: 140 },
                      { x: 290, y: 110 },
                      { x: 380, y: 90 },
                      { x: 470, y: 60 },
                      { x: 560, y: 40 },
                      { x: 680, y: 10 }
                    ].map((pt, idx) => (
                      <g key={idx}>
                        <circle cx={pt.x} cy={pt.y} r="6" fill="#09090b" stroke="#16a34a" strokeWidth="3" />
                      </g>
                    ))}
                  </svg>

                  {/* Month X-Axis Labels */}
                  <div className="flex justify-between text-sm text-zinc-500 font-extrabold mt-6 px-2">
                    {MONTHLY_REVENUE_DATA.map((d, i) => (
                      <span key={i}>{d.month}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Breakdown Bar Graph */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl text-[#09090b]">Top Categories</h3>
                  <p className="text-sm text-zinc-500 mb-8">Sales volume distribution by type</p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-[#09090b]">Electronics</span>
                        <span className="text-[#16a34a]">42%</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-[#16a34a] h-3 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-[#09090b]">Apparel & Lifestyle</span>
                        <span className="text-[#16a34a]">28%</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-[#09090b] h-3 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-[#09090b]">Home & Kitchen</span>
                        <span className="text-[#16a34a]">18%</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-emerald-800 h-3 rounded-full" style={{ width: '18%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-[#09090b]">Accessories</span>
                        <span className="text-[#16a34a]">12%</span>
                      </div>
                      <div className="w-full bg-zinc-100 rounded-full h-3 overflow-hidden">
                        <div className="bg-zinc-400 h-3 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
                  <button 
                    onClick={() => setActiveTab('products')}
                    className="text-sm font-black text-[#16a34a] hover:underline flex items-center justify-center gap-1.5 mx-auto"
                  >
                    <span>Manage All Categories</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Recent Activity Feed & Realtime Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Recent Orders List */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-extrabold text-xl text-[#09090b]">Recent Orders Placed</h3>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className="text-sm font-extrabold text-[#16a34a] hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="divide-y divide-zinc-100">
                  {orders.slice(0, 4).map((ord) => (
                    <div key={ord.id} className="py-4 flex items-center justify-between hover:bg-zinc-50 px-3 rounded-2xl transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center font-bold text-sm text-[#09090b]">
                          {ord.id.split('-')[1]}
                        </div>
                        <div>
                          <p className="text-base font-bold text-[#09090b]">{ord.customer}</p>
                          <p className="text-sm text-zinc-500">{ord.itemsCount} items • {ord.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-black text-[#09090b]">${ord.total.toFixed(2)}</p>
                        <span className={`text-xs font-extrabold px-3 py-1 rounded-full border inline-block mt-1 ${
                          ord.paymentStatus === 'PAID' ? 'bg-green-50 text-[#16a34a] border-green-200' :
                          ord.paymentStatus === 'PENDING' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                          'bg-red-50 text-red-600 border-red-200'
                        }`}>
                          {ord.paymentStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newly Registered Users & Low Stock Digest */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-extrabold text-xl text-[#09090b]">New Customer Signups</h3>
                    <button 
                      onClick={() => setActiveTab('users')}
                      className="text-sm font-extrabold text-[#16a34a] hover:underline"
                    >
                      Manage Users
                    </button>
                  </div>

                  <div className="space-y-4">
                    {users.slice(0, 3).map((usr) => (
                      <div key={usr.id} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-full bg-[#09090b] text-white flex items-center justify-center font-bold text-base">
                            {usr.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-base font-bold text-[#09090b]">{usr.name}</p>
                            <p className="text-sm text-zinc-500">{usr.email}</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400">{usr.regDate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stock Warning Highlight Box */}
                <div className="mt-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                    <span className="text-sm font-extrabold text-amber-950">
                      {lowStockProducts.length} items require inventory restocking
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveTab('alerts')}
                    className="text-sm font-extrabold text-amber-700 underline shrink-0 hover:text-amber-900"
                  >
                    Restock
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= TAB 2: PRODUCT MANAGEMENT MODULE ================= */}
        {activeTab === 'products' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Search, Filter, and Bulk Action Controls */}
            <div className="bg-white p-5 lg:p-6 rounded-3xl border border-zinc-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
              
              {/* Search & Category Filter */}
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                <div className="relative w-full sm:w-80">
                  <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search product title or ID..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-base focus:outline-none focus:border-[#16a34a] focus:ring-4 focus:ring-[#16a34a]/10"
                  />
                </div>

                <select
                  value={productCategoryFilter}
                  onChange={(e) => setProductCategoryFilter(e.target.value)}
                  className="w-full sm:w-56 py-3 px-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-base font-bold focus:outline-none focus:border-[#16a34a]"
                >
                  <option value="ALL">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              {/* Bulk Action Bar */}
              {selectedProductIds.length > 0 ? (
                <div className="flex items-center gap-3 bg-zinc-900 text-white px-5 py-3 rounded-2xl text-sm font-bold animate-in fade-in">
                  <span>{selectedProductIds.length} Selected</span>
                  <div className="h-5 w-px bg-zinc-700 my-auto mx-1"></div>
                  <button 
                    onClick={handleBulkDeleteProducts}
                    className="text-red-400 hover:text-red-300 font-extrabold hover:underline"
                  >
                    Delete Selected
                  </button>
                  <button 
                    onClick={() => handleBulkUpdateStock(25)}
                    className="text-[#16a34a] hover:text-green-400 font-extrabold hover:underline ml-2"
                  >
                    Set Stock = 25
                  </button>
                </div>
              ) : (
                <div className="text-sm font-bold text-zinc-400 hidden md:block">
                  Catalog Total: {products.length} Items
                </div>
              )}
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs font-black uppercase text-zinc-500 tracking-wider">
                      <th className="p-5 w-12">
                        <input
                          type="checkbox"
                          checked={selectedProductIds.length === products.length && products.length > 0}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedProductIds(products.map(p => p.id));
                            } else {
                              setSelectedProductIds([]);
                            }
                          }}
                          className="w-5 h-5 rounded-md border-zinc-300 text-[#16a34a] focus:ring-[#16a34a] cursor-pointer"
                        />
                      </th>
                      <th className="p-5">Product Info</th>
                      <th className="p-5">Category</th>
                      <th className="p-5">Price</th>
                      <th className="p-5">Inventory</th>
                      <th className="p-5">Status</th>
                      <th className="p-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-base">
                    {products
                      .filter(p => productCategoryFilter === 'ALL' || p.category === productCategoryFilter)
                      .filter(p => p.title.toLowerCase().includes(productSearch.toLowerCase()) || p.id.toLowerCase().includes(productSearch.toLowerCase()))
                      .map((prod) => (
                        <tr key={prod.id} className="hover:bg-zinc-50/80 transition-colors">
                          <td className="p-5">
                            <input
                              type="checkbox"
                              checked={selectedProductIds.includes(prod.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedProductIds(prev => [...prev, prod.id]);
                                } else {
                                  setSelectedProductIds(prev => prev.filter(id => id !== prod.id));
                                }
                              }}
                              className="w-5 h-5 rounded-md border-zinc-300 text-[#16a34a] focus:ring-[#16a34a] cursor-pointer"
                            />
                          </td>
                          <td className="p-5">
                            <div className="flex items-center gap-4">
                              <img
                                src={prod.image}
                                alt={prod.title}
                                className="w-14 h-14 rounded-2xl object-cover border border-zinc-200 bg-zinc-100"
                              />
                              <div>
                                <p className="font-extrabold text-[#09090b]">{prod.title}</p>
                                <span className="text-xs font-mono font-bold text-zinc-400">{prod.id}</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-5">
                            <span className="text-xs font-extrabold px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-xl">
                              {prod.category}
                            </span>
                          </td>
                          <td className="p-5 font-black text-[#09090b]">
                            ${prod.price.toFixed(2)}
                          </td>
                          <td className="p-5">
                            <span className={`font-extrabold text-xs px-3 py-1.5 rounded-full ${
                              prod.stock === 0 ? 'bg-red-50 text-red-600 border border-red-200' :
                              prod.stock < 5 ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                              'bg-green-50 text-[#16a34a] border border-green-200'
                            }`}>
                              {prod.stock === 0 ? 'Out of Stock' : `${prod.stock} items left`}
                            </span>
                          </td>
                          <td className="p-5">
                            <button
                              onClick={() => {
                                const newStatus = prod.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
                                setProducts(prev => prev.map(p => p.id === prod.id ? { ...p, status: newStatus } : p));
                                showToast(`Product set to ${newStatus}`);
                              }}
                              className={`text-xs font-black px-3.5 py-1.5 rounded-full cursor-pointer transition-all ${
                                prod.status === 'ACTIVE' ? 'bg-[#09090b] text-white' : 'bg-zinc-200 text-zinc-600'
                              }`}
                            >
                              {prod.status}
                            </button>
                          </td>
                          <td className="p-5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => { setEditingProduct(prod); setIsAddEditProductOpen(true); }}
                                className="p-2.5 text-zinc-500 hover:text-[#16a34a] hover:bg-green-50 rounded-xl transition-colors"
                                title="Edit Product"
                              >
                                <Edit3 className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(prod.id)}
                                className="p-2.5 text-zinc-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                title="Delete Product"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ORDER MANAGEMENT MODULE ================= */}
        {activeTab === 'orders' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Filter Bar for Orders */}
            <div className="bg-white p-5 lg:p-6 rounded-3xl border border-zinc-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto flex-1">
                <div className="relative w-full sm:w-96">
                  <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search Order ID or Customer Name..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-base focus:outline-none focus:border-[#16a34a]"
                  />
                </div>

                <select
                  value={orderStatusFilter}
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                  className="w-full sm:w-56 py-3 px-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-base font-bold focus:outline-none focus:border-[#16a34a]"
                >
                  <option value="ALL">All Order Statuses</option>
                  <option value="PENDING">PENDING</option>
                  <option value="PROCESSING">PROCESSING</option>
                  <option value="SHIPPED">SHIPPED</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>

              <div className="text-sm font-extrabold text-zinc-400">
                Total Orders: {orders.length}
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs font-black uppercase text-zinc-500 tracking-wider">
                      <th className="p-5">Order Reference</th>
                      <th className="p-5">Customer</th>
                      <th className="p-5">Date</th>
                      <th className="p-5">Payment</th>
                      <th className="p-5">Fulfillment Status</th>
                      <th className="p-5">Total</th>
                      <th className="p-5 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-base">
                    {orders
                      .filter(o => orderStatusFilter === 'ALL' || o.orderStatus === orderStatusFilter)
                      .filter(o => o.id.toLowerCase().includes(orderSearch.toLowerCase()) || o.customer.toLowerCase().includes(orderSearch.toLowerCase()))
                      .map((ord) => (
                        <tr key={ord.id} className="hover:bg-zinc-50/80 transition-colors">
                          <td className="p-5 font-mono font-bold text-[#09090b]">
                            {ord.id}
                          </td>
                          <td className="p-5">
                            <p className="font-extrabold text-[#09090b]">{ord.customer}</p>
                            <p className="text-xs text-zinc-400 font-medium">{ord.email}</p>
                          </td>
                          <td className="p-5 text-sm font-bold text-zinc-600">
                            {ord.date}
                          </td>
                          <td className="p-5">
                            <span className={`text-xs font-extrabold px-3 py-1.5 rounded-full border ${
                              ord.paymentStatus === 'PAID' ? 'bg-green-50 text-[#16a34a] border-green-200' :
                              ord.paymentStatus === 'PENDING' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                              'bg-red-50 text-red-600 border-red-200'
                            }`}>
                              {ord.paymentStatus}
                            </span>
                          </td>
                          <td className="p-5">
                            <select
                              value={ord.orderStatus}
                              onChange={(e) => handleOrderStatusChange(ord.id, e.target.value)}
                              className="text-xs font-black px-3.5 py-2 rounded-2xl border border-zinc-200 bg-zinc-50 text-[#09090b] focus:outline-none focus:border-[#16a34a] cursor-pointer"
                            >
                              <option value="PENDING">PENDING</option>
                              <option value="PROCESSING">PROCESSING</option>
                              <option value="SHIPPED">SHIPPED</option>
                              <option value="DELIVERED">DELIVERED</option>
                              <option value="CANCELLED">CANCELLED</option>
                            </select>
                          </td>
                          <td className="p-5 font-black text-[#09090b]">
                            ${ord.total.toFixed(2)}
                          </td>
                          <td className="p-5 text-right">
                            <button
                              onClick={() => setSelectedOrder(ord)}
                              className="p-2.5 bg-zinc-100 hover:bg-[#09090b] text-zinc-700 hover:text-white rounded-2xl transition-all"
                              title="View Full Breakdown"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: USER & CUSTOMER MANAGEMENT ================= */}
        {activeTab === 'users' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Filter Bar for Users */}
            <div className="bg-white p-5 lg:p-6 rounded-3xl border border-zinc-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4 w-full sm:w-auto flex-1">
                <div className="relative w-full sm:w-96">
                  <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search name or email address..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-base focus:outline-none focus:border-[#16a34a]"
                  />
                </div>

                <select
                  value={userRoleFilter}
                  onChange={(e) => setUserRoleFilter(e.target.value)}
                  className="py-3 px-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-base font-bold focus:outline-none focus:border-[#16a34a]"
                >
                  <option value="ALL">All Account Roles</option>
                  <option value="customer">Customers</option>
                  <option value="admin">Admins</option>
                </select>
              </div>

              <div className="text-sm font-extrabold text-zinc-400">
                Registered Accounts: {users.length}
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-xs font-black uppercase text-zinc-500 tracking-wider">
                      <th className="p-5">User</th>
                      <th className="p-5">Role</th>
                      <th className="p-5">Account Status</th>
                      <th className="p-5">Joined Date</th>
                      <th className="p-5">Total Spent</th>
                      <th className="p-5 text-right">Account Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-base">
                    {users
                      .filter(u => userRoleFilter === 'ALL' || u.role === userRoleFilter)
                      .filter(u => u.name.toLowerCase().includes(userSearch.toLowerCase()) || u.email.toLowerCase().includes(userSearch.toLowerCase()))
                      .map((usr) => (
                        <tr key={usr.id} className="hover:bg-zinc-50/80 transition-colors">
                          <td className="p-5">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-[#09090b] text-white flex items-center justify-center font-bold text-lg">
                                {usr.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-extrabold text-[#09090b]">{usr.name}</p>
                                <p className="text-xs text-zinc-400 font-medium">{usr.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-5">
                            <span className={`text-xs font-extrabold px-3 py-1.5 rounded-full uppercase ${
                              usr.role === 'admin' ? 'bg-[#16a34a] text-white' : 'bg-zinc-100 text-zinc-700'
                            }`}>
                              {usr.role}
                            </span>
                          </td>
                          <td className="p-5">
                            <button
                              onClick={() => handleToggleUserStatus(usr.id)}
                              className={`text-xs font-extrabold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                                usr.status === 'ACTIVE' ? 'bg-green-50 text-[#16a34a] border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'
                              }`}
                            >
                              {usr.status}
                            </button>
                          </td>
                          <td className="p-5 text-sm font-bold text-zinc-600">
                            {usr.regDate}
                          </td>
                          <td className="p-5 font-black text-[#09090b]">
                            ${usr.totalSpent.toFixed(2)}
                          </td>
                          <td className="p-5 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSelectedUser(usr)}
                                className="p-2.5 text-zinc-500 hover:text-[#09090b] hover:bg-zinc-100 rounded-2xl transition-colors"
                                title="View Customer Profile"
                              >
                                <Eye className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleToggleUserRole(usr.id)}
                                className="p-2.5 text-zinc-500 hover:text-[#16a34a] hover:bg-green-50 rounded-2xl transition-colors"
                                title="Toggle Admin Role"
                              >
                                <Shield className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 5: LOW STOCK ALERTS HIGHLIGHT ================= */}
        {activeTab === 'alerts' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-amber-500/10 border border-amber-500/20 p-8 rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-500/20">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-amber-950">Restock Attention Required</h3>
                  <p className="text-base text-amber-800 mt-0.5">
                    The following items have stock quantities falling below the threshold (&lt; 5 items).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lowStockProducts.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-3xl border border-zinc-200/80 shadow-sm flex items-center gap-5">
                  <img src={p.image} alt={p.title} className="w-20 h-20 rounded-2xl object-cover border border-zinc-200 bg-zinc-100" />
                  <div className="flex-1">
                    <h4 className="font-extrabold text-[#09090b] text-base leading-snug">{p.title}</h4>
                    <p className="text-xs text-zinc-400 font-mono font-bold mt-1">{p.id}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-200">
                        Only {p.stock} left
                      </span>
                      <button
                        onClick={() => {
                          setProducts(prev => prev.map(prod => prod.id === p.id ? { ...prod, stock: prod.stock + 50 } : prod));
                          showToast(`Restocked +50 units to ${p.title}`);
                        }}
                        className="text-xs font-extrabold px-3.5 py-1.5 bg-[#16a34a] text-white rounded-xl hover:bg-[#15803d] transition-colors"
                      >
                        + Restock 50
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ================= MODAL: ADMIN PROFILE EDIT & SETTINGS ================= */}
      {isAdminProfileModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-10 shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4">
              <div>
                <h2 className="text-2xl font-black text-[#09090b]">Admin Profile & Settings</h2>
                <p className="text-sm text-zinc-500 mt-0.5">Manage your operator account and security options</p>
              </div>
              <button 
                onClick={() => setIsAdminProfileModalOpen(false)}
                className="p-2 text-zinc-400 hover:text-black rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleAdminProfileSave} className="space-y-6">
              
              {/* Avatar Upload Preview */}
              <div className="flex items-center gap-6 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="relative">
                  <img 
                    src={adminProfile.avatar} 
                    alt={adminProfile.name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#16a34a]"
                  />
                  <div className="absolute bottom-0 right-0 p-1.5 bg-[#09090b] text-white rounded-full shadow-md cursor-pointer hover:bg-[#16a34a] transition-colors">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#09090b]">{adminProfile.name}</h4>
                  <p className="text-xs text-zinc-500">{adminProfile.role}</p>
                  <span className="inline-block mt-2 text-xs font-bold text-[#16a34a] bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                    Verified Administrator
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-2">Display Name</label>
                  <input
                    name="name"
                    defaultValue={adminProfile.name}
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    defaultValue={adminProfile.email}
                    required
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-2">Phone Number</label>
                  <input
                    name="phone"
                    defaultValue={adminProfile.phone}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-2">Role Title</label>
                  <input
                    name="title"
                    defaultValue={adminProfile.title}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="p-4 bg-zinc-900 text-white rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#16a34a]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Security Credentials</span>
                </div>
                <button
                  type="button"
                  onClick={() => showToast('Password reset link sent to admin email')}
                  className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Change Password / Enable 2FA
                </button>
              </div>

              <div className="pt-4 flex items-center justify-end gap-4 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setIsAdminProfileModalOpen(false)}
                  className="px-6 py-3 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 text-xs font-extrabold bg-[#16a34a] text-white rounded-xl hover:bg-[#15803d] transition-all shadow-md shadow-[#16a34a]/20"
                >
                  Save Profile Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ADD / EDIT PRODUCT ================= */}
      {isAddEditProductOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-[#09090b]">
                {editingProduct ? 'Edit Product Details' : 'Add New Catalog Product'}
              </h2>
              <button 
                onClick={() => setIsAddEditProductOpen(false)}
                className="p-2 text-zinc-400 hover:text-black rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleSaveProduct({
                  title: formData.get('title'),
                  price: parseFloat(formData.get('price')),
                  category: formData.get('category'),
                  stock: parseInt(formData.get('stock')),
                  status: formData.get('status')
                });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Product Title</label>
                <input
                  name="title"
                  defaultValue={editingProduct?.title || ''}
                  required
                  placeholder="e.g. Wireless Smart Headset"
                  className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#16a34a]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Price ($)</label>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    defaultValue={editingProduct?.price || ''}
                    required
                    placeholder="49.99"
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Stock Count</label>
                  <input
                    name="stock"
                    type="number"
                    defaultValue={editingProduct?.stock ?? 10}
                    required
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#16a34a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue={editingProduct?.category || 'Electronics'}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#16a34a]"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Status</label>
                  <select
                    name="status"
                    defaultValue={editingProduct?.status || 'ACTIVE'}
                    className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#16a34a]"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setIsAddEditProductOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold text-zinc-600 hover:bg-zinc-100 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-extrabold bg-[#16a34a] text-white rounded-xl hover:bg-[#15803d] transition-all shadow-md shadow-[#16a34a]/20"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: ORDER DETAIL BREAKDOWN ================= */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-black text-[#09090b]">Order Details: {selectedOrder.id}</h2>
                <p className="text-xs text-zinc-400 mt-0.5">Placed on {selectedOrder.date}</p>
              </div>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="p-2 text-zinc-400 hover:text-black rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-xs">
                <div>
                  <span className="font-extrabold text-zinc-400 uppercase tracking-wider block mb-1">Customer Info</span>
                  <p className="font-bold text-[#09090b] text-sm">{selectedOrder.customer}</p>
                  <p className="text-zinc-500">{selectedOrder.email}</p>
                </div>
                <div>
                  <span className="font-extrabold text-zinc-400 uppercase tracking-wider block mb-1">Shipping Destination</span>
                  <p className="font-medium text-[#09090b]">{selectedOrder.shippingAddress}</p>
                  <p className="text-[#16a34a] font-bold mt-1">Payment Method: {selectedOrder.paymentMethod}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider mb-3">Order Line Items</h4>
                <div className="divide-y divide-zinc-100 border border-zinc-200 rounded-2xl overflow-hidden">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="p-4 flex justify-between items-center bg-white text-sm">
                      <div>
                        <p className="font-bold text-[#09090b]">{item.name}</p>
                        <p className="text-xs text-zinc-400">Qty: {item.qty} × ${item.price.toFixed(2)}</p>
                      </div>
                      <span className="font-black text-[#09090b]">${(item.qty * item.price).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="p-4 bg-zinc-50 flex justify-between items-center font-black text-base text-[#09090b]">
                    <span>Total Amount Paid</span>
                    <span className="text-[#16a34a]">${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-zinc-400">Fulfillment Status:</span>
                <select
                  value={selectedOrder.orderStatus}
                  onChange={(e) => handleOrderStatusChange(selectedOrder.id, e.target.value)}
                  className="text-xs font-black px-4 py-2 rounded-xl bg-[#09090b] text-white focus:outline-none cursor-pointer"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="PROCESSING">PROCESSING</option>
                  <option value="SHIPPED">SHIPPED</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: USER PROFILE & ACTIONS ================= */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-[#09090b]">Customer Profile</h2>
              <button 
                onClick={() => setSelectedUser(null)}
                className="p-2 text-zinc-400 hover:text-black rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-black text-xl mx-auto mb-3 shadow-lg shadow-[#16a34a]/20">
                {selectedUser.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg text-[#09090b]">{selectedUser.name}</h3>
              <p className="text-xs text-zinc-400">{selectedUser.email}</p>
            </div>

            <div className="space-y-3 text-xs mb-6 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">User ID:</span>
                <span className="font-mono font-bold text-[#09090b]">{selectedUser.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Account Role:</span>
                <span className="font-bold uppercase text-[#16a34a]">{selectedUser.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Lifetime Spend:</span>
                <span className="font-black text-[#09090b]">${selectedUser.totalSpent.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Default Address:</span>
                <span className="font-medium text-[#09090b] truncate max-w-[180px]">{selectedUser.address}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  showToast(`Password reset link sent to ${selectedUser.email}`);
                }}
                className="w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4 text-zinc-600" />
                <span>Trigger Password Reset</span>
              </button>

              <button
                onClick={() => {
                  handleToggleUserStatus(selectedUser.id);
                  setSelectedUser(null);
                }}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedUser.status === 'ACTIVE' 
                    ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
                    : 'bg-green-50 text-[#16a34a] border border-green-200 hover:bg-green-100'
                }`}
              >
                {selectedUser.status === 'ACTIVE' ? 'Suspend Account' : 'Reactivate Account'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: API ENDPOINTS INSPECTOR ================= */}
      {isApiModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#09090b] text-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-[#16a34a]" />
                <h2 className="text-lg font-extrabold text-white">REST API Readiness Documentation</h2>
              </div>
              <button 
                onClick={() => setIsApiModalOpen(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <p className="text-zinc-400 font-sans text-sm">
                This dashboard is designed to connect seamlessly with standard REST endpoints. Replace mock hooks with fetch/axios calls targeting these ready schemas:
              </p>

              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-[#16a34a] font-bold">GET</span> <span className="text-zinc-200">/api/v1/analytics/overview</span>
                <p className="text-zinc-500 font-sans text-xs">Returns metrics, revenue history, and daily order volumes.</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-[#16a34a] font-bold">POST</span> <span className="text-zinc-200">/api/v1/products</span>
                <p className="text-zinc-500 font-sans text-xs">Payload: &#123; title, price, category, stock, status, image &#125;</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-amber-400 font-bold">PATCH</span> <span className="text-zinc-200">/api/v1/orders/:id/status</span>
                <p className="text-zinc-500 font-sans text-xs">Payload: &#123; orderStatus: "SHIPPED" | "DELIVERED" | ... &#125;</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <span className="text-red-400 font-bold">POST</span> <span className="text-zinc-200">/api/v1/users/:id/toggle-status</span>
                <p className="text-zinc-500 font-sans text-xs">Payload: &#123; is_active: boolean &#125;</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setIsApiModalOpen(false)}
                className="px-5 py-2 bg-[#16a34a] text-white rounded-xl text-xs font-extrabold hover:bg-[#15803d]"
              >
                Close Documentation
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;