import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para las directivas en componentes standalone

interface EventoFeria {
  hora: string;
  titulo: string;
  expositor: string;
  ubicacion: string;
  categoria: 'conferencia' | 'rueda' | 'cultural';
}

@Component({
  selector: 'app-tablero-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablero-eventos.html', // Ajusta al nombre exacto de tu archivo HTML
  styleUrls: ['./tablero-eventos.css']    // Ajusta al nombre exacto de tu archivo CSS
})
export class TableroEventosComponent {

  // Categoría seleccionada por defecto
  categoriaActiva: string = 'todos';

  // Base de datos de ejemplo estructurada
  listaEventos: EventoFeria[] = [
    {
      hora: '15:00',
      titulo: 'Innovación Tecnológica en el Backend Industrial',
      expositor: 'Ing. Perez pedro',
      ubicacion: 'Auditorio Bloque Rojo',
      categoria: 'conferencia'
    },
    {
      hora: '17:30',
      titulo: 'Rueda de Negocios B2B Internacional',
      expositor: 'Cámara de Comercio',
      ubicacion: 'Salón de Convenciones (Bloque Verde)',
      categoria: 'rueda'
    },
    {
      hora: '19:00',
      titulo: 'Presentación Cultural - Danzas del Chuquiago Marka',
      expositor: 'Ballet Municipal de La Paz',
      ubicacion: 'Escenario Central Exterior',
      categoria: 'cultural'
    },
    {
      hora: '20:30',
      titulo: 'Estrategias de Ciberseguridad en Sistemas Críticos',
      expositor: 'Consultores Senior .NET',
      ubicacion: 'Auditorio Bloque Amarillo',
      categoria: 'conferencia'
    }
  ];

  // Función lógica para cambiar el filtro activo (Reemplaza a tus funciones de JS nativo)
  cambiarFiltro(nuevaCategoria: string): void {
    this.categoriaActiva = nuevaCategoria;
  }
}