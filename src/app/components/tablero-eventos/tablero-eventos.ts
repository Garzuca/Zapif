import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosService, diaAgenda, EventoAgenda } from '../../services/eventos';
import { forkJoin } from 'rxjs';

export interface EventoAcordeon {
  id: number;
  titulo: string;
  hora: string;
  lugar: string;
  descCorta: string;
  imagenFondo: string;
  colorAcento: string;
}

export interface ColumnaDia {
  fecha: string;
  nombreDia: string;
  eventos: EventoAcordeon[];
}

@Component({
  selector: 'app-tablero-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablero-eventos.html',
  styleUrls: ['./tablero-eventos.css']
})
export class TableroEventosComponent implements OnInit {

  private readonly eventosService = inject(EventosService);

  columnasDias: ColumnaDia[] = [];
  diaSeleccionado!: ColumnaDia;
  cargando: boolean = true;

  ngOnInit(): void {
    this.cargarDatosApi();
  }

  cargarDatosApi(): void {
    this.cargando = true;

    // forkJoin ejecuta ambas peticiones HTTP en paralelo y espera a que respondan
    forkJoin({
      dias: this.eventosService.getDiasActivos(),
      eventos: this.eventosService.getEventosActivos()
    }).subscribe({
      next: ({ dias, eventos }) => {
        // Mapeamos los datos de la API a la estructura que tu HTML ya entiende
        this.columnasDias = dias.map(d => ({
          fecha: d.fecha, // Si quieres formatearla a "07 OCT", puedes usar la librería date-fns o transformarla aquí
          nombreDia: d.nombreDia,
          eventos: eventos
            .filter(e => e.diaId === d.id)
            .map(e => ({
              id: e.id,
              titulo: e.titulo,
              hora: e.hora ? e.hora.slice(0, 5) : 'Por confirmar', // Pasa de "18:30:00" a "18:30"
              lugar: e.lugar ?? 'Lugar por confirmar',
              descCorta: e.descripcionCorta ?? '',
              imagenFondo: e.imagenFondo || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
              colorAcento: '#d93838' // Puedes asignarlo por defecto o usar un color según la categoría
            }))
        }));

        if (this.columnasDias.length > 0) {
          this.diaSeleccionado = this.columnasDias[0];
        }

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar la agenda desde la API:', err);
        this.cargando = false;
      }
    });
  }

  seleccionarDia(col: ColumnaDia): void {
    this.diaSeleccionado = col;
  }
}