import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { EventosService, diaAgenda, EventoAgenda } from '../../services/eventos';

@Component({
  selector: 'app-tablero-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablero-eventos.html',
  styleUrls: ['./tablero-eventos.css']
})
export class TableroEventosComponent implements OnInit {

  private readonly eventosService = inject(EventosService);

  dias: diaAgenda[] = [];
  eventos: EventoAgenda[] = [];

  diaSeleccionado: diaAgenda | null = null;
  cargando: boolean = true;

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;

    forkJoin({
      dias: this.eventosService.getDiasActivos(),
      eventos: this.eventosService.getEventosActivos()
    }).subscribe({
      next: ({ dias, eventos }) => {
        this.dias = dias;
        this.eventos = eventos;

        if (this.dias.length > 0) {
          this.diaSeleccionado = this.dias[0];
        }

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar datos de la API:', err);
        this.cargando = false;
      }
    });
  }

  seleccionarDia(dia: diaAgenda): void {
    this.diaSeleccionado = dia;
  }

  // Método helper para obtener los eventos del día actualmente activo
  get eventosDelDia(): EventoAgenda[] {
    if (!this.diaSeleccionado) return [];
    return this.eventos.filter(ev => ev.diaId === this.diaSeleccionado!.id);
  }
}