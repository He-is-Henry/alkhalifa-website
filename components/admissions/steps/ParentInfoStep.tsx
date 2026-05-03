import { FormField, inp, inpError } from "@/components/admissions/FormField";
import type { AdmissionFormData, FormErrors } from "@/types/admission";

interface Props {
  form: AdmissionFormData;
  errors: FormErrors;
  set: (field: keyof AdmissionFormData, value: string) => void;
}

export function ParentInfoStep({ form, errors, set }: Props) {
  return (
    <div className="space-y-5">
      <h2 className="font-serif text-[#1a4f2a] text-2xl font-semibold mb-6">Parent / Guardian</h2>
      <div className="grid sm:grid-cols-3 gap-5">
        <FormField label="Title">
          <select className={inp} value={form.parentTitle} onChange={(e) => set("parentTitle", e.target.value)}>
            <option>Mr</option><option>Mrs</option><option>Ms</option><option>Dr</option>
          </select>
        </FormField>
        <div className="sm:col-span-2">
          <FormField label="Full Name" required error={errors.parentName}>
            <input className={errors.parentName ? inpError : inp} value={form.parentName} onChange={(e) => set("parentName", e.target.value)} />
          </FormField>
        </div>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium pt-2">Father</p>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Nationality"><input className={inp} value={form.fatherNationality} onChange={(e) => set("fatherNationality", e.target.value)} /></FormField>
        <FormField label="State of Origin"><input className={inp} value={form.fatherStateOfOrigin} onChange={(e) => set("fatherStateOfOrigin", e.target.value)} /></FormField>
        <FormField label="Occupation"><input className={inp} value={form.fatherOccupation} onChange={(e) => set("fatherOccupation", e.target.value)} /></FormField>
        <FormField label="Phone" error={errors.fatherPhone}>
          <input className={errors.fatherPhone ? inpError : inp} value={form.fatherPhone} onChange={(e) => set("fatherPhone", e.target.value)} placeholder="08XXXXXXXXX" />
        </FormField>
        <FormField label="Email" error={errors.fatherEmail}>
          <input type="email" className={errors.fatherEmail ? inpError : inp} value={form.fatherEmail} onChange={(e) => set("fatherEmail", e.target.value)} />
        </FormField>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium pt-2">Mother</p>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Nationality"><input className={inp} value={form.motherNationality} onChange={(e) => set("motherNationality", e.target.value)} /></FormField>
        <FormField label="State of Origin"><input className={inp} value={form.motherStateOfOrigin} onChange={(e) => set("motherStateOfOrigin", e.target.value)} /></FormField>
        <FormField label="Occupation"><input className={inp} value={form.motherOccupation} onChange={(e) => set("motherOccupation", e.target.value)} /></FormField>
        <FormField label="Phone" error={errors.motherPhone}>
          <input className={errors.motherPhone ? inpError : inp} value={form.motherPhone} onChange={(e) => set("motherPhone", e.target.value)} placeholder="08XXXXXXXXX" />
        </FormField>
        <FormField label="Email" error={errors.motherEmail}>
          <input type="email" className={errors.motherEmail ? inpError : inp} value={form.motherEmail} onChange={(e) => set("motherEmail", e.target.value)} />
        </FormField>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium pt-2">Address</p>
      <FormField label="Residential Address" required error={errors.residentialAddress}>
        <textarea className={(errors.residentialAddress ? inpError : inp) + " resize-none"} rows={2}
          value={form.residentialAddress} onChange={(e) => set("residentialAddress", e.target.value)} />
      </FormField>
      <FormField label="Child lives with" required error={errors.childLivesWith}>
        <select className={errors.childLivesWith ? inpError : inp} value={form.childLivesWith} onChange={(e) => set("childLivesWith", e.target.value)}>
          <option value="">Select</option>
          <option>Both Parents</option><option>Father</option><option>Mother</option><option>Guardian</option>
        </select>
      </FormField>
    </div>
  );
}
