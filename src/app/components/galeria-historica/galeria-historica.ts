import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HitoFeria {
  id: number;
  anio: number;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  categoria: 'moderno' | 'consolidacion' | 'inicios'; // Mapeo para los filtros de décadas
}

@Component({
  selector: 'app-galeria-historica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria-historica.html',
  styleUrls: ['./galeria-historica.css']
})
export class GaleriaHistoricaComponent {

  filtroActivo: string = 'TODOS';
  imagenSeleccionada: HitoFeria | null = null;

  // Datos reales simulados para la grilla de 3x2 (6 hitos históricos de impacto)
  hitos: HitoFeria[] = [
    { id: 1, anio: 2025, titulo: 'Récord Histórico de Expositores', descripcion: 'Superamos las 1,000 empresas participantes e inauguramos la rueda de negocios internacional totalmente digitalizada.', imagenUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', categoria: 'moderno' },
    { id: 2, anio: 2022, titulo: 'El Retorno de la Reactivación', descripcion: 'Consolidamos el reencuentro empresarial del occidente boliviano post-pandemia, reactivando más de 50 millones de dólares en intenciones de negocios.', imagenUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', categoria: 'moderno' },
    { id: 3, anio: 2018, titulo: 'Expansión de Pabellones Internacionales', descripcion: 'Se habilitaron áreas exclusivas para delegaciones diplomáticas de Europa y Asia, abriendo las fronteras comerciales de La Paz al mundo.', imagenUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80', categoria: 'consolidacion' },
    { id: 4, anio: 2012, titulo: 'Consolidación en el Chuquiago Marka', descripcion: 'La FIPAZ traslada sus operaciones principales al moderno Campo Ferial, elevando el estándar de la experiencia técnica de los stands.', imagenUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', categoria: 'consolidacion' },
    { id: 5, anio: 2007, titulo: 'Nace la Rueda de Negocios Oficial', descripcion: 'Se institucionalizan las jornadas de networking empresarial, permitiendo a las PYMES paceñas aliarse con grandes industrias nacionales.', imagenUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=600&q=80', categoria: 'inicios' },
    { id: 6, anio: 2001, titulo: 'La Primera Gran Edición', descripcion: 'Arranca el sueño de la feria internacional en La Paz con un puñado de emprendedores locales comprometidos con el desarrollo regional.', imagenUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80', categoria: 'inicios' }
  ];

  cambiarFiltro(categoria: string): void {
    this.filtroActivo = categoria;
  }

  abrirLightbox(hito: HitoFeria): void {
    this.imagenSeleccionada = hito;
  }

  cerrarLightbox(): void {
    this.imagenSeleccionada = null;
  }

  // Filtrado reactivo para alimentar la grilla HTML
  get hitosFiltrados(): HitoFeria[] {
    if (this.filtroActivo === 'TODOS') return this.hitos;
    return this.hitos.filter(h => h.categoria === this.filtroActivo);
  }
}