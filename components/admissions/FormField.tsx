export const inp = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a4f2a] focus:ring-1 focus:ring-[#1a4f2a] transition-colors bg-white";
export const inpError = "w-full border border-red-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-300 transition-colors bg-white";

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function FormField({ label, required, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#1a4f2a] mb-1.5">
        {label}{required && <span className="text-[#c8972a] ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
