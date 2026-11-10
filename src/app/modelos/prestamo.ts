import { Libro } from "./libro";

export interface Prestamo {
    id: number;
    libroID: number;
    usuarioId: number;
    fecha: string;
    estado: 'ACTIVO' | 'DEVUELTO';
    libro?: Libro | null;
}

