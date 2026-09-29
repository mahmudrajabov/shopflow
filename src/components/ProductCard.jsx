import React from "react";
import { Link } from "react-router-dom";
import { Heart, Star, Plus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useStore } from "@/lib/store";

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const fav = isFavorite(product.id);
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 5;

  return (
    <div className="group relative rounded-2xl bg-white border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(99,32,238,0.25)] hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#FBFBFF]">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          fittingType="fit"
        />
        {outOfStock && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="px-3 py-1 rounded-full bg-[#0A0A0B] text-white text-xs font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        {lowStock && !outOfStock && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#6320EE] text-white text-[11px] font-semibold">
            Low Stock · {product.stock} left
          </span>
        )}
      </Link>

      <button
        onClick={() => toggleFavorite(product.id)}
        aria-label="Toggle favorite"
        className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
          fav
            ? "bg-[#6320EE] border-transparent text-white"
            : "bg-white/70 border-white/40 text-[#0A0A0B] hover:bg-white"
        }`}
      >
        <Heart className={`w-4 h-4 ${fav ? "fill-white" : ""}`} />
      </button>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6320EE]">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-[#0A0A0B]/60">
            <Star className="w-3.5 h-3.5 fill-[#2D5BFF] text-[#2D5BFF]" />
            <span className="font-medium text-[#0A0A0B]">{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-[#0A0A0B] leading-snug hover:text-[#2D5BFF] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-[#0A0A0B]">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={outOfStock}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2D5BFF] to-[#6320EE] text-white flex items-center justify-center shadow-lg shadow-[#6320EE]/30 transition-transform hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}