export interface User {
    id: number;
    first_name: string;
    second_name?: string;
    last_name: string;
    second_last_name: string;
    specialty_id?: number;
    rut: string;
}
