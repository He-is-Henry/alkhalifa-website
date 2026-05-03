"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isLoggedIn, logout } from "@/lib/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login");
    }
  }, [router]);

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-primary-dark px-6 py-4 flex items-center justify-between">
        <div>
          <p className="font-serif text-white font-semibold">ALKHIS Admin</p>
          <p className="text-white/40 text-xs">Al-Khalifah International School</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/admin/applications" className="text-white/60 hover:text-white text-sm transition-colors">
            Applications
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm text-accent hover:text-accent-light transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
