import { Component, EventEmitter, inject, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservasService, Pabellon } from '../../services/reservas';

// Mapeo manual de imágenes por ID de pabellón
export const IMAGENES_PABELLONES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600', // P. Internacional
  2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600', // P. Bolivia / PyMEs
  3: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600', // P. Innovación
  4: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600', // P. Banca & Servicios
  5: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600'  // Exterior / Gastronomía
};

export const IMAGEN_DEFAULT = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600';

export interface SeleccionBloqueEvent {
  pabellonId: number;
  nombrePabellon: string;
}

@Component({
  selector: 'app-selector-bloques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector-bloques.html',
  styleUrls: ['./selector-bloques.css']
})
export class SelectorBloquesComponent implements OnInit {

  private readonly reservasService = inject(ReservasService);
  private readonly cdr = inject(ChangeDetectorRef);

  @Output() seleccionCompletada = new EventEmitter<SeleccionBloqueEvent>();

  pabellones: Pabellon[] = [];
  pabellonSeleccionadoId: number | null = null;
  cargando: boolean = true;

  readonly disclaimerDefault = 'La asignación final del espacio será coordinada por el equipo comercial de FIPAZ.';

  ngOnInit(): void {
    this.cargarPabellones();
  }

  cargarPabellones(): void {
    this.cargando = true;

    this.reservasService.getPabellones().subscribe({
      next: (data: Pabellon[]) => {
        this.pabellones = [...data];
        this.cargando = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al cargar pabellones:', err);
        this.cargando = false;
        this.cdr.markForCheck();
      }
    });
  }

  // Método para asignar la imagen manual según el ID
  obtenerImagenPabellon(id: number): string {
    return IMAGENES_PABELLONES[id] || IMAGEN_DEFAULT;
  }

  seleccionarPabellon(pabellon: Pabellon): void {
    this.pabellonSeleccionadoId = pabellon.id;

    this.seleccionCompletada.emit({
      pabellonId: pabellon.id,
      nombrePabellon: pabellon.nombre
    });
  }
}