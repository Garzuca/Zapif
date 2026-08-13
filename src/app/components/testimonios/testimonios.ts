import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonio {
  id: number;
  nombre: string;
  cargoEmpresa: string;
  comentario: string;
  fotoUrl?: string; // Opcional, si no hay foto usaremos iniciales o icono
  estrellas: number;
}

@Component({
  selector: 'app-seccion-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrls: ['./testimonios.css']
})
export class SeccionTestimoniosComponent {
  testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: 'Varinia Estrada - Moda Corp',
      cargoEmpresa: 'Varias ferias',
      comentario: 'Cada año la feria va creciendo, y aconsejo a que se unan y participen, tenemos que apoyar a nuestra feria y que cada año venga más gente, y mejorar nuestros productos.',
      estrellas: 5
    },
    {
      id: 2,
      nombre: 'Paola Sahonero',
      cargoEmpresa: 'Gerente Sucursal',
      comentario: 'En la feria puedo presentar las últimas novedades de mis productos además que puedo generar nuevos clientes.',
      estrellas: 5
    }
  ];
}