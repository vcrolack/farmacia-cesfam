import { Role } from "./role";
import { Specialty } from "./specialty";

export interface User {
    id: number | string;
    first_name: string;
    second_name?: string;
    last_name: string;
    second_last_name: string;
    specialty_id?: number;
    role_id: number;
    rut: string;
    email: string;
}

export interface FullUser {
  User: User;
  Role: Role;
  Specialty?: Specialty;
}
