import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/**
 * ------------------------------------------------------------------
 *  PROFILE PAGE
 * ------------------------------------------------------------------
 *  Sections: Account (username/email/password/avatar), Orders, Cart.
 *  Logout now opens a confirmation modal before actually logging out,
 *  and shows a spinner on the confirm button while it processes.
 *
 *  BACKEND WIRING — everything a real API needs is marked with TODO.
 * ------------------------------------------------------------------
 */

// TODO: replace with data fetched from your auth/user endpoint (e.g. GET /api/me)
const initialUser = {
  username: "jordan_smith",
  email: "jordan@example.com",
  avatarUrl: "",
};

// TODO: replace with GET /api/orders
const initialOrders = [
  {
    id: "ORD-1042",
    date: "Aug 3, 2026",
    status: "Delivered",
    total: "$129.98",
  },
  { id: "ORD-1031", date: "Jul 21, 2026", status: "Shipped", total: "$59.99" },
  {
    id: "ORD-1019",
    date: "Jul 2, 2026",
    status: "Delivered",
    total: "$219.97",
  },
];

// TODO: replace with GET /api/cart
const initialCart = [
  { id: "c1", title: "Basic Heavy T-Shirt", price: "$199.99", qty: 1 },
  { id: "c2", title: "Straight Fit Jeans", price: "$299.99", qty: 2 },
];

const TABS = [
  { key: "account", label: "Account" },
  { key: "orders", label: "Orders" },
  { key: "cart", label: "Cart" },
];

function Field({ label, id, type = "text", value, onChange, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
        className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
      />
    </div>
  );
}

function Avatar({ avatarUrl, username, onPick }) {
  const inputRef = useRef(null);
  const initial = username ? username[0].toUpperCase() : "?";

  return (
    <div className="flex items-center gap-4">
      <div className="relative shrink-0">
        <div className="h-16 w-16 rounded-full overflow-hidden bg-neutral-900 flex items-center justify-center text-white text-xl font-bold">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Profile avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            initial
          )}
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Change profile photo"
          className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-900 transition-colors"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onPick}
          className="hidden"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">{username}</p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-2"
        >
          Change photo
        </button>
      </div>
    </div>
  );
}

function AccountSection({ user, setUser }) {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // TODO: upload `file` to your storage (S3, Cloudinary, etc.) and use
    // the returned hosted URL instead of this local object URL.
    const localUrl = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, avatarUrl: localUrl }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSavedMsg("");
    try {
      // TODO: replace with your real PATCH /api/me call
      await new Promise((res) => setTimeout(res, 600)); // demo delay only
      setUser((prev) => ({ ...prev, username, email }));
      setCurrentPassword("");
      setNewPassword("");
      setSavedMsg("Changes saved.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <Avatar
        avatarUrl={user.avatarUrl}
        username={username}
        onPick={handleAvatarChange}
      />

      <form onSubmit={handleSave} className="space-y-5">
        <Field
          id="profile-username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Field
          id="profile-email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="pt-2 border-t border-neutral-200">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 mt-5">
            Change password
          </p>
          <div className="space-y-5">
            <Field
              id="profile-current-password"
              label="Current password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Leave blank to keep current"
            />
            <Field
              id="profile-new-password"
              label="New password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Leave blank to keep current"
              minLength={8}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-neutral-900 text-white text-sm font-semibold tracking-widest uppercase py-3 px-6 hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
          {savedMsg && (
            <span className="text-sm text-neutral-500">{savedMsg}</span>
          )}
        </div>
      </form>
    </div>
  );
}

function OrdersSection({ orders }) {
  if (orders.length === 0) {
    return (
      <p className="text-sm text-neutral-500">
        You haven't placed any orders yet.
      </p>
    );
  }
  return (
    <div className="space-y-3">
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between rounded-md border border-neutral-200 px-5 py-4"
        >
          <div>
            <p className="text-sm font-semibold text-neutral-900">{order.id}</p>
            <p className="text-xs text-neutral-500 mt-0.5">{order.date}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
              {order.status}
            </p>
            <p className="text-sm font-semibold text-neutral-900 mt-0.5">
              {order.total}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CartSection({ cartItems }) {
  if (cartItems.length === 0) {
    return <p className="text-sm text-neutral-500">Your cart is empty.</p>;
  }
  return (
    <div className="space-y-3">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-md border border-neutral-200 px-5 py-4"
        >
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              {item.title}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">Qty {item.qty}</p>
          </div>
          <p className="text-sm font-semibold text-neutral-900">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * LogoutModal
 * Confirmation dialog shown before logging out. Explains what happens,
 * and shows a spinner on the confirm button while `onConfirm` runs.
 */
function LogoutModal({ open, onCancel, onConfirm, loggingOut }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="logout-modal-title"
    >
      <div className="w-full max-w-sm rounded-md bg-white p-6">
        <h2
          id="logout-modal-title"
          className="text-lg font-bold text-neutral-900"
        >
          Log out of your account?
        </h2>
        <p className="mt-2 text-sm text-neutral-500">
          You'll be signed out of this device and returned to the login page.
          Any unsaved changes on this page will be lost. Your orders and cart
          will still be here next time you sign in.
        </p>

        <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={loggingOut}
            className="rounded-md border border-neutral-300 text-neutral-700 text-sm font-semibold py-2.5 px-5 hover:bg-neutral-100 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loggingOut}
            className="rounded-md bg-red-600 text-white text-sm font-semibold py-2.5 px-5 hover:bg-red-700 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loggingOut && (
              <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            )}
            {loggingOut ? "Logging out..." : "Yes, log out"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);
  const [orders] = useState(initialOrders);
  const [cartItems] = useState(initialCart);
  const [activeTab, setActiveTab] = useState("account");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogoutConfirm = async () => {
    setLoggingOut(true);
    try {
      // TODO: replace with your real logout logic — e.g.:
      // await fetch("/api/logout", { method: "POST" });
      // clearAuthToken(); / authContext.signOut();
      await new Promise((res) => setTimeout(res, 800)); // demo delay only
      navigate("/login");
    } finally {
      setLoggingOut(false);
      setShowLogoutModal(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900 px-4 sm:px-6 py-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8">
          My profile
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Side nav */}
          <nav className="md:w-48 shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-left text-sm font-semibold uppercase tracking-wide px-4 py-3 rounded-md whitespace-nowrap transition-colors ${
                    activeTab === tab.key
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block border-t border-neutral-200 mt-6 pt-6">
              <button
                onClick={() => setShowLogoutModal(true)}
                className="w-full text-left text-sm font-semibold uppercase tracking-wide px-4 py-3 rounded-md text-red-600 hover:bg-red-50 transition-colors"
              >
                Log out
              </button>
            </div>
          </nav>

          {/* Content */}
          <div className="flex-1 bg-white rounded-md border border-neutral-200 p-6 sm:p-8">
            {activeTab === "account" && (
              <AccountSection user={user} setUser={setUser} />
            )}
            {activeTab === "orders" && <OrdersSection orders={orders} />}
            {activeTab === "cart" && <CartSection cartItems={cartItems} />}
          </div>
        </div>

        {/* Logout — mobile only, since side nav's logout is hidden below md: */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="md:hidden w-full mt-6 text-left text-sm font-semibold uppercase tracking-wide px-4 py-3 rounded-md text-red-600 bg-white border border-neutral-200 hover:bg-red-50 transition-colors"
        >
          Log out
        </button>
      </div>

      <LogoutModal
        open={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
        loggingOut={loggingOut}
      />
    </div>
  );
}
