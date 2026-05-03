import type { SubmissionRecord } from "@/types/admission";

const KEY = "alkhis_submission";

export function saveSubmission(record: SubmissionRecord) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(record));
}

export function getSubmission(): SubmissionRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SubmissionRecord) : null;
  } catch {
    return null;
  }
}

export function clearSubmission() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
