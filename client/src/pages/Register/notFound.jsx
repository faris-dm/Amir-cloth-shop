import React from "react";

function NotFoundBrandPanel() {
  return (
    <div className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-between bg-neutral-900 text-white p-12">
      <span className="font-black uppercase tracking-tight text-2xl">
        Amir Store.
      </span>

      <div>
        <p className="text-3xl xl:text-4xl font-black uppercase leading-tight tracking-tight">
          Wrong page,
          <br />
          right store.
        </p>
        <p className="mt-4 text-sm text-neutral-400 max-w-xs">
          The page you're after doesn't exist
        </p>
      </div>

      <span className="text-xs text-neutral-500">
        © {new Date().getFullYear()} Store. All rights reserved.
      </span>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex bg-neutral-50 text-neutral-900">
      <NotFoundBrandPanel />

      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-10">
        <div className="w-full max-w-lg text-center">
          <div className="lg:hidden mb-8">
            <span className="font-black uppercase tracking-tight text-2xl">
              Store.
            </span>
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">
            Error 404
          </p>

          <h1 className="text-7xl sm:text-8xl font-black uppercase tracking-tight leading-none mb-6">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
            Page not found
          </h2>

          <p className="text-base text-neutral-500 mb-10 max-w-sm mx-auto">
            The page you're looking for was moved, sold out, or never
            existed. Let's get you back to shopping.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="rounded-md bg-neutral-900 text-white text-base font-semibold tracking-widest uppercase py-3.5 px-8 hover:bg-neutral-800 transition-colors">
              Back to home
            </a>
            <a
              href="/shop"
              className="rounded-md border border-neutral-300 text-neutral-900 text-base font-semibold tracking-widest uppercase py-3.5 px-8 hover:border-neutral-900 transition-colors"
            >
              Shop all
            </a>
          </div>

          {/* <div className="mt-10 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500">
              Or search for what you need:
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2 max-w-xs mx-auto"
            >
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-neutral-900 text-white p-3 hover:bg-neutral-800 transition-colors"
                aria-label="Search"
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
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}