import type { AdmissionFormData, SubmissionRecord } from "@/types/admission";
import { saveSubmission } from "./admissionStorage";

export async function submitAdmissionForm(
  data: AdmissionFormData
): Promise<{ ok: boolean; message: string; record?: SubmissionRecord }> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const message = Array.isArray(err.message)
        ? err.message.join(", ")
        : (err.message ?? "Submission failed. Please try again.");
      return { ok: false, message };
    }

    const parsed = await res.json();
    const saved = parsed.data;
    const record: SubmissionRecord = {
      id: saved._id,
      childFullName: saved.childFullName,
      submittedAt: saved.createdAt ?? new Date().toISOString(),
    };
    saveSubmission(record);
    return { ok: true, message: "Application submitted successfully!", record };
  } catch {
    return { ok: false, message: "Network error. Please check your connection and try again." };
  }
}
