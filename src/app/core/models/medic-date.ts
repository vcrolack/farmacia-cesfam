import { Patient } from "./patient";
export interface MedicDate {
  id: number;
  user_id: number;
  patient_id: number;
  medic_date: string;
  observations?: string
}

export interface FullMedicDate {
  MedicDate: {
    id: number;
    user_id: number;
    patient_id: number;
    medic_date: string;
    observations?: string,
  },
  Patient: Patient
}
