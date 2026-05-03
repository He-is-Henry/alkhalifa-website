"use client";

import { useState } from "react";
import { submitAdmissionForm } from "@/lib/submitForm";
import { validateStep } from "@/lib/validateAdmission";
import { StepIndicator } from "@/components/admissions/StepIndicator";
import { PreviousSubmissionBanner } from "@/components/admissions/PreviousSubmissionBanner";
import { SuccessScreen } from "@/components/admissions/SuccessScreen";
import { ChildInfoStep } from "@/components/admissions/steps/ChildInfoStep";
import { ParentInfoStep } from "@/components/admissions/steps/ParentInfoStep";
import { HealthStep } from "@/components/admissions/steps/HealthStep";
import { ReviewStep } from "@/components/admissions/steps/ReviewStep";
import { EMPTY_FORM } from "@/types/admission";
import type { AdmissionFormData, FormErrors, SubmissionRecord } from "@/types/admission";

export default function AdmissionsPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<AdmissionFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<{ record: SubmissionRecord; form: AdmissionFormData } | null>(null);

  const set = (field: keyof AdmissionFormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggle = (field: "illnesses" | "inoculations", val: string) =>
    setForm((f) => ({
      ...f,
      [field]: f[field].includes(val) ? f[field].filter((x) => x !== val) : [...f[field], val],
    }));

  const next = () => {
    const errs = validateStep(step, form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSubmitError("");
    const result = await submitAdmissionForm(form);
    setLoading(false);
    if (!result.ok) { setSubmitError(result.message); return; }
    if (result.record) setSubmitted({ record: result.record, form });
  };

  if (submitted) return <SuccessScreen record={submitted.record} form={submitted.form} />;

  return (
    <>
      <section className="bg-[#1a4f2a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c8972a] text-sm uppercase tracking-widest mb-3">Join ALKHIS</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl font-semibold">Admissions</h1>
          <div className="w-16 h-0.5 bg-[#c8972a] mt-6" />
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { n: "01", title: "Fill the Form", desc: "Complete the online application below" },
            { n: "02", title: "Visit the School", desc: "Bring required documents for verification" },
            { n: "03", title: "Confirmation", desc: "Receive your enrolment confirmation" },
          ].map((s) => (
            <div key={s.n}>
              <span className="font-serif text-4xl text-[#1a4f2a]/10 font-bold">{s.n}</span>
              <h3 className="font-serif text-[#1a4f2a] text-lg font-semibold mt-1">{s.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f9f6f0]">
        <div className="max-w-3xl mx-auto px-4">
          <PreviousSubmissionBanner />
          <StepIndicator step={step} />

          <div className="bg-white rounded-2xl border border-[#1a4f2a]/10 shadow-sm p-8">
            {step === 0 && <ChildInfoStep form={form} errors={errors} set={set} />}
            {step === 1 && <ParentInfoStep form={form} errors={errors} set={set} />}
            {step === 2 && <HealthStep form={form} errors={errors} set={set} toggle={toggle} />}
            {step === 3 && <ReviewStep form={form} error={submitError} />}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="text-sm text-gray-400 hover:text-[#1a4f2a] transition-colors">
                  ← Back
                </button>
              ) : <div />}
              {step < 3 ? (
                <button onClick={next} className="bg-[#1a4f2a] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2d7a42] transition-colors">
                  Continue →
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={loading} className="bg-[#c8972a] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-[#e8b84b] transition-colors disabled:opacity-60">
                  {loading ? "Submitting…" : "Submit Application"}
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">No application fee required.</p>
        </div>
      </section>
    </>
  );
}
