export interface Prescription {
  id: number;
  user_id: number;
  patient_id: number;
  medic_name: string;
  medicament_name: string;
  patology: string;
  date_prescription: string;
  medicament_id: number;
  type_medicament_id: number;
}
