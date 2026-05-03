import type { AdmissionFormData } from "@/types/admission";

interface Props {
  form: AdmissionFormData;
  error?: string;
}

function Row({ label, val }: { label: string; val: string }) {
  return (
    <div className="flex px-4 py-3 gap-4">
      <span className="text-xs text-gray-400 w-36 shrink-0 pt-0.5">{label}</span>
      <span className="text-sm text-gray-700">{val}</span>
    </div>
  );
}

export function ReviewStep({ form, error }: Props) {
  const sections = [
    { title: "Child", rows: [
      ["Full Name", form.childFullName], ["Gender", form.gender],
      ["Date of Birth", form.dateOfBirth], ["Religion", form.religion],
      ["Previous School", form.previousSchool || "—"],
    ]},
    { title: "Parent", rows: [
      ["Name", `${form.parentTitle} ${form.parentName}`],
      ["Father Phone", form.fatherPhone || "—"], ["Mother Phone", form.motherPhone || "—"],
      ["Address", form.residentialAddress], ["Child lives with", form.childLivesWith],
    ]},
    { title: "Health", rows: [
      ["Illnesses", form.illnesses.join(", ") || "None"],
      ["Inoculations", form.inoculations.join(", ") || "None"],
      ["Why Al-Khalifah", form.whyAlkhalifah],
    ]},
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-serif text-[#1a4f2a] text-2xl font-semibold mb-6">Review & Submit</h2>
      {sections.map((section) => (
        <div key={section.title}>
          <p className="text-xs uppercase tracking-widest text-[#c8972a] font-medium mb-3">{section.title}</p>
          <div className="bg-[#f9f6f0] rounded-xl divide-y divide-gray-100">
            {section.rows.map(([label, val]) => (
              <Row key={label} label={label} val={val} />
            ))}
          </div>
        </div>
      ))}
      {error && <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">{error}</p>}
    </div>
  );
}
