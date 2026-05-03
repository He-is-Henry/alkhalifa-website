"use client";

import Image from "next/image";
import type { AdmissionFormData, SubmissionRecord } from "@/types/admission";
import Link from "next/link";

interface Props {
  record: SubmissionRecord;
  form: AdmissionFormData;
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 py-1.5 border-b border-dashed border-gray-200 last:border-0">
      <span className="text-xs text-gray-400 w-40 shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-800" style={{ fontFamily: "'Caveat', cursive" }}>{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 border-b border-primary/20 pb-1">
        {title}
      </p>
      {children}
    </div>
  );
}

export function SuccessScreen({ record, form }: Props) {
  const handlePrint = () => window.print();

  return (
    <>
      {/* Screen view */}
      <div className="print:hidden min-h-screen bg-surface flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-primary/10 p-10 max-w-md w-full text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
          <h2 className="font-serif text-primary text-3xl font-semibold mb-2">Application Received</h2>
          <p className="text-gray-400 text-sm mb-1">Reference ID</p>
          <p className="font-mono text-primary font-semibold text-lg mb-6">{record.id}</p>
          <p className="text-gray-500 text-sm mb-8">
            We will reach out to <strong>{form.fatherPhone || form.motherPhone}</strong> shortly.
            Please save or print this form for your records.
          </p>
          <div className="space-y-3">
            <button
              onClick={handlePrint}
              className="w-full bg-primary text-white py-3 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Print / Save as PDF
            </button>
            <Link href="/" className="block w-full border border-gray-200 text-gray-500 py-3 rounded-lg text-sm font-medium hover:border-gray-300 transition-colors">
              Back to Home
            </Link>
          </div>

          <div className="mt-6 bg-surface rounded-xl p-4 text-left">
            <p className="text-xs text-gray-400 mb-1">Please bring on your visit:</p>
            <ul className="text-xs text-gray-500 space-y-0.5 list-disc list-inside">
              <li>4 passport photographs of the child</li>
              <li>Original birth certificate (for sighting)</li>
              <li>2 copies each of parents&apos; passport photographs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Printable view */}
      <div className="hidden print:block relative p-12 min-h-screen bg-white">
        {/* Watermark */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
          <div className="relative w-96 h-96 opacity-[0.04]">
            <Image src="/images/logo.png" alt="" fill className="object-contain" sizes="384px" />
          </div>
        </div>

        <div className="relative" style={{ zIndex: 1 }}>
          {/* Header */}
          <div className="flex items-start gap-6 mb-10 pb-6 border-b-2 border-primary">
            <div className="relative w-16 h-16 shrink-0">
              <Image src="/images/logo.png" alt="ALKHIS" fill className="object-contain" sizes="64px" />
            </div>
            <div>
              <h1 className="font-serif text-primary text-2xl font-bold">Al-Khalifah International School</h1>
              <p className="text-gray-500 text-xs mt-0.5">Behind Block 22, Rabiatu Thompson Crescent, Surulere, Lagos</p>
              <p className="text-gray-500 text-xs">Tel: 08111687000 · 08023348687 · 08186292949</p>
              <p className="text-accent text-xs font-medium mt-1 italic">Application for Admission — {new Date().getFullYear()}/{new Date().getFullYear() + 1} Session</p>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-400 mb-8">
            <span>Reference: <span className="font-mono text-primary font-semibold">{record.id}</span></span>
            <span>Date: {new Date(record.submittedAt).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>

          <Section title="Child Information">
            <Row label="Full Name" value={form.childFullName} />
            <Row label="Gender" value={form.gender} />
            <Row label="Date of Birth" value={form.dateOfBirth} />
            <Row label="State of Origin" value={form.stateOfOrigin} />
            <Row label="Religion" value={form.religion} />
            <Row label="Previous School" value={form.previousSchool || "—"} />
          </Section>

          <Section title="Parent / Guardian">
            <Row label="Name" value={`${form.parentTitle} ${form.parentName}`} />
            <Row label="Father Nationality" value={form.fatherNationality} />
            <Row label="Father Occupation" value={form.fatherOccupation} />
            <Row label="Father Phone" value={form.fatherPhone} />
            <Row label="Father Email" value={form.fatherEmail} />
            <Row label="Mother Nationality" value={form.motherNationality} />
            <Row label="Mother Occupation" value={form.motherOccupation} />
            <Row label="Mother Phone" value={form.motherPhone} />
            <Row label="Mother Email" value={form.motherEmail} />
            <Row label="Residential Address" value={form.residentialAddress} />
            <Row label="Child Lives With" value={form.childLivesWith} />
          </Section>

          <Section title="Health Record">
            <Row label="Illnesses" value={form.illnesses.length ? form.illnesses.join(", ") : "None"} />
            <Row label="Inoculations" value={form.inoculations.length ? form.inoculations.join(", ") : "None"} />
            <Row label="Other Vaccinations" value={form.otherVaccinations || "—"} />
            <Row label="Hospital Admissions" value={form.hospitalAdmissions || "—"} />
            <Row label="Surgical Operations" value={form.surgicalOperations || "—"} />
            <Row label="Other Conditions" value={form.otherConditions || "—"} />
          </Section>

          <Section title="Why Al-Khalifah">
            <p className="text-sm text-gray-800 leading-relaxed" style={{ fontFamily: "'Caveat', cursive" }}>
              {form.whyAlkhalifah}
            </p>
          </Section>

          {/* Signature block */}
          <div className="mt-12 pt-6 border-t border-gray-200 grid grid-cols-2 gap-12">
            <div>
              <div className="border-b border-gray-300 mb-1 h-8" />
              <p className="text-xs text-gray-400">Parent / Guardian Signature</p>
            </div>
            <div>
              <div className="border-b border-gray-300 mb-1 h-8" />
              <p className="text-xs text-gray-400">Date</p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-300 mt-12 italic">
            Al-Khalifah International School · Education is a Right · Little Steps to Great Heights
          </p>
        </div>
      </div>
    </>
  );
}
