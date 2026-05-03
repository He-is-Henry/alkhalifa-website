export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1a4f2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl font-semibold">Contact Us</h1>
          <div className="w-16 h-0.5 bg-[#c8972a] mt-6" />
        </div>
      </section>

      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium mb-4">Address</p>
              <address className="not-italic text-gray-600 leading-relaxed">
                <p className="font-medium text-[#1a4f2a] text-lg mb-1">Al-Khalifah International School</p>
                <p>Behind Block 22, Rabiatu Thompson Crescent</p>
                <p>Surulere, Lagos</p>
              </address>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium mb-4">Phone</p>
              <div className="space-y-2">
                {["08111687000", "08023348687", "08186292949"].map((num) => (
                  <a key={num} href={`tel:${num}`} className="block text-[#1a4f2a] hover:text-[#c8972a] transition-colors font-medium">
                    {num}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium mb-4">School Hours</p>
              <div className="space-y-1 text-gray-600 text-sm">
                <p>Monday – Friday: 7:30 AM – 3:30 PM</p>
                <p>Saturday – Sunday: Closed</p>
              </div>
            </div>
            <div className="bg-[#0f2e18] rounded-xl p-8">
              <p className="text-[#c8972a] text-sm font-medium mb-2">Ready to enrol?</p>
              <p className="text-white/70 text-sm mb-5">No application fee. Walk in or apply online.</p>
              <a href="/admissions" className="inline-block bg-[#c8972a] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#e8b84b] transition-colors">
                Apply Now
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#1a4f2a]/10 h-[500px] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.3521!3d6.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4b3b3b3b3b%3A0x0!2sSurulere%2C%20Lagos!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al-Khalifah International School"
            />
          </div>
        </div>
      </section>
    </>
  );
}
