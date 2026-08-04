import { Component, Input, Output, EventEmitter, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectorBloquesComponent, SeleccionBloqueEvent } from '../selector-bloques/selector-bloques';
import { RUBROS_OPCIONES } from '../../shared/constants/rubros.constants';
import { ReservasService, CreatePostulacionExpositorDto } from '../../services/reservas';


interface CategoriaFipaz {
  id: string;
  titulo: string;
  icono: string;
  badge: string;
  descripcion: string;
}

export type AreaExposicion = 'menu' | 'expositores' | 'formulario' | 'sabores' | 'partners' | 'business';

@Component({
  selector: 'app-expositores-wizard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectorBloquesComponent],
  templateUrl: './expositores-wizard.html',
  styleUrls: ['./expositores-wizard.css']
})
export class ExpositoresWizardComponent {

  private readonly fb = inject(FormBuilder);
  private readonly reservasService = inject(ReservasService);
  private readonly cdr = inject(ChangeDetectorRef);

  areaActiva: AreaExposicion = 'menu';

  // Datos reales del Pabellón seleccionado
  pabellonSeleccionadoId: number | null = null;
  nombrePabellonSeleccionado: string = '';

  // Estados HTTP
  enviando: boolean = false;
  mensajeError: string | null = null;

  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  // Formulario Reactivo alineado a CreatePostulacionExpositorDto
  postulacionForm: FormGroup = this.fb.group({
    nombreCompleto: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.maxLength(30), Validators.pattern(/^[67]\d{7}$/)]], // Celular Bolivia
    nombreEmpresa: ['', [Validators.maxLength(150)]],
    rubro: ['', [Validators.required, Validators.maxLength(100)]],
    productoServicio: ['', [Validators.maxLength(300)]],
    ciudad: ['', [Validators.maxLength(100)]],
    enlacesWeb: ['', [Validators.maxLength(300)]],
    pabellonDeseadoId: [null as number | null]
  });

  // Categorías informativas del Modal
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

  // Listado oficial de rubros
  readonly rubros = RUBROS_OPCIONES;

  cerrar(): void {
    this.areaActiva = 'menu';
    this.postulacionForm.reset();
    this.pabellonSeleccionadoId = null;
    this.nombrePabellonSeleccionado = '';
    this.mensajeError = null;
    this.closeModal.emit();
  }

  seleccionarCategoria(id: string): void {
    this.areaActiva = id as AreaExposicion;
  }

  // Escucha el evento real del SelectorBloquesComponent (Pabellón de la BD)
  procesarSeleccionBloque(event: SeleccionBloqueEvent): void {
    this.pabellonSeleccionadoId = event.pabellonId;
    this.nombrePabellonSeleccionado = event.nombrePabellon;

    // Actualizamos el ID en el Formulario Reactivo
    this.postulacionForm.patchValue({
      pabellonDeseadoId: event.pabellonId
    });

    console.log('Pabellón pre-guardado:', this.pabellonSeleccionadoId, this.nombrePabellonSeleccionado);

    // Avanzamos al paso del formulario
    this.areaActiva = 'formulario';
    this.cdr.markForCheck();
  }

  // Envío real a la API de .NET
  enviarPostulacion(): void {
    if (this.postulacionForm.invalid) {
      this.postulacionForm.markAllAsTouched();
      return;
    }

    this.enviando = true;
    this.mensajeError = null;

    const payload: CreatePostulacionExpositorDto = this.postulacionForm.value;

    this.reservasService.postPostulacionExpositor(payload).subscribe({
      next: (res) => {
        this.enviando = false;
        alert('¡Tu postulación ha sido registrada con éxito! Un asesor comercial de FIPAZ se contactará contigo.');
        this.cerrar();
      },
      error: (err) => {
        console.error('Error al enviar la postulación:', err);
        this.enviando = false;
        this.mensajeError = 'Ocurrió un error al procesar tu postulación. Por favor intenta de nuevo.';
        this.cdr.markForCheck();
      }
    });
  }

  volverAlMenu(): void {
    this.areaActiva = 'menu';
  }

  volverAlMapa(): void {
    this.areaActiva = 'expositores';
  }
}