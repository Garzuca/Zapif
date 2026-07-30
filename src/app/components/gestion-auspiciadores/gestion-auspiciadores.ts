import { Component, signal } from '@angular/core';

interface Auspiciador {
  id: number;
  nombre: string;
  url: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-gestion-auspiciadores',
  standalone: true,
  templateUrl: './gestion-auspiciadores.html',
  styleUrl: './gestion-auspiciadores.css'
})
export class GestionAuspiciadores {
  // Lista de 24 auspiciadores centralizada
  auspiciadores = signal<Auspiciador[]>([
    { id: 1, nombre: 'Auspiciador 1', url: 'https://fipaz.com.bo', imagenUrl: 'https://picsum.photos/id/1060/200/100' },
    { id: 2, nombre: 'Auspiciador 2', url: 'https://fipaz.com.bo', imagenUrl: 'https://picsum.photos/id/1018/200/100' },
    { id: 3, nombre: 'Auspiciador 3', url: 'https://fipaz.com.bo', imagenUrl: 'https://picsum.photos/id/1025/200/100' },

    // ... completar los 24
  ]);
}