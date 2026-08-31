import React, { useState, useEffect} from "react";
import Sitman from "../../images/back.png";
import Slow from "../../images/small.png";
import Tshirt from "../../images/whiteMan.png";


const APi_Base="http://localhost:2300"
/**
 * ------------------------------------------------------------------
 *  CHECKOUT PAGE
 * ------------------------------------------------------------------
 *  Structure:
 *    <CheckoutPage>
 *      ├─ Back button (exits checkout / goes to previous page)
 *      ├─ Title
 *      ├─ <StepTabs>            (Information / Shipping / Payment)
 *      ├─ Left column: step form (Information | Shipping | Payment)
 *      └─ Right column: <OrderSummary> (sticky on desktop)
 *
 *  Notes for devs:
 *  - Steps are controlled by the `step` state ("information" | "shipping" | "payment").
 *    Swap this for router-based steps (e.g. /checkout/shipping) if you need
 *    deep-linkable URLs.
 *  - `handleExit` is where you wire up real "leave checkout" behavior
 *    (e.g. navigate back to the cart page). Currently uses browser history.
 *  - Replace ORDER_ITEMS with real cart data (props / context / API).
 *  - Layout is intentionally LEFT-aligned (not centered) on large screens,
 *    matching the source design — see the page container comment below.
 * ------------------------------------------------------------------
 */

// ---- Mock cart data — replace with real cart state / API response ----
const ORDER_ITEMS = [
  {
    id: 1,
    name: "Basic Heavy T-Shirt",
    variant: "Black / L",
    qty: 1,
    price: 99,
    img: Sitman,
  },
  {
    id: 2,
    name: "Basic Fit T-Shirt",
    variant: "Black / L",
    qty: 1,
    price: 99,
    img: Slow,
  },
];

// ---- Checkout steps config — single source of truth for the tabs ----
const STEPS = [
  { key: "information", label: "Information" },
  { key: "shipping", label: "Shipping" },
  { key: "payment", label: "Payment" },
];

/**
 * StepTabs
 * Renders the Information / Shipping / Payment progress tabs.
 * Purely presentational — active step comes from the parent.
 */
function StepTabs({ active }) {
  const activeIndex = STEPS.findIndex((s) => s.key === active);
  return (
    <div className="flex items-center gap-4 sm:gap-6 border-b border-neutral-200 pb-3 overflow-x-auto">
      {STEPS.map((step, i) => {
        const isActive = i === activeIndex;
        const isDone = i < activeIndex;
        return (
          <div
            key={step.key}
            className={`whitespace-nowrap text-[15px] sm:text-[15px] font-bold tracking-widest uppercase pb-3 -mb-3 border-b-2 transition-colors ${
              isActive
                ? "border-neutral-900 text-neutral-900"
                : isDone
                ? "border-transparent text-neutral-500"
                : "border-transparent text-neutral-400"
            }`}
          >
            {step.label}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Field
 * Simple styled text input used across all form steps.
 * `label` is visually hidden but kept for screen readers — pass a real
 * htmlFor/id pair if you wire this to a form library.
 */
function Field({ label, placeholder, type = "text" }) {
  return (
    <div className="w-full">
      {label && <label className="sr-only">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-6 text-md text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
      />
    </div>
  );
}

/**
 * OrderSummary
 * Cart recap shown on the right (desktop) / below the form (mobile).
 * Pure UI — pass `subtotal` and `shipping` from parent so the total
 * always reflects the current step.
 */
function OrderSummary({ subtotal, shipping }) {
const [order,setOrder]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState(null)

useEffect(()=> {
fetch(`${APi_Base}/api/cart/cartItems`, {
  credentials: "include",
})
  .then((res) => {
    if (!res.ok) throw new Error("failed to get orders");
    return res.json();
  })
  .then((json) => {
    setOrder(json.data || []);
    setLoading(false);
  })
  .catch((err) => {
    setError(err.message);
    setLoading(false);
  });
},[])
if(loading) return <div>Loading  your Order</div>
if(error) return <div> Error:{error}</div>

  const total = subtotal + shipping;
  return (
    <div className="w-full lg:w-[520px] rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-900">
          Your Order
        </h2>
        <span className="text-[11px] font-medium text-neutral-500">
          ({ORDER_ITEMS.length})
        </span>
      </div>

      <ul className="space-y-8">
        {order.length === 0 ? (
          <div> there is no order yet</div>
        ) : (
          order.map((item) => (
            <li key={item.id} className="flex gap-5">
              <div className="h-28 w-24 sm:h-36 sm:w-28 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                <img
                  src={`${APi_Base}${item.image}`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* ...rest unchanged */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-neutral-900 leading-snug">
                    {item.title}
                  </p>
                  {/* TODO: wire this up to open an edit/variant-change modal */}
                  <button
                    type="button"
                    className="text-[11px] font-medium text-neutral-500 underline underline-offset-2 hover:text-neutral-900 whitespace-nowrap"
                  >
                    Change
                  </button>
                </div>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {item.variant}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-neutral-500">
                    ({item.qantity})
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">
                    ${item.price}
                  </span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>

      <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">Subtotal</span>
          <span className="font-medium text-neutral-900">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">Shipping</span>
          <span className="font-medium text-neutral-900">
            shipping:
            <label>
              {" "}
              {shipping > 0
                ? `$${shipping.toFixed(2)}`
                : "Calculated at next step"}
            </label>
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4">
        <span className="text-sm font-semibold text-neutral-900">Total</span>
        <span className="text-base font-bold text-neutral-900">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  // Active checkout step. Drives both the tabs and which form renders.
  const [step, setStep] = useState("information");
  const subtotal = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);

  /**
   * handleExit
   * Called when the top "Back" button is clicked.
   * Replace this with real navigation, e.g.:
   *   navigate("/cart")            // react-router
   *   router.push("/cart")         // next.js
   * Falls back to browser history so the button works out of the box.
   */
  const handleExit = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      // eslint-disable-next-line no-console
      console.log("Exit checkout → navigate to cart/shop page here");
    }
  };

  /**
   * goToPrevStep
   * Steps backward within the checkout flow (Payment → Shipping → Information).
   * Used by the in-form "Back" links on the Shipping and Payment steps.
   */
  const goToPrevStep = () => {
    const currentIndex = STEPS.findIndex((s) => s.key === step);
    if (currentIndex > 0) setStep(STEPS[currentIndex - 1].key);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900">
      {/*
        Page container:
        - No `mx-auto` centering — the design is LEFT-aligned, not centered,
          so on very wide screens the content sits toward the left with
          breathing room on the right, matching the source design.
        - Padding scales down on mobile (px-4) up to desktop (lg:px-16).
      */}
      <div className="w-full max-w-[1400px] px-4 sm:px-8 lg:px-16 py-6 sm:py-10">
        {/* Back button — always visible, exits the checkout flow */}
        <button
          type="button"
          onClick={handleExit}
          aria-label="Go back"
          className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 mb-6 sm:mb-10 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </button>

        <h1 className="font-black uppercase tracking-tight text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8">
          Checkout
        </h1>

        {/*
          Main layout grid:
          - Mobile / tablet (< lg): single column, form first, order summary
            below it (order summary shown after the form so shoppers fill
            in details first — flip with `order-first` if you'd rather show
            totals up top on mobile).
          - Desktop (lg+): two columns — form column is flexible (1fr),
            order summary column is a fixed 380px, mirroring the design.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 sm:gap-10 lg:gap-16 justify-between">
          {/* ================= LEFT: form column ================= */}
          <div className="min-w-0">
            <StepTabs active={step} />

            {/* ---------- STEP 1: Information ---------- */}
            {step === "information" && (
              <div className="mt-8 space-y-8">
                <section>
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-900 mb-4">
                    Contact Info
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field placeholder="Email" type="email" />
                    <Field placeholder="Phone" type="tel" />
                  </div>
                </section>

                <section>
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-900 mb-4">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field placeholder="First Name" />
                    <Field placeholder="Last Name" />

                    <div className="sm:col-span-2 relative">
                      <select className="w-full appearance-none rounded-md border border-neutral-300 bg-white px-3.5 py-3 text-sm text-neutral-500 outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900">
                        <option>Country</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Ethiopia</option>
                        <option>Canada</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>

                    <Field placeholder="State / Region" />
                    <Field placeholder="Address" />
                    <Field placeholder="City" />
                    <Field placeholder="Postal Code" />
                  </div>
                </section>

                {/* Step navigation — full width button on mobile, right-aligned on larger screens */}
                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setStep("shipping")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-17 py-8 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                  >
                    Shipping
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* ---------- STEP 2: Shipping ---------- */}
            {step === "shipping" && (
              <div className="mt-8 space-y-6">
                <section>
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-900 mb-4">
                    Shipping Method
                  </h2>
                  <div className="space-y-3 ">
                    {[
                      {
                        name: "Standard Shipping",
                        time: "4-6 business days",
                        price: 10,
                      },
                      {
                        name: "Express Shipping",
                        time: "2-3 business days",
                        price: 25,
                      },
                    ].map((option) => (
                      <label
                        key={option.name}
                        className="flex items-center justify-between gap-3 rounded-md border border-neutral-300 px-4 sm:py-7  cursor-pointer hover:border-neutral-900 transition-colors "
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <input
                            type="radio"
                            name="shippingMethod"
                            defaultChecked={option.name === "Standard Shipping"}
                            className="h-4 w-4 shrink-0 accent-neutral-900"
                          />
                          <div className="min-w-0">
                            <p className="text-lg font-medium text-neutral-900 truncate">
                              {option.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {option.time}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-neutral-900 shrink-0">
                          ${option.price}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Step navigation — stacks on mobile, row on larger screens */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="text-sm font-medium text-neutral-500 hover:text-neutral-900 text-center sm:text-left"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("payment")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-20 py-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                  >
                    Payment
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* ---------- STEP 3: Payment ---------- */}
            {step === "payment" && (
              <div className="mt-8 space-y-6">
                <section>
                  <h2 className="text-md font-semibold tracking-widest uppercase text-neutral-900 mb-6">
                    Payment Details
                  </h2>
                  <div className="grid grid-cols-1 gap-8">
                    <Field placeholder="Card Number" />
                    <div className="grid grid-cols-2 gap-7">
                      <Field placeholder="MM / YY" />
                      <Field placeholder="CVC" />
                    </div>
                    <Field placeholder="Name on Card" />
                  </div>
                </section>

                <label className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    className="h-6 w-6 rounded border-neutral-300 accent-neutral-900"
                  />
                  <span className="text-lg lg:text-md text-neutral-600">
                    I agree to the Terms and Conditions
                  </span>
                </label>

                {/* Step navigation — stacks on mobile, row on larger screens */}
                <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="text-md lg:text-lg font-medium text-neutral-500 hover:text-neutral-900 text-center sm:text-left"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="w-full  sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-15  py-6 text-md font-semibold text-white transition-colors hover:bg-neutral-800"
                  >
                    Pay ${(subtotal + 10).toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT: order summary column ================= */}
          {/* `lg:sticky` keeps totals visible while scrolling a long form on desktop */}
          <div className="lg:sticky lg:top-10 h-[400px]">
            <OrderSummary
              subtotal={subtotal}
              shipping={step === "information" ? 0 : 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
