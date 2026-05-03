import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f9f6f0] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl text-[#1a4f2a]/10 font-bold leading-none">404</p>
        <h1 className="font-serif text-[#1a4f2a] text-3xl font-semibold mt-4 mb-3">Page Not Found</h1>
        <p className="text-gray-400 text-sm mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="bg-[#1a4f2a] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2d7a42] transition-colors">
            Back to Home
          </Link>
          <Link href="/contact" className="border border-[#1a4f2a]/20 text-[#1a4f2a] px-6 py-3 rounded-lg text-sm font-medium hover:border-[#1a4f2a]/50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
