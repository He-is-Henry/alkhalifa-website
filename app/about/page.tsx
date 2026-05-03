const values = [
  { title: "Ethics First", desc: "Every decision, every lesson, every interaction is grounded in strong moral values." },
  { title: "Heritage & Identity", desc: "We celebrate our culture and faith as a foundation, not a barrier, to global excellence." },
  { title: "Innovation", desc: "We embrace modern methods and technology to prepare students for a rapidly changing world." },
  { title: "Inclusivity", desc: "Every child, regardless of background or ability, deserves a quality education in a safe space." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1a4f2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl font-semibold">About ALKHIS</h1>
          <div className="w-16 h-0.5 bg-[#c8972a] mt-6" />
        </div>
      </section>

      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-xl p-10 border border-[#1a4f2a]/10 shadow-sm">
            <div className="w-10 h-1 bg-[#c8972a] mb-6" />
            <h2 className="font-serif text-[#1a4f2a] text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              To provide an inclusive, safe and nurturing learning environment that develops future global leaders
              who excel academically, physically and mentally — while maintaining their values and heritage.
            </p>
          </div>
          <div className="bg-[#0f2e18] rounded-xl p-10 shadow-sm">
            <div className="w-10 h-1 bg-[#c8972a] mb-6" />
            <h2 className="font-serif text-white text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              To build qualified future pioneers guided by strong ethics, deeply rooted in their heritage
              and led by a spirit of innovation — ready to take on the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-4">Our Motto</p>
          <blockquote className="font-serif text-[#1a4f2a] text-4xl sm:text-5xl font-semibold leading-snug">
            &ldquo;Education is a Right&rdquo;
          </blockquote>
          <p className="mt-6 text-gray-400 italic text-lg font-serif">Little Steps to Great Heights</p>
          <div className="w-16 h-0.5 bg-[#c8972a] mx-auto mt-8" />
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            At Al-Khalifah International School, we believe every child deserves access to quality education —
            not as a privilege, but as a fundamental right.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-serif text-[#1a4f2a] text-4xl sm:text-5xl font-semibold">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="relative bg-white rounded-xl p-8 border border-[#1a4f2a]/10 shadow-sm">
                <span className="absolute top-6 right-6 font-serif text-6xl text-[#1a4f2a]/5 font-bold leading-none select-none">
                  {i + 1}
                </span>
                <h3 className="font-serif text-[#1a4f2a] text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="font-serif text-[#1a4f2a] text-4xl font-semibold mb-6">Located in the Heart of Surulere</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our school is situated in a quiet, accessible area of Surulere, Lagos — a calm and focused
              learning environment for every student.
            </p>
            <address className="not-italic space-y-2 text-gray-600">
              <p className="font-medium text-[#1a4f2a]">Al-Khalifah International School</p>
              <p>Behind Block 22, Rabiatu Thompson Crescent</p>
              <p>Surulere, Lagos</p>
              <div className="pt-2 space-y-1">
                <a href="tel:08111687000" className="block text-[#1a4f2a] hover:text-[#c8972a] transition-colors">08111687000</a>
                <a href="tel:08023348687" className="block text-[#1a4f2a] hover:text-[#c8972a] transition-colors">08023348687</a>
                <a href="tel:08186292949" className="block text-[#1a4f2a] hover:text-[#c8972a] transition-colors">08186292949</a>
              </div>
            </address>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#1a4f2a]/10 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.3521!3d6.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4b3b3b3b3b%3A0x0!2sSurulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al-Khalifah International School Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
