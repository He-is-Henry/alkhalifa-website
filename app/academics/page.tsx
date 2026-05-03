const levels = [
  {
    name: "Creche",
    ages: "Ages 2 – 3",
    desc: "A warm, play-based introduction to school life. We focus on social skills, motor development and early language through guided play.",
    subjects: ["Play & Exploration", "Rhymes & Songs", "Sensory Activities", "Social Skills"],
  },
  {
    name: "Nursery 1 & 2",
    ages: "Ages 3 – 4",
    desc: "Children begin structured learning in a nurturing setting, building early literacy, numeracy and confidence through creative activities.",
    subjects: ["Pre-Reading", "Pre-Writing", "Numbers & Counting", "Arts & Crafts", "Phonics"],
  },
  {
    name: "Kindergarten 1 & 2",
    ages: "Ages 4 – 5",
    desc: "The bridge to primary school. Students develop reading, writing and arithmetic fundamentals in an engaging, structured environment.",
    subjects: ["Reading", "Writing", "Basic Maths", "Science Exploration", "Islamic Studies", "Yoruba"],
  },
  {
    name: "Basic 1 – 3",
    ages: "Ages 6 – 8",
    desc: "Core primary curriculum with a strong emphasis on literacy, numeracy, character development and values formation.",
    subjects: ["English Language", "Mathematics", "Basic Science", "Social Studies", "Islamic Studies", "Yoruba", "Creative Arts", "Computer Studies"],
  },
  {
    name: "Basic 4 – 6",
    ages: "Ages 9 – 11",
    desc: "Advanced primary learning preparing students for secondary education, with critical thinking and academic excellence at the core.",
    subjects: ["English Language", "Mathematics", "Basic Science & Technology", "Social Studies", "Islamic Studies", "Yoruba", "Computer Studies", "Civic Education", "Agricultural Science"],
  },
];

export default function AcademicsPage() {
  return (
    <>
      <section className="bg-[#1a4f2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">What We Teach</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl font-semibold">Academics</h1>
          <div className="w-16 h-0.5 bg-[#c8972a] mt-6" />
          <p className="text-white/60 mt-4 max-w-xl text-lg">
            From Creche through Basic 6, every level is designed to challenge, inspire and build your child step by step.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {levels.map((level, i) => (
            <div key={level.name} className="bg-white rounded-xl border border-[#1a4f2a]/10 shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-3">
                <div className="bg-[#0f2e18] p-8 flex flex-col justify-center">
                  <span className="text-[#c8972a] text-xs uppercase tracking-widest mb-2">Level {i + 1}</span>
                  <h2 className="font-serif text-white text-3xl font-semibold">{level.name}</h2>
                  <p className="text-white/40 text-sm mt-2">{level.ages}</p>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-gray-500 leading-relaxed mb-6">{level.desc}</p>
                  <p className="text-xs uppercase tracking-widest text-[#c8972a] mb-3 font-medium">Subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {level.subjects.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-[#f9f6f0] border border-[#1a4f2a]/10 text-sm text-[#1a4f2a] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0f2e18]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-white text-4xl font-semibold mb-4">Ready to Enrol?</h2>
          <p className="text-white/60 mb-8">Admissions are open. Secure your child&apos;s place at ALKHIS today.</p>
          <a href="/admissions" className="inline-block bg-[#c8972a] text-white px-10 py-4 rounded-md font-medium hover:bg-[#e8b84b] transition-colors">
            Apply for Admission
          </a>
        </div>
      </section>
    </>
  );
}
