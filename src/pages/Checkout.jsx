import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, CreditCard, Lock } from "lucide-react";
import { useStore } from "@/lib/store";

const STEPS = ["Contact", "Shipping", "Payment"];

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    card: "",
    expiry: "",
    cvc: "",
  });

  const shipping = cartTotal > 100 ? 0 : cart.length > 0 ? 9.99 : 0;
  const tax = +(cartTotal * 0.08).toFixed(2);
  const grandTotal = +(cartTotal + shipping + tax).toFixed(2);

  if (cart.length === 0 && step < 3) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#0A0A0B]">Your cart is empty</h1>
        <button
          onClick={() => navigate("/catalog")}
          className="mt-4 text-[#2D5BFF] font-semibold"
        >
          Browse catalog
        </button>
      </div>
    );
  }

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const next = () => {
    if (step < 2) setStep((s) => s + 1);
    else {
      const orderId = "SF-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      clearCart();
      navigate("/order-success", { state: { orderId, total: grandTotal, email: form.email } });
    }
  };

  const fields = [
    [
      { key: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
    ],
    [
      { key: "name", label: "Full name", type: "text", placeholder: "Alex Morgan" },
      { key: "address", label: "Address", type: "text", placeholder: "123 Market St" },
      { key: "city", label: "City", type: "text", placeholder: "San Francisco" },
      { key: "zip", label: "ZIP / Postal code", type: "text", placeholder: "94103" },
      { key: "country", label: "Country", type: "text", placeholder: "United States" },
    ],
    [
      { key: "card", label: "Card number", type: "text", placeholder: "4242 4242 4242 4242" },
      { key: "expiry", label: "Expiry", type: "text", placeholder: "MM / YY" },
      { key: "cvc", label: "CVC", type: "text", placeholder: "123" },
    ],
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] mb-2">
        Checkout
      </h1>
      <p className="text-[#0A0A0B]/50 mb-8 flex items-center gap-1.5">
        <Lock className="w-4 h-4" /> Demo checkout — no real payment is processed.
      </p>

      {/* Stepper */}
      <div className="flex items-center mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  i <= step
                    ? "bg-gradient-to-br from-[#2D5BFF] to-[#6320EE] text-white"
                    : "bg-black/5 text-[#0A0A0B]/40"
                }`}
              >
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-sm font-medium hidden sm:inline ${i <= step ? "text-[#0A0A0B]" : "text-[#0A0A0B]/40"}`}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-3 rounded ${i < step ? "bg-[#6320EE]" : "bg-black/10"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <h2 className="font-bold text-lg text-[#0A0A0B] mb-4">{STEPS[step]}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {fields[step].map((f) => (
                <div key={f.key} className={f.key === "address" || f.key === "email" || f.key === "card" ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-semibold text-[#0A0A0B]/60 mb-1.5 uppercase tracking-wider">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    value={form[f.key]}
                    onChange={(e) => set(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBFBFF] border border-black/10 outline-none focus:ring-2 ring-[#2D5BFF]/40 transition-all"
                  />
                </div>
              ))}
            </div>

            {step === 2 && (
              <div className="mt-4 flex items-center gap-2 text-xs text-[#0A0A0B]/50 bg-[#6320EE]/5 rounded-xl p-3">
                <CreditCard className="w-4 h-4 text-[#6320EE]" />
                Use any values — this is a demo. No card is charged.
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="px-5 py-3 rounded-xl border border-black/10 text-[#0A0A0B] font-medium hover:bg-black/5 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={next}
                className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-[#2D5BFF] to-[#6320EE] text-white font-semibold shadow-lg shadow-[#6320EE]/30 hover:shadow-xl transition-all"
              >
                {step < 2 ? "Continue" : `Pay $${grandTotal.toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <h2 className="font-bold text-lg text-[#0A0A0B] mb-4">Summary</h2>
            <div className="space-y-3 max-h-48 overflow-auto mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-[#0A0A0B]/70 line-clamp-1 pr-2">
                    {item.name} × {item.qty}
                  </span>
                  <span className="font-medium text-[#0A0A0B] shrink-0">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-black/10 pt-3 space-y-1.5 text-sm">
              <div className="flex justify-between text-[#0A0A0B]/70">
                <span>Subtotal</span><span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#0A0A0B]/70">
                <span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-[#0A0A0B]/70">
                <span>Tax</span><span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-[#0A0A0B] pt-2">
                <span>Total</span><span className="text-xl">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}