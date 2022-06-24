export interface Patient {
  id: number;
  first_name: string;
  second_name?: string;
  last_name: string;
  second_last_name: string;
  rut: string;
  email: string;
  birth_date: string;
  phone: string;
  address: string;
}
