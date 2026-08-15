import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MetricaImpacto {
  cifra: string;
  label: string;
  icono?: string;
}

export interface HitoHistorico {
  periodo: string;
  lugar: string;
  titulo?: string;
  descripcion: string;
  icono?: string;
  esDestacado?: boolean;
}

export interface PilarInstitucional {
  tipo: 'mision' | 'vision';
  tag: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface AreaTrabajo {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface EventoHistorico {
  nombre: string;
  icono: string;
  categoria: 'destacado' | 'premio' | 'general' | 'tecnico';
}

@Component({
  selector: 'app-nosotros-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros-fipaz.html',
  styleUrl: './nosotros-fipaz.css'
})
export class NosotrosFipaz {

  // Bloque 1: Métricas clave
  readonly metricas = signal<MetricaImpacto[]>([
    { cifra: '+650', label: 'Expositores por versión', icono: 'fa-solid fa-building' },
    { cifra: '+250.000', label: 'Visitantes promedio', icono: 'fa-solid fa-users' },
    { cifra: '+$50M', label: 'Movimiento Económico (USD)', icono: 'fa-solid fa-chart-line' },
    { cifra: '10.000', label: 'Empleos Directos e Indirectos', icono: 'fa-solid fa-briefcase' }
  ]);

  // Bloque 2: Timeline de Sedes Históricas
  readonly timelineSedes = signal<HitoHistorico[]>([
    {
      periodo: '2001 – 2003',
      lugar: 'Círculo de Oficiales del Ejército (COE)',
      titulo: 'Nacimiento de la FIPAZ',
      descripcion: 'En sus tres primeras ediciones, la FIPAZ nació y se consolidó en las instalaciones del COE, reuniendo a las empresas e instituciones pioneras que creyeron en el proyecto ferial para La Paz.',
      icono: 'fa-solid fa-seedling'
    },
    {
      periodo: '2004 – 2006',
      lugar: 'Círculo Aeronáutico',
      titulo: 'Expansión de Pabellones',
      descripcion: 'Debido al rápido crecimiento en la cantidad de expositores, la feria trasladó sus operaciones al Círculo Aeronáutico para ampliar el número de pabellones y estands disponibles.',
      icono: 'fa-solid fa-arrow-trend-up'
    },
    {
      periodo: '2007 – 2013',
      lugar: 'Coliseo Cerrado Julio Borelli Viterito',
      titulo: 'Sede Central y Concurrencia',
      descripcion: 'Durante 7 años consecutivos, la FIPAZ se asentó en pleno centro paceño. El Coliseo Cerrado permitió masificar la asistencia del público general y afianzar la logística de grandes espectáculos y ruedas de negocios.',
      icono: 'fa-solid fa-landmark'
    },
    {
      periodo: '2014 – Presente (2026)',
      lugar: 'Campo Ferial Chuquiago Marka',
      titulo: 'Sede Definitiva',
      descripcion: 'Un hito institucional impulsado por la visión y gestión del Presidente Ejecutivo de FIPAZ, Gerardo Dick, cuyos esfuerzos derivaron inicialmente en el proyecto del Centro de Eventos de Següencoma y culminaron en la construcción del campo ferial más moderno del país. Hoy, la FIPAZ ocupa sus múltiples pabellones consolidadas como la sede definitiva.',
      icono: 'fa-solid fa-rocket',
      esDestacado: true
    }
  ]);

  // Bloque 3: Misión y Visión
  readonly pilares = signal<PilarInstitucional[]>([
    {
      tipo: 'mision',
      tag: 'PROPÓSITO ACTUAL',
      titulo: 'Misión',
      descripcion: 'Organizar y desarrollar ferias, exposiciones y eventos de alto nivel que impulsen el crecimiento económico, fortalezcan el sector empresarial y productivo, promuevan la innovación, la inversión y el intercambio comercial, generando espacios de integración entre instituciones públicas, privadas, emprendedores y la población.',
      icono: 'fa-solid fa-bullseye'
    },
    {
      tipo: 'vision',
      tag: 'FUTURO ESTRATÉGICO',
      titulo: 'Visión',
      descripcion: 'Ser la organización ferial líder de Bolivia y un referente internacional en la planificación y ejecución de eventos, reconocida por su excelencia, innovación y aporte al desarrollo económico, empresarial y social del país.',
      icono: 'fa-solid fa-eye'
    }
  ]);

  // Bloque 4: Objetivos Institucionales
  readonly objetivos = signal<string[]>([
    'Promover el desarrollo económico y productivo nacional.',
    'Generar oportunidades de negocio entre empresas e instituciones.',
    'Impulsar la innovación, el emprendimiento y la competitividad empresarial.',
    'Fortalecer la integración entre el sector público, privado y académico.',
    'Contribuir a la generación de empleo y dinamización de la economía.',
    'Posicionar a Bolivia como un destino competitivo para eventos y ferias internacionales.'
  ]);

  // Bloque 5: Áreas de Trabajo
  readonly areasTrabajo = signal<AreaTrabajo[]>([
    {
      titulo: 'Organización de Ferias',
      descripcion: 'Planificación y ejecución integral de ferias multisectoriales de carácter nacional e internacional.',
      icono: 'fa-solid fa-layer-group'
    },
    {
      titulo: 'Congresos y Convenciones',
      descripcion: 'Producción de simposios, seminarios y eventos corporativos de alto nivel institucional.',
      icono: 'fa-solid fa-people-group'
    },
    {
      titulo: 'Comercialización de Espacios',
      descripcion: 'Asignación estratégica y venta de pabellones y estands en eventos feriales.',
      icono: 'fa-solid fa-store'
    },
    {
      titulo: 'Patrocinios y Alianzas',
      descripcion: 'Gestión de spónsors, patrocinadores oficiales y acuerdos de cooperación interinstitucional.',
      icono: 'fa-solid fa-handshake'
    },
    {
      titulo: 'Marketing y Publicidad',
      descripcion: 'Estrategias de difusión, prensa, redes sociales y campañas de comunicación masiva.',
      icono: 'fa-solid fa-bullhorn'
    },
    {
      titulo: 'Montaje y Stands',
      descripcion: 'Diseño arquitectónico, armado de panelería y producción física de estructuras feriales.',
      icono: 'fa-solid fa-screwdriver-wrench'
    },
    {
      titulo: 'Ruedas de Negocio',
      descripcion: 'Coordinación de encuentros B2B entre oferta y demanda para la generación de acuerdos comerciales.',
      icono: 'fa-solid fa-comments-dollar'
    },
    {
      titulo: 'Gestión Logística',
      descripcion: 'Acreditaciones, control de accesos, seguridad y soporte operativo en predio.',
      icono: 'fa-solid fa-truck-ramp-box'
    },
    {
      titulo: 'Promoción Empresarial',
      descripcion: 'Desarrollo de vitrinas de posicionamiento continuo para marcas e instituciones.',
      icono: 'fa-solid fa-chart-line-up'
    }
  ]);

  // Bloque 6: Eventos Históricos
  readonly eventosHistoricos = signal<EventoHistorico[]>([
    { nombre: 'Feria Internacional de La Paz – FIPAZ (25 versiones)', icono: '⭐', categoria: 'destacado' },
    { nombre: 'Pabellón La Paz Expone en EXPOCRUZ (Palmera Dorada)', icono: '🏆', categoria: 'premio' },
    { nombre: '1ra Feria Internacional del Chaco – FE y CHACO', icono: '🌐', categoria: 'general' },
    { nombre: 'EXPOCHACO – Yacuiba', icono: '📍', categoria: 'general' },
    { nombre: 'Feria Internacional de Tarija – San Jacinto', icono: '📍', categoria: 'general' },
    { nombre: 'FEXPO BENI', icono: '📍', categoria: 'general' },
    { nombre: 'FEXPOSI – 1ra Feria Internacional de Potosí', icono: '📍', categoria: 'general' },
    { nombre: 'EXPO YACUIBA', icono: '📍', categoria: 'general' },
    { nombre: 'EXPO BOLIVIA', icono: '🇧🇴', categoria: 'general' },
    { nombre: 'Primera versión de La Paz Expone', icono: '🏛️', categoria: 'general' },
    { nombre: 'EXPO SALUD – Santa Cruz', icono: '🏥', categoria: 'general' },
    { nombre: 'Feria del Vino – La Paz', icono: '🍷', categoria: 'general' },
    { nombre: 'EXPOFERIAS con Domos Geodésicos', icono: '🏕️', categoria: 'general' },
    { nombre: 'Feria del Deporte Extremo', icono: '🧗', categoria: 'general' },
    { nombre: 'Feria Nacional de la Pequeña Industria', icono: '⚙️', categoria: 'general' },
    { nombre: 'NOEL Expone', icono: '🎄', categoria: 'general' },
    { nombre: 'Asesoramiento técnico y logístico ferial', icono: '🛠️', categoria: 'tecnico' },
    { nombre: 'Diseño, montaje y producción de panelería', icono: '🏗️', categoria: 'tecnico' }
  ]);
}