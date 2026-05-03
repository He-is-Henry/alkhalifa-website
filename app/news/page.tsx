const posts = [
  {
    title: "Welcome to the 2025/2026 Academic Session",
    date: "September 2, 2025",
    category: "Announcement",
    excerpt: "We warmly welcome all returning and new students to a brand new academic year. This session promises exciting programmes, new facilities and great opportunities for every child.",
  },
  {
    title: "End of Year Celebration — Save the Date",
    date: "November 15, 2025",
    category: "Event",
    excerpt: "Our annual end-of-year celebration is coming up. Parents and guardians are invited to join us for a day of performances, prize-giving and community.",
  },
  {
    title: "Admissions Now Open for New Pupils",
    date: "August 10, 2025",
    category: "Admissions",
    excerpt: "Al-Khalifah International School is now accepting applications for the 2025/2026 session across all levels from Creche to Basic 6. No application fee required.",
  },
  {
    title: "Health & Safety Update for Parents",
    date: "October 1, 2025",
    category: "Notice",
    excerpt: "Please review the updated health guidelines for the new term. All students are required to have up-to-date inoculation records on file with the school.",
  },
  {
    title: "Inter-House Sports Day Results",
    date: "October 28, 2025",
    category: "Event",
    excerpt: "Congratulations to all participants in this year's Inter-House Sports Day. The day was a tremendous success with outstanding performances across all age groups.",
  },
  {
    title: "Parent-Teacher Conference Schedule",
    date: "November 5, 2025",
    category: "Announcement",
    excerpt: "The first term parent-teacher conference is scheduled. Parents are encouraged to book their slots early to discuss their child's progress with class teachers.",
  },
];

const categoryColors: Record<string, string> = {
  Announcement: "bg-[#1a4f2a]/10 text-[#1a4f2a]",
  Event: "bg-[#c8972a]/10 text-[#c8972a]",
  Admissions: "bg-blue-50 text-blue-700",
  Notice: "bg-red-50 text-red-700",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-[#1a4f2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Stay Informed</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl font-semibold">News & Announcements</h1>
          <div className="w-16 h-0.5 bg-[#c8972a] mt-6" />
        </div>
      </section>

      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl border border-[#1a4f2a]/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="h-2 bg-[#1a4f2a]" />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-[#1a4f2a] text-xl font-semibold mb-3 group-hover:text-[#2d7a42] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white border border-[#1a4f2a]/10 rounded-xl px-8 py-6 shadow-sm">
              <p className="text-gray-400 text-sm">More announcements will be posted here regularly.</p>
              <p className="text-[#1a4f2a] font-medium text-sm mt-1">Check back soon or call us for updates.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
