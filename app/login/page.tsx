"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (!result.ok) {
      setError(result.message ?? "Login failed");
      return;
    }

    router.push("/admin/applications");
  };

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <Image src="/images/logo.png" alt="ALKHIS" fill className="object-contain" />
          </div>
          <h1 className="font-serif text-white text-3xl font-semibold">Admin Portal</h1>
          <p className="text-white/40 text-sm mt-1">Al-Khalifah International School</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="admin@alkhalifah.edu.ng"
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading || !email || !password}
              className="w-full bg-primary text-white py-3 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
