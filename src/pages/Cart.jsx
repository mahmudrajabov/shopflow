import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useStore } from "@/lib/store";

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal, favorites } = useStore();

  const shipping = cartTotal > 100 ? 0 : cart.length > 0 ? 9.99 : 0;
  const tax = +(cartTotal * 0.08).toFixed(2);
  const grandTotal = +(cartTotal + shipping + tax).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-[#6320EE]/10 flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-9 h-9 text-[#6320EE]" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#0A0A0B]">Your cart is empty</h1>
        <p className="text-[#0A0A0B]/50 mt-2">Discover something you'll love in the catalog.</p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#0A0A0B] text-white font-semibold hover:bg-[#2D5BFF] transition-colors"
        >
          Browse catalog <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] mb-8">
        Your cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-2xl bg-white border border-black/5"
            >
              <Link to={`/product/${item.id}`} className="shrink-0">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-[#FBFBFF]">
                  <Image src={item.image} alt={item.name} className="w-full h-full" fittingType="fit" />
                </div>
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold text-[#0A0A0B] hover:text-[#2D5BFF] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-sm text-[#0A0A0B]/50 mt-0.5">${item.price}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center rounded-full border border-black/10">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:text-[#6320EE]"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:text-[#6320EE]"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#0A0A0B]">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#0A0A0B]/40 hover:bg-red-50 hover:text-red-500 transition-colors"
                      aria-label="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <h2 className="font-bold text-lg text-[#0A0A0B] mb-4">Order summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#0A0A0B]/70">
                <span>Subtotal</span>
                <span className="font-medium text-[#0A0A0B]">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#0A0A0B]/70">
                <span>Shipping</span>
                <span className="font-medium text-[#0A0A0B]">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-[#0A0A0B]/70">
                <span>Tax (8%)</span>
                <span className="font-medium text-[#0A0A0B]">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-black/10 my-3" />
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-[#0A0A0B]">Total</span>
                <span className="text-2xl font-bold text-[#0A0A0B]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#2D5BFF] to-[#6320EE] text-white font-semibold shadow-lg shadow-[#6320EE]/30 hover:shadow-xl transition-all"
            >
              Checkout <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/catalog"
              className="mt-3 w-full inline-flex items-center justify-center py-2.5 rounded-2xl text-[#0A0A0B]/60 hover:text-[#0A0A0B] text-sm font-medium transition-colors"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}