import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectorBloquesComponent } from '../selector-bloques/selector-bloques';

interface CategoriaFipaz {
  id: string;
  titulo: string;
  icono: string;
  badge: string;
  descripcion: string;
}

// Agregamos 'formulario' como un estado válido de nuestra navegación
type AreaExposicion = 'menu' | 'expositores' | 'formulario' | 'sabores' | 'partners' | 'business';

@Component({
  selector: 'app-expositores-wizard',
  standalone: true,
  // 1. Importamos ReactiveFormsModule para que funcionen las validaciones
  imports: [CommonModule, ReactiveFormsModule, SelectorBloquesComponent],
  templateUrl: './expositores-wizard.html',
  styleUrls: ['./expositores-wizard.css']
})
export class ExpositoresWizardComponent {

  areaActiva: AreaExposicion = 'menu';

  // Guardamos temporalmente lo que seleccionaron en el mapa
  bloqueSeleccionado: string | null = null;
  pisoSeleccionado: string | null = null;

  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  // 2. Definimos el objeto del Formulario Reactivo
  postulacionForm!: FormGroup;

  // Listado oficial de Rubros de FIPAZ para el select desplegable
  rubros: string[] = [
    'Tecnología, Software & Startups',
    'Mecánica, Metalmecánica & Industrial',
    'Artesanía, Cultura & Producción Local',
    'Moda, Textiles & Calzado',
    'Hogar, Decoración & Construcción',
    'Cosmética, Salud & Bienestar',
    'Servicios Financieros & Educación',
    'Otros rubros comerciales'
  ];

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
      descripcion: 'El pabellón gastronómico más vibrante de La Paz. Diseñado para restaurantes, cadenas de alimentos, repostería y productores del sector agroindustrial.',
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

  // 3. Inicializamos el constructor con el FormBuilder de Angular
  constructor(private fb: FormBuilder) {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.postulacionForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(4)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[67]\d{7}$/)]], // Valida celulares de Bolivia (8 dígitos, inicia con 6 o 7)
      email: ['', [Validators.required, Validators.email]],
      nombreEmpresa: ['', [Validators.required, Validators.minLength(2)]],
      rubro: ['', Validators.required],
      productoServicio: ['', [Validators.required, Validators.maxLength(300)]],
      ciudad: ['', Validators.required],
      enlacesWeb: [''], // No requerido opcional
      metrosCuadrados: ['', Validators.required]
    });
  }

  cerrar(): void {
    this.areaActiva = 'menu';
    this.postulacionForm.reset(); // Limpia los campos al cerrar
    this.closeModal.emit();
  }

  seleccionarCategoria(id: string): void {
    console.log('Categoría seleccionada para postulación:', id);
    this.areaActiva = id as AreaExposicion;
  }

  // Se ejecuta cuando el usuario selecciona un bloque y piso en el mapa interactivo
  procesarSeleccionBloque(event: { bloque: string; piso: string }): void {
    this.bloqueSeleccionado = event.bloque;
    this.pisoSeleccionado = event.piso;

    console.log('Ubicación pre-guardada:', this.bloqueSeleccionado, this.pisoSeleccionado);

    // Saltamos automáticamente al formulario (Paso 2)
    this.areaActiva = 'formulario';
  }

  // Envío final del formulario
  enviarPostulacion(): void {
    if (this.postulacionForm.invalid) {
      this.postulacionForm.markAllAsTouched(); // Marca todos para mostrar errores en rojo
      return;
    }

    // Unimos los datos del formulario con los datos que arrastramos del mapa de bloques
    const payloadFinal = {
      ...this.postulacionForm.value,
      bloqueDeseado: this.bloqueSeleccionado,
      pisoDeseado: this.pisoSeleccionado,
      categoriaInscripcion: 'expositores', // Fijo de este flujo
      fechaRegistro: new Date()
    };

    console.log('🚀 ¡ENVIANDO POSTULACIÓN FINAL A LA BASE DE DATOS!', payloadFinal);

    // Aquí es donde conectarás tu servicio de Backend (Spring Boot/Render)
    // this.miServicio.crearPostulacion(payloadFinal).subscribe(...);

    alert('¡Tu postulación ha sido registrada con éxito! Un asesor se contactará contigo por WhatsApp.');
    this.cerrar();
  }

  volverAlMenu(): void {
    this.areaActiva = 'menu';
    this.bloqueSeleccionado = null;
    this.pisoSeleccionado = null;
  }

  volverAlMapa(): void {
    this.areaActiva = 'expositores';
  }
}