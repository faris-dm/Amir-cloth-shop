import React, { useState } from "react";

function BrandPanel() {
  return (
    <div className="hidden lg:flex lg:w-[420px] xl:w-[580px] shrink-0 flex-col justify-between bg-neutral-900 text-white p-12">
      <span className="font-black uppercase tracking-tight text-2xl">
        Amir Store.
      </span>

      <div>
        <p className="text-3xl xl:text-4xl font-black uppercase leading-tight tracking-tight">
          Wear what Suits{" "}
          <label htmlFor="" className="text-gray-700">
            you.
          </label>
          <br />
        </p>
        <p className="mt-4 text-sm text-center text-neutral-400 max-w-xs">
          Minimal essentials, made to last.
          <p className=" pt-1">Join now</p>
        </p>
      </div>

      <span className="text-xs text-neutral-500">
        © {new Date().getFullYear()} Store. All rights reserved.
      </span>
    </div>
  );
}

function Field({ label, id, value, defaultValue, onChange, ...props }) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = String(currentValue ?? "").length > 0;
  const floated = focused || hovered || hasValue;

  const handleChange = (e) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        id={id}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
        className="w-full rounded-md border border-neutral-300 bg-white px-4 pt-7 pb-3 text-base text-neutral-700 outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-150 pointer-events-none ${
          floated
            ? "top-2.5 translate-y-0 text-xs text-neutral-500"
            : "top-1/2 -translate-y-1/2 text-base text-neutral-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function PasswordField({ label, id, value, defaultValue, onChange, ...props }) {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = String(currentValue ?? "").length > 0;
  const floated = focused || hovered || hasValue;

  const handleChange = (e) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        id={id}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
        type={visible ? "text" : "password"}
        className="w-full rounded-md border border-neutral-300 bg-white px-4 pt-7 pb-3 pr-12 text-base text-neutral-700 outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-150 pointer-events-none ${
          floated
            ? "top-2.5 translate-y-0 text-xs text-neutral-500"
            : "top-1/2 -translate-y-1/2 text-base text-neutral-400"
        }`}
      >
        {label}
      </label>
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
      >
        {visible ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
}

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field id="login-email" label="Email" type="email" required />
      <PasswordField id="login-password" label="Password" required />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-neutral-300 accent-neutral-900"
          />
          <span className="text-sm text-neutral-600">Remember me</span>
        </label>
        <a
          href="#"
          className="text-sm font-medium text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-neutral-900 text-white text-base font-semibold tracking-widest uppercase py-4 hover:bg-neutral-800 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
}

function RegisterForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordsMatch =
    confirmPassword.length === 0 || password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed || !passwordsMatch || isSubmitting) return;
    setIsSubmitting(true);
    console.log("Register submitted");
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field id="register-username" label="Username" type="text" required />
      <Field id="register-email" label="Email" type="email" required />

      <Field
        id="register-password"
        label="Password"
        type="text"
        minLength={8}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <PasswordField
          id="register-confirm-password"
          label="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!passwordsMatch && (
          <p className="mt-2 text-sm text-red-600">Passwords do not match.</p>
        )}
      </div>

      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed((a) => !a)}
          className="h-4 w-4 mt-0.5 rounded border-neutral-300 accent-neutral-900"
        />
        <span className="text-sm text-neutral-600">
          I agree to the Terms of Service and Privacy Policy
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreed || !passwordsMatch || isSubmitting}
        className="w-full rounded-md bg-neutral-900 text-white text-base font-semibold tracking-widest uppercase py-4 transition-colors hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting && (
          <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
        )}
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <div className="min-h-screen w-full flex bg-neutral-50 text-neutral-900">
      <BrandPanel />

      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-10">
        <div className="w-full max-w-lg">
          <div className="lg:hidden mb-8 text-center">
            <span className="font-black uppercase tracking-tight text-2xl">
              {/* <label htmlFor="" className="capitalize">Cloth</label> Store. */}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">
            {isLogin ? "Sign In" : "Create Account"}
          </h1>
          {isLogin && (
            <p className="text-base text-neutral-500 mb-9">Welcome back</p>
          )}
          {!isLogin && <div className="mb-7" />}

          {isLogin ? <LoginForm /> : <RegisterForm />}

          <p className="mt-7 text-center text-base text-neutral-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(isLogin ? "register" : "login")}
              className="font-semibold text-neutral-900 underline underline-offset-2 hover:text-neutral-700"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
