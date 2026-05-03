import { FormField, inp, inpError } from "@/components/admissions/FormField";
import type { AdmissionFormData, FormErrors } from "@/types/admission";
import { ILLNESSES, INOCULATIONS } from "@/types/admission";

interface Props {
  form: AdmissionFormData;
  errors: FormErrors;
  set: (field: keyof AdmissionFormData, value: string) => void;
  toggle: (field: "illnesses" | "inoculations", val: string) => void;
}

export function HealthStep({ form, errors, set, toggle }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-[#1a4f2a] text-2xl font-semibold mb-6">Health Record</h2>
      <div>
        <p className="text-sm font-medium text-[#1a4f2a] mb-3">Illnesses</p>
        <div className="flex flex-wrap gap-4">
          {ILLNESSES.map((ill) => (
            <label key={ill} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.illnesses.includes(ill)} onChange={() => toggle("illnesses", ill)} className="accent-[#1a4f2a]" />
              <span className="text-sm text-gray-600">{ill}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-[#1a4f2a] mb-3">Inoculations</p>
        <div className="flex flex-wrap gap-4">
          {INOCULATIONS.map((inoc) => (
            <label key={inoc} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.inoculations.includes(inoc)} onChange={() => toggle("inoculations", inoc)} className="accent-[#1a4f2a]" />
              <span className="text-sm text-gray-600">{inoc}</span>
            </label>
          ))}
        </div>
      </div>
      <FormField label="Other Vaccinations"><input className={inp} value={form.otherVaccinations} onChange={(e) => set("otherVaccinations", e.target.value)} /></FormField>
      <FormField label="Hospital Admissions"><input className={inp} value={form.hospitalAdmissions} onChange={(e) => set("hospitalAdmissions", e.target.value)} placeholder="If none, leave blank" /></FormField>
      <FormField label="Surgical Operations"><input className={inp} value={form.surgicalOperations} onChange={(e) => set("surgicalOperations", e.target.value)} placeholder="If none, leave blank" /></FormField>
      <FormField label="Respiratory, Eye, Ear or Allergy conditions"><input className={inp} value={form.otherConditions} onChange={(e) => set("otherConditions", e.target.value)} placeholder="If none, leave blank" /></FormField>
      <FormField label="Why enrol at Al-Khalifah?" required error={errors.whyAlkhalifah}>
        <textarea className={(errors.whyAlkhalifah ? inpError : inp) + " resize-none"} rows={3}
          value={form.whyAlkhalifah} onChange={(e) => set("whyAlkhalifah", e.target.value)} />
      </FormField>
    </div>
  );
}
