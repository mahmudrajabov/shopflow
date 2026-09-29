import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { useStore } from "@/lib/store";

const links = [
  { label: "Home", path: "/" },
  { label: "Catalog", path: "/catalog" },
  { label: "Cart", path: "/cart" },
];

export default function Navbar() {
  const { cartCount, favorites, cartPulse } = useStore();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/catalog?q=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2D5BFF] to-[#6320EE] flex items-center justify-center shadow-lg shadow-[#6320EE]/30">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#0A0A0B]">
                Shop<span className="text-[#6320EE]">Flow</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => {
                const active = location.pathname === l.path;
                return (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      active
                        ? "bg-[#0A0A0B] text-white"
                        : "text-[#0A0A0B]/70 hover:bg-black/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <form onSubmit={submitSearch} className="hidden lg:flex items-center flex-1 max-w-xs mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A0A0B]/40" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products"
                  className="w-full pl-9 pr-3 py-2 rounded-full bg-black/5 text-sm outline-none focus:bg-white focus:ring-2 ring-[#2D5BFF]/40 transition-all"
                />
              </div>
            </form>

            <div className="flex items-center gap-2">
              <Link
                to="/catalog?fav=1"
                className="relative p-2 rounded-full hover:bg-black/5 transition-all"
                aria-label="Favorites"
              >
                <Heart className="w-5 h-5 text-[#0A0A0B]" />
                {favorites.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#6320EE] text-white text-[10px] font-bold flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                className="relative p-2 rounded-full hover:bg-black/5 transition-all"
                aria-label="Cart"
              >
                <ShoppingBag
                  key={cartPulse}
                  className="w-5 h-5 text-[#0A0A0B]"
                  style={{ animation: cartPulse ? "cartpop 0.4s ease" : undefined }}
                />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#2D5BFF] text-white text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden p-2 rounded-full hover:bg-black/5 transition-all"
                aria-label="Menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden pb-4 space-y-1">
              <form onSubmit={submitSearch} className="px-1 pb-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A0A0B]/40" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                    className="w-full pl-9 pr-3 py-2 rounded-full bg-black/5 text-sm outline-none"
                  />
                </div>
              </form>
              {links.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-black/5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
      <style>{`@keyframes cartpop{0%{transform:scale(1)}40%{transform:scale(1.35)}100%{transform:scale(1)}}`}</style>
    </>
  );
}