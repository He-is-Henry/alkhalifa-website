import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2e18] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white/10 rounded-full p-1">
                <Image
                  src="/images/logo.png"
                  alt="ALKHIS"
                  style={{
                    borderRadius: '50%'
                  }}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="font-serif text-white font-semibold">Al-Khalifah</p>
                <p className="text-[10px] uppercase tracking-widest text-[#c8972a]">International School</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Knowledge with Faith, Character with Excellence.
            </p>
            <p className="text-white/40 text-xs mt-3 italic font-serif">
              Little Steps to Great Heights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[#c8972a] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Admissions", href: "/admissions" },
                { label: "News", href: "/news" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#c8972a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[#c8972a] text-lg mb-4">Contact Us</h4>
            <address className="not-italic space-y-3 text-sm text-white/60">
              <p className="leading-relaxed">
                Behind Block 22, Rabiatu Thompson Crescent,<br />
                Surulere, Lagos
              </p>
              <div className="space-y-1">
                <a href="tel:08111687000" className="block hover:text-[#c8972a] transition-colors">
                  08111687000
                </a>
                <a href="tel:08023348687" className="block hover:text-[#c8972a] transition-colors">
                  08023348687
                </a>
                <a href="tel:08186292949" className="block hover:text-[#c8972a] transition-colors">
                  08186292949
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Al-Khalifah International School. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">ALKHIS · Surulere, Lagos</p>
        </div>
      </div>
    </footer>
  );
}