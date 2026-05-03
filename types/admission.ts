export interface AdmissionFormData {
  childFullName: string;
  gender: string;
  dateOfBirth: string;
  stateOfOrigin: string;
  religion: string;
  previousSchool: string;
  parentTitle: string;
  parentName: string;
  fatherNationality: string;
  fatherStateOfOrigin: string;
  fatherOccupation: string;
  fatherPhone: string;
  fatherEmail: string;
  motherNationality: string;
  motherStateOfOrigin: string;
  motherOccupation: string;
  motherPhone: string;
  motherEmail: string;
  residentialAddress: string;
  childLivesWith: string;
  illnesses: string[];
  inoculations: string[];
  otherVaccinations: string;
  hospitalAdmissions: string;
  surgicalOperations: string;
  otherConditions: string;
  whyAlkhalifah: string;
}

export interface SubmissionRecord {
  id: string;
  childFullName: string;
  submittedAt: string;
}

export type FormErrors = Partial<Record<keyof AdmissionFormData, string>>;

export const EMPTY_FORM: AdmissionFormData = {
  childFullName: "", gender: "", dateOfBirth: "", stateOfOrigin: "",
  religion: "", previousSchool: "",
  parentTitle: "Mr", parentName: "",
  fatherNationality: "", fatherStateOfOrigin: "", fatherOccupation: "",
  fatherPhone: "", fatherEmail: "",
  motherNationality: "", motherStateOfOrigin: "", motherOccupation: "",
  motherPhone: "", motherEmail: "",
  residentialAddress: "", childLivesWith: "",
  illnesses: [], inoculations: [],
  otherVaccinations: "", hospitalAdmissions: "", surgicalOperations: "",
  otherConditions: "", whyAlkhalifah: "",
};

export const ILLNESSES = ["Measles", "Chicken Pox", "Whooping Cough", "Rubella", "Typhoid"];
export const INOCULATIONS = ["Small Pox", "Measles", "Polio", "Tetanus", "BCG"];
export const STEPS = ["Child Info", "Parent Info", "Health Record", "Review"];
