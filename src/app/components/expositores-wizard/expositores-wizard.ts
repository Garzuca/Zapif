import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CategoriaFipaz {
  id: string;
  titulo: string;
  icono: string;
  badge: string;
  descripcion: string;
}

@Component({
  selector: 'app-expositores-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expositores-wizard.html', // Ajusta al nombre exacto de tu archivo HTML
  styleUrls: ['./expositores-wizard.css']    // Ajusta al nombre exacto de tu archivo CSS
})
export class ExpositoresWizardComponent {

  // Recibe del componente padre si debe mostrarse o no
  @Input() isOpen: boolean = false;

  // Evento para avisarle al padre que el usuario quiere cerrar el modal
  @Output() closeModal = new EventEmitter<void>();

  // Listado oficial de categorías FIPAZ solicitado
  categorias: CategoriaFipaz[] = [
    {
      id: 'expositores',
      titulo: 'FIPAZ Expositores',
      icono: 'fa-solid fa-shop',
      badge: 'General & Multisectorial',
      descripcion: 'Espacio ideal para la industria manufacturera, comercio, artesanía y servicios generales que buscan venta directa y posicionamiento masivo.'
    },
    {
      id: 'sabores',
      titulo: 'FIPAZ Sabores',
      icono: 'fa-solid fa-utensils',
      badge: 'Gastronomía & Alimentos',
      descripcion: 'El pabellón gastronómico más vibrante de La Paz. Diseñado para restaurantes, cadenas de alimentos, repostería y productores del sector agroindustrial.'
    },
    {
      id: 'partners',
      titulo: 'FIPAZ Partners',
      icono: 'fa-solid fa-handshake',
      badge: 'Grandes Marcas & Auspicios',
      descripcion: 'Alianzas corporativas de alto nivel, entidades financieras, empresas transnacionales y marcas líderes que buscan presencia institucional dominante.'
    },
    {
      id: 'business',
      titulo: 'FIPAZ Business',
      icono: 'fa-solid fa-briefcase',
      badge: 'Rueda de Negocios B2B',
      descripcion: 'Exclusivo para empresas enfocadas en importación, exportación, conexiones corporativas directas y agendas comerciales de alta gama.'
    }
  ];

  cerrar(): void {
    this.closeModal.emit();
  }

  seleccionarCategoria(id: string): void {
    console.log('Categoría seleccionada para postulación:', id);
    // Aquí después engancharemos el siguiente paso del formulario (Wizard)
  }
}
