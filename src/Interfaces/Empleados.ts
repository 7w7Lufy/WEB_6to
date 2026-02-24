export interface Empleados {
    id: number;
    nombre: string;
    puesto: string;
    edad: number;
    email: string;
    habilidades: string[];
    activo: boolean;
    salario?: number;
}
