import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Bloque {
  id: string;
  nombre: string;
  imagen: string;
  ocupacion: number; // Porcentaje de 0 a 100
  descripcion: string;
  disclaimer: string;
  pisos: string[]; // Lista de pisos, ej: ['Planta Baja', 'Planta Alta']
}

@Component({
  selector: 'app-selector-bloques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selector-bloques.html',
  styleUrls: ['./selector-bloques.css']
})
export class SelectorBloquesComponent {
  // Emitimos un evento al formulario padre cuando la selección esté lista
  @Output() seleccionCompletada = new EventEmitter<{ bloque: string; piso: string }>();

  // ID del bloque que tiene actualmente el menú de pisos abierto (con blur)
  bloqueConPisosActivo: string | null = null;

  // Selección final guardada
  bloqueSeleccionadoId: string | null = null;
  pisoSeleccionado: string | null = null;

  // Datos reales basados en el flujo de FIPAZ
  bloques: Bloque[] = [
    {
      id: 'rojo',
      nombre: 'Bloque Rojo (Internacional)',
      imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600', // Reemplazar por tu render local
      ocupacion: 15,
      descripcion: 'El centro neurálgico de la feria. Ideal para marcas internacionales, grandes corporaciones y embajadas de alta visibilidad.',
      disclaimer: 'La asignación del stand final dentro del bloque será coordinada por el equipo comercial para garantizar una distribución armoniosa.',
      pisos: ['Planta Baja', 'Planta Alta']
    },
    {
      id: 'amarillo',
      nombre: 'Bloque Amarillo (Bolivia)',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600',
      ocupacion: 60,
      descripcion: 'Espacio dedicado a la producción nacional, PyMEs, emprendimientos locales e instituciones estatales e industriales de Bolivia.',
      disclaimer: 'La organización se encargará de evitar que competidores directos queden ubicados en stands inmediatamente adyacentes.',
      pisos: ['Planta Baja', 'Planta Alta']
    },
    {
      id: 'verde',
      nombre: 'Bloque Verde (La Paz)',
      imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600',
      ocupacion: 95,
      descripcion: 'Área dinámica para la innovación, tecnología, artesanía de vanguardia y servicios de valor agregado.',
      disclaimer: 'Al contar con un solo piso, tu ubicación general quedará asignada de forma directa tras completar este registro.',
      pisos: ['Planta Única'] // Solo un piso -> Selección automática
    }
  ];

  seleccionarBloque(bloque: Bloque): void {
    // Si tiene un solo piso, se autoselecciona de inmediato
    if (bloque.pisos.length === 1) {
      this.confirmarSeleccion(bloque.id, bloque.pisos[0]);
    } else {
      // Si tiene varios pisos, disparamos el efecto Blur y mostramos opciones
      this.bloqueConPisosActivo = bloque.id;
    }
  }

  confirmarSeleccion(bloqueId: string, piso: string): void {
    this.bloqueSeleccionadoId = bloqueId;
    this.pisoSeleccionado = piso;
    this.bloqueConPisosActivo = null; // Cerramos cualquier menú de pisos

    // Avisamos al formulario padre con los datos elegidos
    this.seleccionCompletada.emit({
      bloque: bloqueId,
      piso: piso
    });
  }

  cancelarPisos(event: MouseEvent): void {
    event.stopPropagation(); // Evita que se vuelva a disparar el click de la tarjeta
    this.bloqueConPisosActivo = null;
  }
}