"use client";

import { useEffect, useState } from "react";
import { getSubmission, clearSubmission } from "@/lib/admissionStorage";
import type { SubmissionRecord } from "@/types/admission";

export function PreviousSubmissionBanner() {
  const [record, setRecord] = useState<SubmissionRecord | null>(null);

  useEffect(() => {
    setRecord(getSubmission());
  }, []);

  if (!record) return null;

  return (
    <div className="bg-[#1a4f2a]/5 border border-[#1a4f2a]/20 rounded-xl px-6 py-4 mb-8 flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-[#1a4f2a]">You have a previous submission</p>
        <p className="text-xs text-gray-500 mt-0.5">
          {record.childFullName} · Ref: <span className="font-mono">{record.id}</span> ·{" "}
          {new Date(record.submittedAt).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>
      <button
        onClick={() => { clearSubmission(); setRecord(null); }}
        className="text-xs text-gray-400 hover:text-red-500 transition-colors shrink-0"
      >
        Dismiss
      </button>
    </div>
  );
}
