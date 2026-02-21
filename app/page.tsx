import Image from "next/image";

const galleryPhotos = [
  { src: "/gallery/firepit-patio.jpg", alt: "Stamped flagstone patio with built-in fire pit" },
  { src: "/gallery/large-patio.jpg", alt: "Large stamped concrete patio" },
  { src: "/gallery/pool-surround.jpg", alt: "Concrete pool surround" },
  { src: "/gallery/curved-walkway.jpg", alt: "Curved stamped walkway with decorative border" },
  { src: "/gallery/flagstone-furniture.jpg", alt: "Flagstone patio with outdoor furniture" },
  { src: "/gallery/red-door-steps.jpg", alt: "Stamped concrete entry with red door" },
  { src: "/gallery/pool-deck-wide.jpg", alt: "Stamped patio with retaining wall" },
  { src: "/gallery/copper-stamped.jpg", alt: "Copper-toned stamped patio" },
  { src: "/gallery/driveway.jpg", alt: "Fresh concrete driveway pour" },
  { src: "/gallery/walkway-planters.jpg", alt: "Walkway with stone planters" },
  { src: "/gallery/barn-floor.jpg", alt: "Barn floor concrete pour" },
  { src: "/gallery/wood-grain.jpg", alt: "Wood grain stamped concrete" },
  { src: "/gallery/before-after.jpg", alt: "Before and after patio transformation" },
  { src: "/gallery/retaining-wall-patio.jpg", alt: "Stamped patio with retaining wall" },
  { src: "/gallery/front-patio.jpg", alt: "Stamped front patio with flower pots" },
  { src: "/gallery/cobblestone-detail.jpg", alt: "Cobblestone stamped detail" },
  { src: "/gallery/flagstone-patio.jpg", alt: "Flagstone patio by deck stairs" },
  { src: "/gallery/under-deck.jpg", alt: "Under-deck stamped patio" },
  { src: "/gallery/stamped-patio-stairs.jpg", alt: "Stamped patio next to stairs" },
  { src: "/gallery/backyard-patio.jpg", alt: "Backyard stamped patio" },
  { src: "/gallery/pavilion-pad.jpg", alt: "Pavilion concrete pad by pool" },
  { src: "/gallery/backyard-pour.jpg", alt: "Large backyard concrete pour" },
  { src: "/gallery/stamped-detail.jpg", alt: "Stamped concrete close-up detail" },
  { src: "/gallery/firepit-close.jpg", alt: "Stamped fire pit patio close-up" },
  { src: "/gallery/flagstone-steps.jpg", alt: "Flagstone patio with steps and fire pit" },
  { src: "/gallery/front-entry.jpg", alt: "Front entry concrete with stone border" },
  { src: "/gallery/sidewalk-new.jpg", alt: "New construction sidewalk" },
  { src: "/gallery/stamped-steps.jpg", alt: "Stamped concrete steps" },
  { src: "/gallery/red-door-close.jpg", alt: "Stamped concrete entry close-up" },
  { src: "/gallery/pool-deck.jpg", alt: "Pool deck patio" },
  { src: "/gallery/patio-walkway.jpg", alt: "Patio with decorative walkway" },
  { src: "/gallery/sidewalk-long.jpg", alt: "Long sidewalk pour" },
  { src: "/gallery/pavilion-pad-2.jpg", alt: "Pavilion pad pour" },
  { src: "/gallery/sidewalk-side.jpg", alt: "Side walkway pour" },
];

const services = [
  { name: "Patios", desc: "Beautiful outdoor living spaces built to last.", img: "/gallery/large-patio.jpg" },
  { name: "Sidewalks", desc: "Safe, durable walkways for homes and businesses.", img: "/gallery/curved-walkway.jpg" },
  { name: "Driveways", desc: "Strong driveways that stand up to Rochester winters.", img: "/gallery/driveway.jpg" },
  { name: "Foundations", desc: "Solid foundations for new construction and additions.", img: "/gallery/barn-floor.jpg" },
  { name: "Stamped Concrete", desc: "Decorative patterns that elevate any surface.", img: "/gallery/copper-stamped.jpg" },
  { name: "Decorative Concrete", desc: "Custom colors, textures, and finishes.", img: "/gallery/wood-grain.jpg" },
  { name: "Pool Decks", desc: "Durable, slip-resistant concrete around your pool.", img: "/gallery/pool-surround.jpg" },
  { name: "Steps & Stoops", desc: "Sturdy entryways and staircases.", img: "/gallery/red-door-steps.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Nav */}
      <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Quigley's Concrete" width={44} height={44} className="rounded" />
            <span className="text-white font-bold text-lg hidden sm:inline">Quigley&apos;s Concrete</span>
          </a>
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-orange-400 transition hidden sm:inline">About</a>
            <a href="#services" className="text-gray-300 hover:text-orange-400 transition hidden sm:inline">Services</a>
            <a href="#gallery" className="text-gray-300 hover:text-orange-400 transition hidden sm:inline">Gallery</a>
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
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10" style={{ textWrap: 'balance' as never }}>
            Family-owned concrete contractor serving the Rochester, NY area.
            With over 20 years of experience, you can trust us with your patios,
            sidewalks, and all your concrete&nbsp;needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5858317241" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition shadow-lg">
              📞 (585) 831-7241
            </a>
            <a href="#contact" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition">
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

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p style={{ textWrap: 'balance' as never }}>Quigley&apos;s Concrete is a family-owned and operated business with over 20 years of experience in the concrete industry. We specialize in patios, sidewalks, and all types of flatwork for residential and commercial&nbsp;customers.</p>

            <p style={{ textWrap: 'balance' as never }}>No job is too big or too small. From a simple sidewalk to a brand-new stamped patio, we bring the same level of craftsmanship and attention to detail to every&nbsp;project.</p>

            <p style={{ textWrap: 'balance' as never }}>Based in Walworth, NY, we proudly serve the greater Rochester area and surrounding communities. When you work with us, you work directly with the owner — that&apos;s our guarantee of&nbsp;quality.</p>
          </div>

          <div className="mt-10">
            <Image src="/owners.jpg" alt="Quigley's Concrete owners" width={380} height={475} className="mx-auto rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">Our Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12 rounded"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-orange-300 transition group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={s.img} alt={s.name} fill className="object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-500 transition">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">Our Work</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12 rounded"></div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.facebook.com/QuigleysConcrete/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              See More on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Get Your Free Estimate</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8 rounded"></div>
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
