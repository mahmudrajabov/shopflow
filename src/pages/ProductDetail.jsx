import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Check, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { Image } from "@/components/ui/image";
import { getProduct, PRODUCTS } from "@/data/products";
import { useStore } from "@/lib/store";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-[#0A0A0B]">Product not found</h1>
        <Link to="/catalog" className="text-[#2D5BFF] font-semibold mt-4 inline-block">
          Back to catalog
        </Link>
      </div>
    );
  }

  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 5;
  const fav = isFavorite(product.id);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0A0A0B]/60 hover:text-[#0A0A0B] mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FBFBFF] to-white border border-black/5 aspect-square">
            <Image src={product.image} alt={product.name} className="w-full h-full" fittingType="fit" />
            {outOfStock && (
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-[#0A0A0B] text-white text-sm font-semibold">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Data */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6320EE]">
            {product.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B] mt-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <StarRating rating={product.rating} />
            <span className="text-sm text-[#0A0A0B]/60">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-4xl font-bold text-[#0A0A0B]">${product.price}</span>
            {lowStock && (
              <span className="px-2.5 py-1 rounded-full bg-[#6320EE]/10 text-[#6320EE] text-xs font-semibold">
                Only {product.stock} left
              </span>
            )}
          </div>

          <p className="mt-6 text-[#0A0A0B]/70 leading-relaxed">{product.description}</p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-black/10 bg-white">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center text-[#0A0A0B] hover:text-[#6320EE] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-semibold text-[#0A0A0B]">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(product.stock || 99, q + 1))}
                disabled={outOfStock}
                className="w-11 h-11 flex items-center justify-center text-[#0A0A0B] hover:text-[#6320EE] transition-colors disabled:opacity-30"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => toggleFavorite(product.id)}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                fav
                  ? "bg-[#6320EE] border-transparent text-white"
                  : "bg-white border-black/10 text-[#0A0A0B] hover:border-[#6320EE]"
              }`}
              aria-label="Toggle favorite"
            >
              <Heart className={`w-5 h-5 ${fav ? "fill-white" : ""}`} />
            </button>
          </div>

          <button
            onClick={handleAdd}
            disabled={outOfStock}
            className="mt-4 w-full py-4 rounded-2xl bg-gradient-to-r from-[#2D5BFF] to-[#6320EE] text-white font-semibold text-lg shadow-lg shadow-[#6320EE]/30 hover:shadow-xl hover:shadow-[#6320EE]/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {added ? (
              <><Check className="w-5 h-5" /> Added to cart</>
            ) : (
              <><ShoppingBag className="w-5 h-5" /> {outOfStock ? "Out of Stock" : "Add to cart"}</>
            )}
          </button>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: Truck, label: "Free shipping" },
              { icon: ShieldCheck, label: "2-year warranty" },
              { icon: RefreshCw, label: "30-day returns" },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl bg-white border border-black/5 p-4 text-center">
                <f.icon className="w-5 h-5 text-[#6320EE] mx-auto mb-2" />
                <span className="text-xs font-medium text-[#0A0A0B]/70">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0B] mb-6">
            You may also like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}