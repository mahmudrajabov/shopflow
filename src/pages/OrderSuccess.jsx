import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Check, Package, ArrowRight } from "lucide-react";

export default function OrderSuccess() {
  const { state } = useLocation();
  const [printed, setPrinted] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPrinted((p) => Math.min(100, p + 4)), 40);
    return () => clearInterval(t);
  }, []);

  const orderId = state?.orderId || "SF-DEMO01";
  const total = state?.total?.toFixed(2) || "0.00";
  const email = state?.email || "your email";

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="relative w-24 h-24 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D5BFF] to-[#6320EE] blur-xl opacity-40 animate-pulse" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#2D5BFF] to-[#6320EE] flex items-center justify-center shadow-xl shadow-[#6320EE]/40">
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B]">
        Order confirmed!
      </h1>
      <p className="text-[#0A0A0B]/60 mt-3">
        Thank you for your purchase. A confirmation has been sent to {email}.
      </p>

      {/* Receipt */}
      <div className="mt-8 relative overflow-hidden rounded-2xl bg-white border border-black/5 text-left">
        <div className="h-2 bg-gradient-to-r from-[#2D5BFF] to-[#6320EE]" />
        <div
          className="p-6 transition-all"
          style={{ maxHeight: `${printed * 4}px`, opacity: printed / 100 }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-[#6320EE]" />
              <span className="font-bold text-[#0A0A0B]">Receipt</span>
            </div>
            <span className="text-xs font-mono text-[#0A0A0B]/50">{orderId}</span>
          </div>
          <div className="space-y-1 text-sm text-[#0A0A0B]/70">
            <div className="flex justify-between"><span>Order ID</span><span className="font-mono">{orderId}</span></div>
            <div className="flex justify-between"><span>Date</span><span>{new Date().toLocaleDateString()}</span></div>
            <div className="flex justify-between"><span>Status</span><span className="text-green-600 font-medium">Paid</span></div>
            <div className="border-t border-dashed border-black/10 my-3" />
            <div className="flex justify-between font-bold text-[#0A0A0B] text-base">
              <span>Total paid</span><span>${total}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0B] text-white font-semibold hover:bg-[#2D5BFF] transition-colors"
        >
          Continue shopping <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 text-[#0A0A0B] font-semibold hover:border-[#6320EE] hover:text-[#6320EE] transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}