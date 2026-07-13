import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EventoAcordeon {
  id: number;
  titulo: string;
  hora: string;
  lugar: string;
  descCorta: string;
  imagenFondo: string;
  colorAcento: string;
}

interface ColumnaDia {
  fecha: string;
  nombreDia: string;
  eventos: EventoAcordeon[];
}

@Component({
  selector: 'app-tablero-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablero-eventos.html',
  styleUrls: ['./tablero-eventos.css']
})
export class TableroEventosComponent implements OnInit {

  columnasDias: ColumnaDia[] = [
    {
      fecha: '07 OCT',
      nombreDia: 'Miércoles - Inauguración',
      eventos: [
        {
          id: 1,
          titulo: 'Solemne Acto de Apertura FIPAZ',
          hora: '18:30 PM',
          lugar: 'Salón Illimani',
          descCorta: 'Apertura oficial de las Bodas de Plata con presencia de autoridades, corte de cinta y el brindis de honor de la feria.',
          imagenFondo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#d93838'
        },
        {
          id: 2,
          titulo: 'Cóctel de Bienvenida Empresarial',
          hora: '20:00 PM',
          lugar: 'Bloque Ejecutivo Verde',
          descCorta: 'Primer encuentro de networking de la feria. Espacio ideal para establecer lazos comerciales tempranos.',
          imagenFondo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#09893e'
        }
      ]
    },
    {
      fecha: '08 OCT',
      nombreDia: 'Jueves - Rueda de Negocios',
      eventos: [
        {
          id: 3,
          titulo: 'Rueda Internacional de Negocios',
          hora: '10:00 AM',
          lugar: 'Pabellón Amarillo',
          descCorta: 'Mesas de negociación directa entre empresas nacionales e internacionales buscando alianzas estratégicas.',
          imagenFondo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#0066cc'
        },
        {
          id: 4,
          titulo: 'Conferencia IA & Industrias',
          hora: '16:00 PM',
          lugar: 'Auditorio Principal',
          descCorta: 'Una mirada profunda al desarrollo de software, automatización industrial y arquitectura backend en el mercado actual.',
          imagenFondo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#f5a623'
        }
      ]
    },
    {
      fecha: '09 OCT',
      nombreDia: 'Viernes - Noche de Oro',
      eventos: [
        {
          id: 5,
          titulo: 'Desfile Cultural Diseños Paceños',
          hora: '19:00 PM',
          lugar: 'Plaza Central Central',
          descCorta: 'Pasarela de gala que expone las últimas tendencias estéticas de diseñadores e industrias textiles locales.',
          imagenFondo: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#a133d4'
        },
        {
          id: 6,
          titulo: 'Gala de Reconocimiento Empresarial',
          hora: '21:00 PM',
          lugar: 'Salón Murillo',
          descCorta: 'Cierre oficial y entrega de los galardones galardonando al stand más innovador y la mejor propuesta corporativa.',
          imagenFondo: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#e0a914'
        }
      ]
    },
    {
      fecha: '10 OCT',
      nombreDia: 'Sábado - Noche de Cumbia',
      eventos: [
        {
          id: 7,
          titulo: 'Concierto de Cumbia e Integración',
          hora: '19:30 PM',
          lugar: 'Escenario Principal',
          descCorta: 'Disfruta de las agrupaciones más destacadas en vivo en una noche llena de ritmo, baile y celebración popular.',
          imagenFondo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#00d2ff'
        },
        {
          id: 8,
          titulo: 'Show de Luces y Efectos Especiales',
          hora: '22:00 PM',
          lugar: 'Explanada de Eventos',
          descCorta: 'Espectáculo pirotécnico y de luces LED de alta definición celebrando las Bodas de Plata de la FIPAZ.',
          imagenFondo: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#ff007f'
        }
      ]
    },
    {
      fecha: '11 OCT',
      nombreDia: 'Domingo - Familia y Tecnología',
      eventos: [
        {
          id: 9,
          titulo: 'Torneo E-Sports FIPAZ 2026',
          hora: '14:00 PM',
          lugar: 'Pabellón Tecnológico',
          descCorta: 'Finales en vivo de los videojuegos más populares de la escena nacional con grandes premios para los ganadores.',
          imagenFondo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#7289da'
        },
        {
          id: 10,
          titulo: 'Show Infantil y Magia en Familia',
          hora: '16:30 PM',
          lugar: 'Teatro al Aire Libre',
          descCorta: 'Una tarde mágica para los más pequeños con malabaristas, ilusionistas y sorpresas interactivas.',
          imagenFondo: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#2ecc71'
        }
      ]
    },
    {
      fecha: '12 OCT',
      nombreDia: 'Lunes - Metalmecánica e Industria',
      eventos: [
        {
          id: 11,
          titulo: 'Demostración de Maquinaria Pesada',
          hora: '11:00 AM',
          lugar: 'Área Externa A',
          descCorta: 'Pruebas de rendimiento en vivo y demostración de última tecnología en excavación y construcción.',
          imagenFondo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#f39c12'
        },
        {
          id: 12,
          titulo: 'Workshop: Seguridad Industrial Moderna',
          hora: '15:00 PM',
          lugar: 'Sala de Capacitación B',
          descCorta: 'Capacitación en normas internacionales de seguridad laboral y uso óptimo de equipo de protección personal.',
          imagenFondo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#e74c3c'
        }
      ]
    },
    {
      fecha: '13 OCT',
      nombreDia: 'Martes - Mujeres Emprendedoras',
      eventos: [
        {
          id: 13,
          titulo: 'Foro: Liderazgo Femenino en Negocios',
          hora: '16:00 PM',
          lugar: 'Auditorio Illimani',
          descCorta: 'Panel con destacadas empresarias que comparten sus historias de éxito y estrategias de crecimiento.',
          imagenFondo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#9b59b6'
        },
        {
          id: 14,
          titulo: 'Ronda de Pitch Emprendedor',
          hora: '18:30 PM',
          lugar: 'Salón de Innovación',
          descCorta: 'Nuevas marcas bolivianas presentan sus proyectos ante inversionistas ángeles y aceleradoras de negocios.',
          imagenFondo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#1abc9c'
        }
      ]
    },
    {
      fecha: '14 OCT',
      nombreDia: 'Miércoles - Folklore e Innovación',
      eventos: [
        {
          id: 15,
          titulo: 'Festival Folklórico de Danzas Típicas',
          hora: '19:00 PM',
          lugar: 'Plaza Principal',
          descCorta: 'Espectacular muestra de la diversidad cultural de Bolivia con agrupaciones artísticas tradicionales.',
          imagenFondo: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#e67e22'
        },
        {
          id: 16,
          titulo: 'Conversatorio: Folklore Digital y NFT',
          hora: '21:00 PM',
          lugar: 'Sala Interactiva',
          descCorta: 'Cómo el arte tradicional y la digitalización crean nuevos mercados en la Web3 y coleccionables digitales.',
          imagenFondo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#34495e'
        }
      ]
    },
    {
      fecha: '15 OCT',
      nombreDia: 'Jueves - Construcción Sostenible',
      eventos: [
        {
          id: 17,
          titulo: 'Panel sobre Materiales Ecológicos',
          hora: '10:30 AM',
          lugar: 'Pabellón Verde',
          descCorta: 'Debates sobre ladrillos ecológicos, paneles solares de bajo costo y arquitectura bioclimática.',
          imagenFondo: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#27ae60'
        },
        {
          id: 18,
          titulo: 'Presentación de Proyectos Urbanos',
          hora: '15:30 PM',
          lugar: 'Salón de Cristal',
          descCorta: 'Propuestas para la modernización e infraestructura sostenible de las ciudades metropolitanas.',
          imagenFondo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#2980b9'
        }
      ]
    },
    {
      fecha: '16 OCT',
      nombreDia: 'Viernes - Sabores de Bolivia',
      eventos: [
        {
          id: 19,
          titulo: 'Showcooking de Chefs Internacionales',
          hora: '17:00 PM',
          lugar: 'Patio Gastronómico',
          descCorta: 'Clases magistrales de cocina fusión combinando ingredientes nativos con técnicas contemporáneas.',
          imagenFondo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#d35400'
        },
        {
          id: 20,
          titulo: 'Cata de Vinos y Singanis de Altura',
          hora: '20:00 PM',
          lugar: 'Cava Ejecutiva',
          descCorta: 'Experiencia sensorial exclusiva guiada por sommeliers de renombre degustando etiquetas premium.',
          imagenFondo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#c0392b'
        }
      ]
    },
    {
      fecha: '17 OCT',
      nombreDia: 'Sábado - Clausura y Premiación',
      eventos: [
        {
          id: 21,
          titulo: 'Entrega del Galardón FIPAZ 2026',
          hora: '19:00 PM',
          lugar: 'Salón Illimani',
          descCorta: 'Premiación oficial a los expositores más destacados en diseño de stand, sustentabilidad e innovación.',
          imagenFondo: 'https://images.unsplash.com/photo-1531844251246-9a1bfaae0d76?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#f1c40f'
        },
        {
          id: 22,
          titulo: 'Concierto Clausura: Bodas de Plata',
          hora: '21:30 PM',
          lugar: 'Explanada Principal',
          descCorta: 'Gran cierre musical con artistas estelares festejando el éxito rotundo de esta edición especial.',
          imagenFondo: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop',
          colorAcento: '#9b59b6'
        }
      ]
    }
  ];

  diaSeleccionado!: ColumnaDia;

  ngOnInit() {
    this.diaSeleccionado = this.columnasDias[0];
  }

  seleccionarDia(col: ColumnaDia) {
    this.diaSeleccionado = col;
  }
}