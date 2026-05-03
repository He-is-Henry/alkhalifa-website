"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

interface Application {
  _id: string;
  childFullName: string;
  gender: string;
  dateOfBirth: string;
  religion: string;
  parentName: string;
  fatherPhone?: string;
  motherPhone?: string;
  residentialAddress: string;
  status?: string;
  createdAt: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  accepted: "bg-green-50 text-green-700 border-green-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    api.get<Application[]>("/applications")
      .then(setApplications)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = applications.filter((a) => {
    const matchesSearch =
      a.childFullName.toLowerCase().includes(search.toLowerCase()) ||
      a.parentName.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || (a.status ?? "pending") === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-primary text-3xl font-semibold">Applications</h1>
          <p className="text-gray-400 text-sm mt-1">{applications.length} total</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by child or parent name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white"
        />
        <div className="flex gap-2">
          {["all", "pending", "accepted", "rejected"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors
                ${filter === s ? "bg-primary text-white" : "bg-white border border-gray-200 text-gray-500 hover:border-primary/30"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-24 text-gray-400 text-sm">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-400 text-sm">No applications found.</div>
      ) : (
        <div className="bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-surface border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest text-gray-400 font-medium">Child</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest text-gray-400 font-medium hidden sm:table-cell">Parent</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest text-gray-400 font-medium hidden md:table-cell">Phone</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest text-gray-400 font-medium hidden lg:table-cell">Submitted</th>
                <th className="text-left px-6 py-4 text-xs uppercase tracking-widest text-gray-400 font-medium">Status</th>
                <th />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((app) => (
                <tr key={app._id} className="hover:bg-surface/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-primary">{app.childFullName}</p>
                    <p className="text-gray-400 text-xs">{app.gender} · {app.religion}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600 hidden sm:table-cell">{app.parentName}</td>
                  <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{app.fatherPhone || app.motherPhone || "—"}</td>
                  <td className="px-6 py-4 text-gray-400 hidden lg:table-cell">
                    {new Date(app.createdAt).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${statusColors[app.status ?? "pending"]}`}>
                      {app.status ?? "pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/admin/applications/${app._id}`} className="text-primary hover:text-accent text-xs font-medium transition-colors">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
