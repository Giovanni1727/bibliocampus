import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-libro-card',
  styleUrl: './libro-card.css',
  templateUrl: './libro-card.html',
})
export class LibroCard {
  titulo: string = "Clean code libro";
  autor: string = "Robert C. Martin";
  anio: number = 2008;
  copias = signal(3);
  categoria = "Buenas practicas";

  protected agotado = computed(() => this.copias() === 0);
  protected etiqueta = computed(() => 
    this.agotado() ? 'Agotado' : `Disponible - ${this.copias()} ${this.copias() === 1 ? 'copia' : 'copias'}`
  );
  protected alSolicitar():void{
    this.copias.update ((c)=> c + 1)
  }
}