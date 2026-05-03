import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "15+", label: "Years of Excellence" },
  { value: "30+", label: "Qualified Educators" },
  { value: "6", label: "Academic Levels" },
];

const usps = [
  {
    icon: "📖",
    title: "Modern Standard Learning",
    desc: "Curriculum designed to meet international standards while staying rooted in Nigerian heritage.",
  },
  {
    icon: "🌿",
    title: "Values & Character",
    desc: "We build morals, discipline and integrity alongside academic achievement — every single day.",
  },
  {
    icon: "🎯",
    title: "Talent Discovery",
    desc: "Every child has a gift. Our programmes identify and nurture each student's unique strengths.",
  },
  {
    icon: "🏫",
    title: "Safe & Nurturing",
    desc: "A secure, inclusive environment where children feel confident to learn, grow and thrive.",
  },
];

const levels = [
  { name: "Crèche", ages: "Ages 2–3" },
  { name: "Nursery 1 & 2", ages: "Ages 3–4" },
  { name: "Kindergarten 1 & 2", ages: "Ages 4–5" },
  { name: "Basic 1–3", ages: "Ages 6–8" },
  { name: "Basic 4–6", ages: "Ages 9–11" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f2e18]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #c8972a 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #2d7a42 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8972a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c8972a] text-sm uppercase tracking-[0.3em] font-medium mb-6">
              Welcome to ALKHIS
            </p>
            <h1 className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              Knowledge<br />
              <span className="text-[#c8972a]">with Faith,</span><br />
              Character<br />with Excellence
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Al-Khalifah International School nurtures future global leaders — academically, physically and mentally — while keeping their values and heritage alive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="bg-[#c8972a] text-white px-8 py-4 rounded-md font-medium hover:bg-[#e8b84b] transition-colors"
              >
                Apply for Admission
              </Link>
              <Link
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-md font-medium hover:border-white/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Logo card */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-72 h-72 rounded-full border border-[#c8972a]/20 flex items-center justify-center"
              style={{ boxShadow: "0 0 80px rgba(200,151,42,0.1)" }}>
              <div className="w-56 h-56 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Al-Khalifah International School"
                  width={160}
                  height={160}
                  style={{
                    borderRadius: '50%'
                  }}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8972a]" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1a4f2a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-[#c8972a] text-4xl font-semibold">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ALKHIS ── */}
      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-serif text-[#1a4f2a] text-4xl sm:text-5xl font-semibold">
              Little Steps to Great Heights
            </h2>
            <div className="w-16 h-0.5 bg-[#c8972a] mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((u) => (
              <div key={u.title} className="bg-white rounded-xl p-8 shadow-sm border border-[#1a4f2a]/5 hover:shadow-md transition-shadow group">
                <div className="text-4xl mb-5">{u.icon}</div>
                <h3 className="font-serif text-[#1a4f2a] text-xl font-semibold mb-3 group-hover:text-[#2d7a42] transition-colors">
                  {u.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEVELS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Our Classes</p>
            <h2 className="font-serif text-[#1a4f2a] text-4xl sm:text-5xl font-semibold mb-6">
              From Crèche<br />to Primary 6
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We walk with your child every step of the way — from their very first classroom experience through to the end of primary school, building a strong foundation for life.
            </p>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-[#1a4f2a] font-medium border-b border-[#c8972a] pb-0.5 hover:text-[#c8972a] transition-colors"
            >
              View full academics →
            </Link>
          </div>

          <div className="space-y-3">
            {levels.map((l, i) => (
              <div
                key={l.name}
                className="flex items-center justify-between px-6 py-4 rounded-lg border border-[#1a4f2a]/10 bg-[#f9f6f0] hover:border-[#c8972a]/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#1a4f2a] text-white text-xs flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span className="font-medium text-[#1a4f2a]">{l.name}</span>
                </div>
                <span className="text-sm text-gray-400">{l.ages}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0f2e18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #c8972a, transparent 60%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-white text-4xl sm:text-5xl font-semibold mb-6">
            Give Your Child the Best Start
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Admissions are open. Join the Al-Khalifah family and watch your child grow into a confident, values-driven global leader.
          </p>
          <Link
            href="/admissions"
            className="inline-block bg-accent text-white px-10 py-4 rounded-md font-medium hover:bg-accent-light transition-colors text-lg"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </>
  );
}
