import { Component, signal,computed, inject } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';
import { LIBROS } from '../../data/libros';
import { Libro } from '../../modelos/libro';
import { LibroService } from '../../servicios/libro-service';

@Component({
  imports: [LibroCard],
  selector: 'app-libro-lista',
  styleUrl: './libro-lista.css',
  templateUrl: './libro-lista.html',
})
export class LibroLista {
  private libroService = inject(LibroService);
  
  protected libros = signal<Libro[]>([]);
  protected terminoBusqueda = signal('');
  protected borrador = signal('');
  protected cargando = signal(false);
  protected mensaje =signal<string|null>(null);

  constructor(){
    this.cargar();
  }

  //Pide los libros al servicio

  private cargar():void{
    this.cargando.set(true);
    this.libroService.listar(this.terminoBusqueda()).subscribe((librosServicio => {
      this.libros.set(librosServicio);
      this.cargando.set(false);
    }))

  }

  protected alEscribir(evento:Event ):void{
   this.borrador.set((evento.target as HTMLInputElement).value);
  }

  protected alBuscar():void{
    this.terminoBusqueda.set(this.borrador().trim());
    this.cargar();
  }

  protected alSolicitar(libro: Libro): void {
    // Llama al servicio, y cuando termine, recarga la lista
    this.libroService.descontarCopia(libro.id).subscribe(()=>{
      this.mensaje.set(`solicitaste ${libro.titulo}`);
      this.cargar(); // <-- Cambiado de cargando() a cargar()
    });
  }

}

