import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroCard } from './componentes/libro-card/libro-card';
import { LibroLista } from './componentes/libro-lista/libro-lista';
import { Navar } from './componentes/navar/navar';



@Component({
  imports: [RouterOutlet, LibroCard, LibroLista, Navar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bibliocampus');
}
