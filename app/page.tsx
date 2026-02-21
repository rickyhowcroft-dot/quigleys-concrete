"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

type Category = {
  name: string;
  desc: string;
  cover: string;
  photos: { src: string; alt: string }[];
};

const categories: Category[] = [
  {
    name: "Patios",
    desc: "Beautiful outdoor living spaces built to last.",
    cover: "/gallery/large-patio.jpg",
    photos: [
      { src: "/gallery/large-patio.jpg", alt: "Large stamped concrete patio" },
      { src: "/gallery/front-patio.jpg", alt: "Stamped front patio with flower pots" },
      { src: "/gallery/backyard-patio.jpg", alt: "Backyard stamped patio" },
      { src: "/gallery/flagstone-furniture.jpg", alt: "Flagstone patio with outdoor furniture" },
      { src: "/gallery/copper-stamped.jpg", alt: "Copper-toned stamped patio" },
      { src: "/gallery/under-deck.jpg", alt: "Under-deck stamped patio" },
      { src: "/gallery/retaining-wall-patio.jpg", alt: "Stamped patio with retaining wall" },
      { src: "/gallery/patio-walkway.jpg", alt: "Patio with decorative walkway" },
      { src: "/gallery/backyard-pour.jpg", alt: "Large backyard concrete pour" },
      { src: "/gallery/before-after.jpg", alt: "Before and after patio transformation" },
    ],
  },
  {
    name: "Sidewalks",
    desc: "Safe, durable walkways for homes and businesses.",
    cover: "/gallery/curved-walkway.jpg",
    photos: [
      { src: "/gallery/curved-walkway.jpg", alt: "Curved stamped walkway with decorative border" },
      { src: "/gallery/walkway-planters.jpg", alt: "Walkway with stone planters" },
      { src: "/gallery/sidewalk-new.jpg", alt: "New construction sidewalk" },
      { src: "/gallery/sidewalk-long.jpg", alt: "Long sidewalk pour" },
      { src: "/gallery/sidewalk-side.jpg", alt: "Side walkway pour" },
      { src: "/gallery/cobblestone-detail.jpg", alt: "Cobblestone stamped walkway detail" },
    ],
  },
  {
    name: "Driveways",
    desc: "Strong driveways that stand up to Rochester winters.",
    cover: "/gallery/driveway.jpg",
    photos: [
      { src: "/gallery/driveway.jpg", alt: "Fresh concrete driveway pour" },
    ],
  },
  {
    name: "Foundations",
    desc: "Solid foundations for new construction and additions.",
    cover: "/gallery/barn-floor.jpg",
    photos: [
      { src: "/gallery/barn-floor.jpg", alt: "Barn floor concrete pour" },
      { src: "/gallery/pavilion-pad.jpg", alt: "Pavilion concrete pad by pool" },
      { src: "/gallery/pavilion-pad-2.jpg", alt: "Pavilion pad pour" },
    ],
  },
  {
    name: "Stamped Concrete",
    desc: "Decorative patterns that elevate any surface.",
    cover: "/gallery/firepit-patio.jpg",
    photos: [
      { src: "/gallery/firepit-patio.jpg", alt: "Stamped flagstone patio with fire pit" },
      { src: "/gallery/firepit-close.jpg", alt: "Stamped fire pit patio close-up" },
      { src: "/gallery/flagstone-steps.jpg", alt: "Flagstone patio with steps and fire pit" },
      { src: "/gallery/flagstone-patio.jpg", alt: "Flagstone patio by deck stairs" },
      { src: "/gallery/stamped-detail.jpg", alt: "Stamped concrete close-up detail" },
      { src: "/gallery/stamped-patio-stairs.jpg", alt: "Stamped patio next to stairs" },
      { src: "/gallery/pool-deck-wide.jpg", alt: "Stamped patio with retaining wall" },
      { src: "/gallery/copper-stamped.jpg", alt: "Copper-toned stamped patio" },
      { src: "/gallery/cobblestone-detail.jpg", alt: "Cobblestone stamped detail" },
    ],
  },
  {
    name: "Decorative Concrete",
    desc: "Custom colors, textures, and finishes.",
    cover: "/gallery/wood-grain.jpg",
    photos: [
      { src: "/gallery/wood-grain.jpg", alt: "Wood grain stamped concrete" },
      { src: "/gallery/red-door-close.jpg", alt: "Stamped concrete entry close-up" },
      { src: "/gallery/red-door-steps.jpg", alt: "Stamped entry with red door" },
      { src: "/gallery/front-patio.jpg", alt: "Decorative stamped front patio" },
      { src: "/gallery/curved-walkway.jpg", alt: "Decorative curved walkway" },
    ],
  },
  {
    name: "Pool Decks",
    desc: "Durable, slip-resistant concrete around your pool.",
    cover: "/gallery/pool-surround.jpg",
    photos: [
      { src: "/gallery/pool-surround.jpg", alt: "Concrete pool surround" },
      { src: "/gallery/pool-deck.jpg", alt: "Pool deck patio" },
      { src: "/gallery/pool-deck-wide.jpg", alt: "Pool deck with retaining wall" },
      { src: "/gallery/pavilion-pad.jpg", alt: "Pavilion pad by pool" },
      { src: "/gallery/pavilion-pad-2.jpg", alt: "Pavilion pad pour by pool" },
    ],
  },
  {
    name: "Steps & Stoops",
    desc: "Sturdy entryways and staircases.",
    cover: "/gallery/red-door-steps.jpg",
    photos: [
      { src: "/gallery/red-door-steps.jpg", alt: "Stamped entry with red door" },
      { src: "/gallery/red-door-close.jpg", alt: "Stamped concrete entry detail" },
      { src: "/gallery/stamped-steps.jpg", alt: "Stamped concrete steps" },
      { src: "/gallery/front-entry.jpg", alt: "Front entry concrete with stone border" },
      { src: "/gallery/flagstone-steps.jpg", alt: "Flagstone patio with steps" },
    ],
  },
];

function Carousel({ category, onClose }: { category: Category; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const total = category.photos.length;

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center" onClick={onClose}>
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <h3 className="text-white text-xl md:text-2xl font-bold">{category.name}</h3>
        <button onClick={onClose} className="text-white text-3xl hover:text-orange-400 transition leading-none">&times;</button>
      </div>

      <div className="relative w-full max-w-4xl px-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {total > 1 && (
          <button onClick={prev} className="absolute left-2 md:left-4 z-10 bg-black/60 hover:bg-orange-500 text-white w-12 h-12 rounded-full text-2xl font-bold transition flex items-center justify-center">
            ‹
          </button>
        )}

        <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={category.photos[idx].src}
            alt={category.photos[idx].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>

        {total > 1 && (
          <button onClick={next} className="absolute right-2 md:right-4 z-10 bg-black/60 hover:bg-orange-500 text-white w-12 h-12 rounded-full text-2xl font-bold transition flex items-center justify-center">
            ›
          </button>
        )}
      </div>

      <div className="mt-4 text-gray-400 text-sm">{idx + 1} of {total}</div>

      {total > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto px-4 max-w-4xl" onClick={(e) => e.stopPropagation()}>
          {category.photos.map((photo, i) => (
            <button
              key={photo.src + i}
              onClick={() => setIdx(i)}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition ${
                i === idx ? "border-orange-500 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {activeCategory && <Carousel category={activeCategory} onClose={() => setActiveCategory(null)} />}

      {/* Nav */}
      <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="mailto:Quigleysconcrete@gmail.com" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm">
            ✉️ Email Us
          </a>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-orange-400 transition hidden sm:inline">About</a>
            <a href="#services" className="text-gray-300 hover:text-orange-400 transition hidden sm:inline">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-400 transition hidden sm:inline">Contact</a>
            <a href="tel:5858317241" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition">
              📞 Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <Image src="/logo.jpg" alt="Quigley's Concrete" width={180} height={180} className="mx-auto mb-8 rounded-xl shadow-2xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Quigley&apos;s Concrete</h1>
          <p className="text-xl text-orange-400 font-semibold mb-6">Patios &bull; Sidewalks &bull; Driveways</p>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
            Family-owned concrete contractor serving the Rochester, NY area.
            With over 20 years of experience, you can trust us with your patios,
            sidewalks, and all your concrete&nbsp;needs.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition shadow-lg">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">About Us</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-10 rounded"></div>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            <p>Quigley&apos;s Concrete is a family-owned and operated business with over 20 years of experience in the concrete&nbsp;industry.</p>

            <p>We specialize in patios, sidewalks, and all types of flatwork for residential and commercial&nbsp;customers.</p>

            <p>No job is too big or too small. From a simple sidewalk to a brand-new stamped patio, we bring the same level of craftsmanship and attention to detail to every&nbsp;project.</p>

            <p>Based in Walworth, NY, we proudly serve the greater Rochester area and surrounding communities. When you work with us, you work directly with the owner — that&apos;s our guarantee of&nbsp;quality.</p>
          </div>

          <div className="mt-10">
            <Image src="/owners.jpg" alt="Quigley's Concrete owners" width={380} height={475} className="mx-auto rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4" style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">Our Services</h2>
          <p className="text-gray-500 text-center mb-3">Tap any category to browse our work</p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-10 rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat)}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-orange-400 transition group text-left cursor-pointer"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image src={cat.cover} alt={cat.name} fill className="object-cover group-hover:scale-105 transition duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">{cat.name}</h3>
                  </div>
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                    {cat.photos.length} photos
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                  <p className="text-orange-500 text-sm font-semibold mt-2 group-hover:text-orange-600 transition">View Gallery →</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get Your Free Estimate</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-10 rounded"></div>
          <div className="text-lg text-gray-300 mb-10 space-y-1">
            <p>Ready to start your project?</p>
            <p>Give us a call, send an email, or reach out on Facebook.</p>
            <p>We&apos;d love to hear from you!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            <a href="tel:5858317241" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition group">
              <div className="text-3xl mb-3">📞</div>
              <div className="font-bold text-orange-400 group-hover:text-orange-300 text-lg">(585) 831-7241</div>
              <div className="text-gray-400 text-sm mt-1">Tap to call</div>
            </a>
            <a href="mailto:Quigleysconcrete@gmail.com" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition group">
              <div className="text-3xl mb-3">✉️</div>
              <div className="font-bold text-orange-400 group-hover:text-orange-300 text-base sm:text-lg break-all">Quigleysconcrete<wbr />@gmail.com</div>
              <div className="text-gray-400 text-sm mt-1">Tap to email</div>
            </a>
            <a href="https://www.facebook.com/QuigleysConcrete/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition group">
              <div className="text-3xl mb-3">📘</div>
              <div className="font-bold text-orange-400 group-hover:text-orange-300 text-lg">Facebook</div>
              <div className="text-gray-400 text-sm mt-1">Message us</div>
            </a>
          </div>
          <a href="tel:5858317241" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg text-xl font-extrabold transition shadow-lg">
            Request a Free Estimate →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center">
        <p className="text-orange-400 font-semibold text-base mb-1">Built different. Poured better.</p>
        <p className="text-gray-400 italic text-sm mb-4">We make hard stuff look easy.</p>
        <p className="text-gray-500 text-xs">© 2026 Quigley&apos;s Concrete. All rights reserved.</p>
      </footer>
    </main>
  );
}
