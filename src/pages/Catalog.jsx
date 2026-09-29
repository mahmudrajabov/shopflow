import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Heart } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useStore } from "@/lib/store";

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const { favorites, isFavorite, toggleFavorite } = useStore();
  const [query, setQuery] = useState(params.get("q") || "");
  const [category, setCategory] = useState(params.get("cat") || "All");
  const [sort, setSort] = useState("featured");
  const [favOnly, setFavOnly] = useState(params.get("fav") === "1");

  useEffect(() => {
    setQuery(params.get("q") || "");
    setCategory(params.get("cat") || "All");
    setFavOnly(params.get("fav") === "1");
  }, [params]);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (favOnly) list = list.filter((p) => isFavorite(p.id));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [category, sort, query, favOnly, isFavorite]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value && value !== "All" && !(key === "fav" && value === false)) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setParams(next, { replace: true });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B]">
          Catalog
        </h1>
        <p className="text-[#0A0A0B]/50 mt-1">
          {filtered.length} {filtered.length === 1 ? "product" : "products"} available
        </p>
      </div>

      {/* Search + sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A0A0B]/40" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              updateParam("q", e.target.value);
            }}
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-black/10 outline-none focus:ring-2 ring-[#2D5BFF]/40 transition-all"
          />
        </div>
        <div className="relative">
          <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A0A0B]/40 pointer-events-none" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="appearance-none pl-11 pr-10 py-3 rounded-2xl bg-white border border-black/10 outline-none focus:ring-2 ring-[#2D5BFF]/40 font-medium text-[#0A0A0B] cursor-pointer"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              updateParam("cat", c);
            }}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              category === c
                ? "bg-[#0A0A0B] text-white"
                : "bg-white border border-black/10 text-[#0A0A0B]/70 hover:border-[#6320EE] hover:text-[#6320EE]"
            }`}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => {
            const next = !favOnly;
            setFavOnly(next);
            updateParam("fav", next);
          }}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
            favOnly
              ? "bg-[#6320EE] text-white"
              : "bg-white border border-black/10 text-[#0A0A0B]/70 hover:border-[#6320EE]"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${favOnly ? "fill-white" : ""}`} />
          Favorites {favorites.length > 0 && `(${favorites.length})`}
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <div className="w-16 h-16 rounded-full bg-[#6320EE]/10 flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7 text-[#6320EE]" />
          </div>
          <h3 className="text-xl font-semibold text-[#0A0A0B]">No products found</h3>
          <p className="text-[#0A0A0B]/50 mt-1">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}