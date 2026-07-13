import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ticket {
  tipo: string;
  precio: string;
  beneficio: string;
  icono: string;
  esDestacado: boolean;
}

interface EventoFamiliar {
  hora: string;
  titulo: string;
  lugar: string;
  categoria: string; /* Infantil, Musical, Gastronomia */
}

interface StandExpositor {
  nombre: string;
  pabellon: string;
  nroStand: string;
  categoria: string; /* Tecnologia, Vivienda, Moda, Gastronomia */
  destacado: string;
}

@Component({
  selector: 'app-visitantes-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitantes-fipaz.html',
  styleUrl: './visitantes-fipaz.css'
})
export class VisitantesFipazComponent {

  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  // Pestaña inicial activa
  tabActiva: string = 'precios';

  // Filtro inicial para el directorio de stands
  filtroStandActivo: string = 'TODOS';

  // 1. Datos de Accesos y Tarifas
  tickets: Ticket[] = [
    { tipo: 'Entrada Mayor', precio: '30 BOB', beneficio: 'Acceso total a todos los pabellones comerciales y shows nocturnos.', icono: 'fa-solid fa-ticket', esDestacado: true },
    { tipo: 'Entrada Menor', precio: '10 BOB', beneficio: 'Válido para niños de 5 a 12 años. Menores de 5 años entran gratis.', icono: 'fa-solid fa-child', esDestacado: false },
    { tipo: 'Adulto Mayor / Personas con Discapacidad', precio: '15 BOB', beneficio: 'Tarifa preferencial presentando carnet de identidad o de discapacidad.', icono: 'fa-solid fa-blind', esDestacado: false }
  ];

  // 2. Datos de Eventos Familiares
  eventos: EventoFamiliar[] = [
    { hora: '17:00 - 18:30', titulo: 'Show Infantil de Magia y Cuenta Cuentos', lugar: 'Escenario Central - Pabellón Rojo', categoria: 'Infantil' },
    { hora: '19:00 - 20:00', titulo: 'Cocina en Vivo: Sabores Paceños Tradicionales', lugar: 'Plaza de Comidas - Pabellón Verde', categoria: 'Gastronomia' },
    { hora: '20:30 - 22:30', titulo: 'Desfile de Moda Empresarial y Concierto Acústico', lugar: 'Escenario Principal Exterior', categoria: 'Musical' }
  ];

  // 3. Datos del Directorio de Stands
  stands: StandExpositor[] = [
    { nombre: 'Quantum Motores', pabellon: 'Pabellón Rojo', nroStand: 'A-12', categoria: 'Tecnologia', destacado: 'Vehículos Eléctricos' },
    { nombre: 'Imvisa Inmobiliaria', pabellon: 'Pabellón Amarillo', nroStand: 'B-04', categoria: 'Vivienda', destacado: 'Proyectos de Departamentos' },
    { nombre: 'Diseños Alpaca Bolivia', pabellon: 'Pabellón Verde', nroStand: 'C-25', categoria: 'Moda', destacado: 'Prendas de Exportación' },
    { nombre: 'Chocolates Para Ti', pabellon: 'Pabellón Verde (Sabores)', nroStand: 'S-09', categoria: 'Gastronomia', destacado: 'Chocolatería Artesanal' },
    { nombre: 'Sony Store Bolivia', pabellon: 'Pabellón Rojo', nroStand: 'A-15', categoria: 'Tecnologia', destacado: 'Audio y Consolas' }
  ];

  cerrarModal(): void {
    this.closeModal.emit();
  }

  cambiarTab(tab: string): void {
    this.tabActiva = tab;
  }

  filtrarStands(categoria: string): void {
    this.filtroStandActivo = categoria;
  }

  // Lógica de filtrado en tiempo real para el directorio
  get standsFiltrados(): StandExpositor[] {
    if (this.filtroStandActivo === 'TODOS') {
      return this.stands;
    }
    return this.stands.filter(s => s.categoria === this.filtroStandActivo);
  }
}
