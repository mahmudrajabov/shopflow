import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PRODUCTS, HERO_IMAGE } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/10 via-transparent to-[#6320EE]/15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/5 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-[#6320EE]" />
                <span className="text-xs font-semibold text-[#0A0A0B]">New season drop</span>
              </div>
              <h1 className="font-bold tracking-tight text-[#0A0A0B] text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Tech that moves
                <br />
                <span className="bg-gradient-to-r from-[#2D5BFF] to-[#6320EE] bg-clip-text text-transparent">
                  at your speed.
                </span>
              </h1>
              <p className="mt-6 text-lg text-[#0A0A0B]/60 max-w-md leading-relaxed">
                A curated collection of premium devices, engineered for momentum
                and delivered with zero friction.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/catalog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0B] text-white font-semibold hover:bg-[#2D5BFF] transition-colors"
                >
                  Shop the catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/catalog?cat=Audio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 text-[#0A0A0B] font-semibold hover:border-[#6320EE] hover:text-[#6320EE] transition-colors"
                >
                  Explore audio
                </Link>
              </div>

              <div className="mt-10 flex gap-6 text-sm">
                {[
                  { icon: Truck, label: "Free shipping" },
                  { icon: ShieldCheck, label: "2-year warranty" },
                  { icon: RefreshCw, label: "30-day returns" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-[#0A0A0B]/70">
                    <f.icon className="w-4 h-4 text-[#6320EE]" />
                    <span className="font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#2D5BFF]/30 to-[#6320EE]/30 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#6320EE]/20 border border-white/40">
                <Image
                  src={HERO_IMAGE}
                  alt="Featured premium headphones"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[480px]"
                  fittingType="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0B]">
              Featured products
            </h2>
            <p className="text-[#0A0A0B]/50 mt-2">Hand-picked highlights from the collection.</p>
          </div>
          <Link
            to="/catalog"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#2D5BFF] hover:gap-2 transition-all"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Category band */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Audio", desc: "Immersive sound" },
            { name: "Computing", desc: "Power & precision" },
            { name: "Photography", desc: "Capture every detail" },
          ].map((c) => (
            <Link
              key={c.name}
              to={`/catalog?cat=${c.name}`}
              className="group relative rounded-2xl p-6 bg-gradient-to-br from-white to-[#FBFBFF] border border-black/5 overflow-hidden hover:shadow-xl hover:shadow-[#6320EE]/10 transition-all"
            >
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#2D5BFF]/10 to-[#6320EE]/10 group-hover:scale-150 transition-transform duration-500" />
              <h3 className="relative text-xl font-bold text-[#0A0A0B]">{c.name}</h3>
              <p className="relative text-[#0A0A0B]/50 text-sm mt-1">{c.desc}</p>
              <ArrowRight className="relative w-5 h-5 text-[#6320EE] mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}