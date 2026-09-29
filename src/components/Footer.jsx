import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#1A0B3D] text-white">
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[22vw] font-black tracking-tighter text-white/[0.04] leading-none">
          ShopFlow
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2D5BFF] to-[#6320EE] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">ShopFlow</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              A velocity interface for modern commerce. Curated tech, delivered
              with momentum.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Shop</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link to="/catalog" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/catalog?cat=Audio" className="hover:text-white transition-colors">Audio</Link></li>
              <li><Link to="/catalog?cat=Computing" className="hover:text-white transition-colors">Computing</Link></li>
              <li><Link to="/catalog?cat=Photography" className="hover:text-white transition-colors">Photography</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} ShopFlow. All rights reserved.</p>
          <p>Designed with luminous transactionalism.</p>
        </div>
      </div>
    </footer>
  );
}