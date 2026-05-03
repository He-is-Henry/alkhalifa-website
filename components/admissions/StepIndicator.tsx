import { STEPS } from "@/types/admission";

export function StepIndicator({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-2 flex-1">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors
              ${i <= step ? "bg-[#1a4f2a] text-white" : "bg-gray-200 text-gray-400"}`}>
              {i < step ? "✓" : i + 1}
            </div>
            <span className={`text-xs hidden sm:block ${i === step ? "text-[#1a4f2a] font-medium" : "text-gray-400"}`}>
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && <div className="flex-1 h-px bg-gray-200 ml-2" />}
        </div>
      ))}
    </div>
  );
}
