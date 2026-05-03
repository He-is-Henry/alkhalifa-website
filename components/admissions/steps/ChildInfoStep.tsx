import { FormField, inp, inpError } from "@/components/admissions/FormField";
import type { AdmissionFormData, FormErrors } from "@/types/admission";

interface Props {
  form: AdmissionFormData;
  errors: FormErrors;
  set: (field: keyof AdmissionFormData, value: string) => void;
}

export function ChildInfoStep({ form, errors, set }: Props) {
  return (
    <div className="space-y-5">
      <h2 className="font-serif text-[#1a4f2a] text-2xl font-semibold mb-6">Child Information</h2>
      <FormField label="Full Name" required error={errors.childFullName}>
        <input className={errors.childFullName ? inpError : inp} value={form.childFullName}
          onChange={(e) => set("childFullName", e.target.value)} placeholder="As it appears on birth certificate" />
      </FormField>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Gender" required error={errors.gender}>
          <select className={errors.gender ? inpError : inp} value={form.gender} onChange={(e) => set("gender", e.target.value)}>
            <option value="">Select</option><option>Male</option><option>Female</option>
          </select>
        </FormField>
        <FormField label="Date of Birth" required error={errors.dateOfBirth}>
          <input type="date" className={errors.dateOfBirth ? inpError : inp} value={form.dateOfBirth}
            onChange={(e) => set("dateOfBirth", e.target.value)} />
        </FormField>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="State of Origin">
          <input className={inp} value={form.stateOfOrigin} onChange={(e) => set("stateOfOrigin", e.target.value)} />
        </FormField>
        <FormField label="Religion" required error={errors.religion}>
          <input className={errors.religion ? inpError : inp} value={form.religion} onChange={(e) => set("religion", e.target.value)} />
        </FormField>
      </div>
      <FormField label="Previous School (if any)">
        <input className={inp} value={form.previousSchool} onChange={(e) => set("previousSchool", e.target.value)} />
      </FormField>
    </div>
  );
}
