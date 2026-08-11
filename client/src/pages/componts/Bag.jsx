import React, { useState } from "react";

import Sitman from "../../images/back.png";
import Slow from "../../images/blackshirt.png";
import Tshirt from "../../images/whiteMan.png";

// ---- Mock cart data — replace with real cart state / API response ----
const INITIAL_ITEMS = [
  {
    id: 1,
    category: "Cotton T Shirt",
    name: "Full Sleeve Zipper",
    price: 99,
    qty: 1,
    color: "#111111",
    size: "L",
    img: Slow,
  },
  {
    id: 2,
    category: "Cotton T Shirt",
    name: "Basic Slim Fit T-Shirt",
    price: 99,
    qty: 1,
    color: "#111111",
    size: "L",
    img: Sitman,
  },
];

/**
 * QtyStepper
 * Vertical +/- stepper matching the reference design.
 * Purely controlled — parent owns the qty value and update logic.
 */
function QtyStepper({ qty, onIncrease, onDecrease }) {
  return (
    <div className="flex flex-col items-center border border-neutral-300 rounded-md overflow-hidden w-7 sm:w-8">
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="w-full py-1 text-neutral-500 hover:bg-neutral-100 transition-colors"
      >
        +
      </button>
      <span className="w-full text-center text-xs py-1 border-y border-neutral-300">
        {qty}
      </span>
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="w-full py-1 text-neutral-500 hover:bg-neutral-100 transition-colors"
      >
        −
      </button>
    </div>
  );
}

/**

 *   lg: (1024px) = 260px wide x 320px tall
 */
function ProductCard({ item, onRemove, onIncrease, onDecrease }) {
  return (
    // `mainImage` kept as a class hook for your own CSS if needed.
    // flex-col + gap: stacks the image row above the name/price row.
    // w-fit: card only takes as much width as its content needs, so
    // cards can sit side-by-side and wrap cleanly in the parent.
    <div className="mainImage flex flex-col gap-4 w-fit">
      {/* Top row: image + side control column, side-by-side always.
          gap scales up with screen size instead of being one fixed value. */}
      <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="relative w-[110px] h-[140px] sm:w-[160px] sm:h-[200px] md:w-[200px] md:h-[260px] lg:w-[260px] lg:h-[320px] shrink-0 overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          {/* Remove item */}
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name}`}
            className="absolute top-2 right-2 h-6 w-6 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 hover:bg-white transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* Reset / undo — wire up to revert to a previous variant if needed */}
          <button
            type="button"
            aria-label="Undo change"
            className="absolute bottom-2 left-2 h-6 w-6 rounded-full bg-white/90 flex items-center justify-center text-neutral-700 hover:bg-white transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>
        </div>

        {/* Control column: size label, color swatch, qty stepper */}
        <div className="quantity flex flex-col items-center gap-2 sm:gap-3 pt-1">
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            {item.size}
          </span>
          <span
            className="h-6 w-6 rounded-sm border border-neutral-300"
            style={{ backgroundColor: item.color }}
            aria-label="Selected color"
          />
          <QtyStepper
            qty={item.qty}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
        </div>
      </div>

      {/* Bottom row: category / name on the left, price on the right */}
      <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
        <div>
          <p className="text-xs text-neutral-500">{item.category}</p>
          <p className="text-sm sm:text-base font-semibold text-neutral-900">
            {item.name}
          </p>
        </div>
        <p className="text-sm sm:text-base font-semibold text-neutral-900 whitespace-nowrap">
          ${item.price}
        </p>
      </div>
    </div>
  );
}

/**
 * OrderSummary
 * Totals + terms checkbox + continue CTA.
 * Larger text, more internal spacing, and more padding than before —
 * fills its column width properly instead of shrinking to content.
 */
function OrderSummary({ subtotal, shipping, agreed, onToggleAgree }) {
  const total = subtotal + shipping;
  return (
    <div className=" rounded-xl border border-neutral-200 bg-white p-8 md:p-10 lg:p-12">
      <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase text-neutral-900 mb-6">
        Order Summary
      </h2>

      <div className="space-y-3 md:space-y-4">
        <div className="flex items-center justify-between text-base md:text-lg">
          <span className="text-neutral-500">Subtotal</span>
          <span className="font-medium text-neutral-900">${subtotal}</span>
        </div>
        <div className="flex items-center justify-between text-base md:text-lg">
          <span className="text-neutral-500">Shipping</span>
          <span className="font-medium text-neutral-900">${shipping}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-6">
        <span className="text-base md:text-lg font-semibold text-neutral-900">
          Total{" "}
          <span className="text-neutral-400 font-normal text-sm md:text-base">
            (Tax incl.)
          </span>
        </span>
        <span className="text-xl md:text-2xl font-bold text-neutral-900">
          ${total}
        </span>
      </div>

      <label className="flex items-center gap-3 mt-6">
        <input
          type="checkbox"
          checked={agreed}
          onChange={onToggleAgree}
          className="h-4 w-4 md:h-5 md:w-5 rounded border-neutral-300 accent-neutral-900"
        />
        <span className="text-xs md:text-sm text-neutral-600">
          I agree to the Terms and Conditions
        </span>
      </label>

      <button
        type="button"
        disabled={!agreed}
        className="w-full mt-6 rounded-md bg-neutral-900 text-white text-sm md:text-base font-semibold tracking-widest uppercase py-4 md:py-5 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-800"
      >
        Continue
      </button>
    </div>
  );
}

export default function ShoppingBagPage() {
  // Local cart state — replace with real cart context/API in production.
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [agreed, setAgreed] = useState(false);

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const increaseQty = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );

  const decreaseQty = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i))
    );

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = items.length > 0 ? 10 : 0;

  return (
    // FIXED TYPO: `w-ful` → `w-full`
    <div className="min-h-screen w-full bg-white text-neutral-900 pt-20">
      {/* Page padding scales down on mobile, up on larger screens */}
      <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8 mt-10">
        {/* "Shopping Bag" / "Favourites" tabs */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-xs font-semibold tracking-widest uppercase text-neutral-900">
            Shopping Bag
          </h1>
          <span className="h-3 w-px bg-neutral-300" />
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-700"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Favourites
          </button>
        </div>

        {/*
          Main layout — this is the fix for lg/md/mobile:
          - Base (phone): flex-col — cards stack on top, order summary
            sits below, both full width.
          - md and up (768px+): flex-row — cards on the left, order
            summary pinned to the right.
          - `justify-between` pushes the two sections to opposite edges
            once they're side-by-side, using the leftover space as the
            gap (instead of a fixed number like the old `lg:gap-180`,
            which wasn't even a valid class).
        */}
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-12 lg:gap-16">
          {/* ================= LEFT: product cards ================= */}
          {/* flex-wrap: cards drop to the next line instead of
              overflowing the screen on narrower widths. */}
          <div className="flex flex-wrap items-start gap-8 sm:gap-10 md:gap-8 lg:gap-12">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
              />
            ))}
          </div>

          {/* ================= RIGHT: order summary ================= */}
          {/* Width is now responsive instead of a fixed 600px — grows
              with the breakpoint, edit any of these px values directly. */}
          <div className="w-full md:w-[340px] lg:w-[420px] shrink-0 md:sticky md:top-8">
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              agreed={agreed}
              onToggleAgree={() => setAgreed((a) => !a)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
