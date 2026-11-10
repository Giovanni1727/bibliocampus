import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';
import { LIBROS } from '../data/libros';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',

})

export class LibroService {
    //Copia del arreglo original de libros
    private libros: Libro[] = LIBROS.map((l)=> ({...l})) //Data de libros
    constructor(){
        console.log('LibroService creado');
    }

    //Listar
    listar(terminoBusqueda:string = ''):Observable<Libro[]>{
        const temp = terminoBusqueda.toLowerCase();

        const lista = this.libros.filter(
        (libro) => !temp ||
        libro.titulo.toLowerCase().includes(temp) ||
        libro.autor.toLowerCase().includes(temp)
    )

    return of(lista)
    }

    //Descontar

    descontarCopia(id:number):Observable<void>{
        this.libros = this.libros.map((l) => 
       
        l.id === id ? { ...l, copiasDisponibles: l.copiasDisponibles - 1 } : l
      );
      return of(undefined);
    }
}
