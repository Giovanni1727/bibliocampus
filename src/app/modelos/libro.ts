export interface Libro {
    id: number;
    titulo: string;
    autor: string;
    categoria: string;
    anio: number;
    portadaUrl: string;
    copiasDisponibles: number; // <-- Le agregamos la 's' al final
}