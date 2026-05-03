import type { AdmissionFormData, FormErrors } from "@/types/admission";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateStep(step: number, form: AdmissionFormData): FormErrors {
  const errors: FormErrors = {};

  if (step === 0) {
    if (!form.childFullName.trim()) errors.childFullName = "Full name is required";
    if (!form.gender) errors.gender = "Please select a gender";
    if (!form.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!form.religion.trim()) errors.religion = "Religion is required";
  }

  if (step === 1) {
    if (!form.parentName.trim()) errors.parentName = "Parent name is required";
    if (!form.residentialAddress.trim()) errors.residentialAddress = "Address is required";
    if (!form.childLivesWith) errors.childLivesWith = "Please select who the child lives with";
    if (form.fatherEmail && !emailRe.test(form.fatherEmail))
      errors.fatherEmail = "Invalid email address";
    if (form.motherEmail && !emailRe.test(form.motherEmail))
      errors.motherEmail = "Invalid email address";
    if (!form.fatherPhone && !form.motherPhone)
      errors.fatherPhone = "At least one parent phone number is required";
  }

  if (step === 2) {
    if (!form.whyAlkhalifah.trim()) errors.whyAlkhalifah = "Please tell us why you chose Al-Khalifah";
  }

  return errors;
}
