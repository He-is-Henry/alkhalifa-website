"use client";

import { useState } from "react";

const categories = ["All", "Events", "Classroom", "Sports", "Celebrations"];

const placeholders = [
  { label: "Assembly Morning", category: "Events", tall: false },
  { label: "Classroom Activity", category: "Classroom", tall: true },
  { label: "Sports Day", category: "Sports", tall: false },
  { label: "End of Year Party", category: "Celebrations", tall: false },
  { label: "Science Exploration", category: "Classroom", tall: false },
  { label: "Prize Giving Day", category: "Events", tall: true },
  { label: "Inter-House Relay", category: "Sports", tall: false },
  { label: "Cultural Day", category: "Celebrations", tall: true },
  { label: "Reading Circle", category: "Classroom", tall: false },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? placeholders
    : placeholders.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-[#1a4f2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Life at ALKHIS</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl font-semibold">Gallery</h1>
          <div className="w-16 h-0.5 bg-[#c8972a] mt-6" />
          <p className="text-white/60 mt-4 max-w-lg">
            A glimpse into the vibrant, joyful learning environment at Al-Khalifah International School.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  active === cat
                    ? "px-5 py-2 rounded-full text-sm font-medium bg-[#1a4f2a] text-white"
                    : "px-5 py-2 rounded-full text-sm font-medium bg-white border border-[#1a4f2a]/10 text-gray-500 hover:border-[#1a4f2a]/30 hover:text-[#1a4f2a] transition-colors cursor-pointer"
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid bg-white rounded-xl border border-[#1a4f2a]/10 overflow-hidden shadow-sm"
              >
                <div className={`w-full bg-gradient-to-br from-[#1a4f2a]/10 to-[#c8972a]/10 flex items-center justify-center ${item.tall ? "h-72" : "h-52"}`}>
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{item.category}</p>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-medium text-[#1a4f2a]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400 text-sm">No photos in this category yet.</div>
          )}

          <div className="mt-16 bg-white rounded-xl border border-[#1a4f2a]/10 shadow-sm p-10 text-center">
            <p className="text-2xl mb-3">📸</p>
            <h3 className="font-serif text-[#1a4f2a] text-xl font-semibold mb-2">Photos Coming Soon</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              Professional photos from our events and daily school life will be added here regularly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
