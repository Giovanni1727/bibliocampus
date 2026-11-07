import { Component, signal,computed } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';
import { LIBROS } from '../../data/libros';
import { Libro } from '../../modelos/libro';

@Component({
  imports: [LibroCard],
  selector: 'app-libro-lista',
  styleUrl: './libro-lista.css',
  templateUrl: './libro-lista.html',
})
export class LibroLista {
  protected libros = signal<Libro[]>(LIBROS); //Data de libros
  protected terminoBusqueda = signal('');
  protected borrador = signal('');

  protected librosVisibles = computed(()=>{
    const temp = this.terminoBusqueda().toLowerCase();
    return this.libros().filter(
      (libro) => !temp || libro.titulo.toLowerCase().includes(temp) ||
      libro.autor.toLowerCase().includes(temp)
    )
  });

  protected alEscribir(evento:Event ):void{
   this.borrador.set((evento.target as HTMLInputElement).value);
  }

  protected alBuscar():void{
    this.terminoBusqueda.set(this.borrador().trim());
  }

  protected alSolicitar(libro: Libro): void {
    // Actualizar las copias disponibles llamando a update directamente sobre la señal
    this.libros.update((lista) => 
      lista.map((l) => 
        l.id === libro.id ? { ...l, copiasDisponibles: l.copiasDisponibles - 1 } : l
      )
    );
  }

}
