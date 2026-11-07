// Agregamos 'input' a la lista de importaciones
import { Component, computed, signal, input, output } from '@angular/core'; 
import { Libro } from '../../modelos/libro';
import { ConstantPool } from '@angular/compiler';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  // Comunicación Padre -> hijo
  libro = input.required<Libro>();

  // Comunicacion Hijo -> Padre
  prestamoSolicitado = output<Libro>();

  protected agotado = computed(() => this.libro().copiasDisponibles === 0);
  
  protected etiqueta = computed(() => 
    this.agotado() ? 'Agotado' : `Disponible - ${this.libro().copiasDisponibles} ${this.libro().copiasDisponibles === 1 ? 'copia' : 'copias'}`
  );

  protected alSolicitar(): void {
    
    console.log(this.libro());
    this.prestamoSolicitado.emit(this.libro());
  }
}