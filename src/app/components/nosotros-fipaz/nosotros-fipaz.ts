import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MetricaImpacto {
  cifra: string;
  label: string;
  icono: string;
}

export interface HitoHistorico {
  periodo: string;
  lugar: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-nosotros-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros-fipaz.html',
  styleUrl: './nosotros-fipaz.css'
})
export class NosotrosFipaz {

  readonly metricas = signal<MetricaImpacto[]>([
    { cifra: '650+', label: 'Expositores por versión', icono: '🏢' },
    { cifra: '250.000+', label: 'Visitantes registrados', icono: '👥' },
    { cifra: '$US 50M+', label: 'Movimiento económico', icono: '💼' },
    { cifra: '10.000', label: 'Empleos directos e indirectos', icono: '⚙️' }
  ]);

  // Bloque 2: Timeline de Sedes Históricas
  readonly timelineSedes = signal<HitoHistorico[]>([
    {
      periodo: '2001 - Inicios',
      lugar: 'Círculo de Oficiales del Ejército (COE)',
      titulo: 'Nacimiento de la FIPAZ',
      descripcion: 'Creación de la institución para impulsar el desarrollo ferial e industrial en la zona de Calacoto.',
      icono: '🌱'
    },
    {
      periodo: 'Etapa de Crecimiento',
      lugar: 'Círculo Aeronáutico',
      titulo: 'Expansión de Pabellones',
      descripcion: 'Traslado a nuevos recintos temporales para dar respuesta a la creciente demanda empresarial.',
      icono: '📈'
    },
    {
      periodo: 'Masificación Urbana',
      lugar: 'Coliseo Cerrado Julio Borelli Viterito',
      titulo: 'Sede Central y Concurrencia',
      descripcion: 'Ubicación estratégica en el centro paceño que facilitó la llegada masiva de visitantes de La Paz y El Alto.',
      icono: '🏛️'
    },
    {
      periodo: 'Consolidación',
      lugar: 'Campo Ferial Chuquiago Marka',
      titulo: 'Sede Definitiva',
      descripcion: 'Establecimiento permanente en los bloques Rojo, Amarillo y Verde como la feria líder del occidente.',
      icono: '🚀'
    }
  ]);
}