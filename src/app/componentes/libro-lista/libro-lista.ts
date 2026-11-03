import { Component } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';

@Component({
  imports: [LibroCard],
  selector: 'app-libro-lista',
  styleUrl: './libro-lista.css',
  templateUrl: './libro-lista.html',
})
export class LibroLista {}
