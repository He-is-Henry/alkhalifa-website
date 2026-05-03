"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/lib/api";

interface Application {
  _id: string;
  childFullName: string;
  gender: string;
  dateOfBirth: string;
  stateOfOrigin?: string;
  religion: string;
  previousSchool?: string;
  parentTitle: string;
  parentName: string;
  fatherNationality?: string;
  fatherStateOfOrigin?: string;
  fatherOccupation?: string;
  fatherPhone?: string;
  fatherEmail?: string;
  motherNationality?: string;
  motherStateOfOrigin?: string;
  motherOccupation?: string;
  motherPhone?: string;
  motherEmail?: string;
  residentialAddress: string;
  childLivesWith: string;
  illnesses: string[];
  inoculations: string[];
  otherVaccinations?: string;
  hospitalAdmissions?: string;
  surgicalOperations?: string;
  otherConditions?: string;
  whyAlkhalifah: string;
  status?: string;
  createdAt: string;
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-4 py-3 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-400 w-44 shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-primary/10 shadow-sm p-6 mb-4">
      <p className="text-xs uppercase tracking-widest text-accent font-medium mb-4">{title}</p>
      {children}
    </div>
  );
}

export default function ApplicationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [app, setApp] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    api.get<Application>(`/applications/${id}`)
      .then(setApp)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  const updateStatus = async (status: string) => {
    setUpdating(true);
    try {
      const updated = await api.patch<Application>(`/applications/${id}/status`, { status });
      setApp(updated);
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="text-center py-24 text-gray-400 text-sm">Loading…</div>;
  if (!app) return <div className="text-center py-24 text-gray-400 text-sm">Application not found.</div>;

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
    accepted: "bg-green-50 text-green-700 border-green-200",
    rejected: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <>
      <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
        <div>
          <button onClick={() => router.back()} className="text-sm text-gray-400 hover:text-primary transition-colors mb-2">
            ← Back
          </button>
          <h1 className="font-serif text-primary text-3xl font-semibold">{app.childFullName}</h1>
          <p className="text-gray-400 text-sm mt-1">
            Submitted {new Date(app.createdAt).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium border capitalize ${statusColors[app.status ?? "pending"]}`}>
            {app.status ?? "pending"}
          </span>
          {app.status !== "accepted" && (
            <button
              onClick={() => updateStatus("accepted")}
              disabled={updating}
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-50"
            >
              Accept
            </button>
          )}
          {app.status !== "rejected" && (
            <button
              onClick={() => updateStatus("rejected")}
              disabled={updating}
              className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              Reject
            </button>
          )}
          {app.status !== "pending" && (
            <button
              onClick={() => updateStatus("pending")}
              disabled={updating}
              className="border border-gray-200 text-gray-500 px-5 py-2 rounded-lg text-sm font-medium hover:border-gray-300 transition-colors disabled:opacity-50"
            >
              Reset to Pending
            </button>
          )}
        </div>
      </div>

      <Section title="Child">
        <Row label="Full Name" value={app.childFullName} />
        <Row label="Gender" value={app.gender} />
        <Row label="Date of Birth" value={app.dateOfBirth} />
        <Row label="State of Origin" value={app.stateOfOrigin} />
        <Row label="Religion" value={app.religion} />
        <Row label="Previous School" value={app.previousSchool} />
      </Section>

      <Section title="Parent / Guardian">
        <Row label="Name" value={`${app.parentTitle} ${app.parentName}`} />
        <Row label="Father Nationality" value={app.fatherNationality} />
        <Row label="Father State of Origin" value={app.fatherStateOfOrigin} />
        <Row label="Father Occupation" value={app.fatherOccupation} />
        <Row label="Father Phone" value={app.fatherPhone} />
        <Row label="Father Email" value={app.fatherEmail} />
        <Row label="Mother Nationality" value={app.motherNationality} />
        <Row label="Mother State of Origin" value={app.motherStateOfOrigin} />
        <Row label="Mother Occupation" value={app.motherOccupation} />
        <Row label="Mother Phone" value={app.motherPhone} />
        <Row label="Mother Email" value={app.motherEmail} />
        <Row label="Residential Address" value={app.residentialAddress} />
        <Row label="Child Lives With" value={app.childLivesWith} />
      </Section>

      <Section title="Health">
        <Row label="Illnesses" value={app.illnesses?.join(", ") || "None"} />
        <Row label="Inoculations" value={app.inoculations?.join(", ") || "None"} />
        <Row label="Other Vaccinations" value={app.otherVaccinations} />
        <Row label="Hospital Admissions" value={app.hospitalAdmissions} />
        <Row label="Surgical Operations" value={app.surgicalOperations} />
        <Row label="Other Conditions" value={app.otherConditions} />
      </Section>

      <Section title="Why Al-Khalifah">
        <p className="text-sm text-gray-700 leading-relaxed">{app.whyAlkhalifah}</p>
      </Section>
    </>
  );
}
