import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BlogPost {
  id: number;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;
  tiempoLectura: string;
  imagen: string;
  autor: string;
  destacado: boolean;
}

@Component({
  selector: 'app-blogs-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.fipaz.html',
  styleUrl: './blogs.fipaz.css',
})
export class BlogsFipaz {
  // Lista de categorías para el filtro
  categorias: string[] = ['Todos', 'Prensa', 'Eventos', 'Emprendedores', 'Gastronomía'];

  // Signals para manejar el estado del blog
  categoriaSeleccionada = signal<string>('Todos');
  textoBusqueda = signal<string>('');

  // Listado original de posts de blog
  private todosLosBlogs = signal<BlogPost[]>([
    {
      id: 1,
      titulo: 'Inauguración FIPAZ 2026: Rompiendo récords de asistencia en la primera jornada',
      resumen: 'La 25ª edición de la Feria Internacional de La Paz abrió sus puertas con un despliegue sin precedentes de tecnología, cultura y negocios. Más de 15,000 personas visitaron el recinto ferial en sus primeras horas de apertura al público.',
      categoria: 'Prensa',
      fecha: '13 Jul 2026',
      tiempoLectura: '5 min',
      imagen: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=80',
      autor: 'Prensa FIPAZ',
      destacado: true
    },
    {
      id: 2,
      titulo: 'Rueda de Negocios supera los 15 millones de dólares en intenciones comerciales',
      resumen: 'Empresas nacionales y delegaciones internacionales consolidan alianzas estratégicas durante el segundo día de negociaciones multilaterales.',
      categoria: 'Emprendedores',
      fecha: '12 Jul 2026',
      tiempoLectura: '4 min',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
      autor: 'FIPAZ Negocios',
      destacado: false
    },
    {
      id: 3,
      titulo: 'Agenda Ferial: Los espectáculos y eventos que no te puedes perder este fin de semana',
      resumen: 'Conoce el cronograma de conciertos en vivo, shows artísticos y la cartelera gastronómica que ambientará la noche paceña en el escenario principal.',
      categoria: 'Eventos',
      fecha: '11 Jul 2026',
      tiempoLectura: '3 min',
      imagen: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
      autor: 'FIPAZ Eventos',
      destacado: false
    },
    {
      id: 4,
      titulo: 'La gastronomía paceña brilla en el patio de comidas de la feria',
      resumen: 'Desde la comida tradicional hasta propuestas gourmet, te mostramos los stands culinarios que están conquistando los paladares en esta versión.',
      categoria: 'Gastronomía',
      fecha: '10 Jul 2026',
      tiempoLectura: '4 min',
      imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
      autor: 'FIPAZ Gourmet',
      destacado: false
    },
    {
      id: 5,
      titulo: 'Pabellón de Tecnología: Las startups bolivianas que están marcando tendencia',
      resumen: 'Inteligencia artificial, automatización y soluciones fintech locales capturan la atención de inversionistas extranjeros en el pabellón tecnológico.',
      categoria: 'Emprendedores',
      fecha: '09 Jul 2026',
      tiempoLectura: '6 min',
      imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
      autor: 'FIPAZ Tech',
      destacado: false
    }
  ]);

  // Computed signal para filtrar de forma súper reactiva los blogs
  blogsFiltrados = computed(() => {
    const cat = this.categoriaSeleccionada();
    const query = this.textoBusqueda().toLowerCase().trim();

    return this.todosLosBlogs().filter(blog => {
      const coincideCat = cat === 'Todos' || blog.categoria === cat;
      const coincideBusqueda = !query || 
        blog.titulo.toLowerCase().includes(query) || 
        blog.resumen.toLowerCase().includes(query);
      return coincideCat && coincideBusqueda;
    });
  });

  // Computed para extraer específicamente el artículo destacado actual si existe y cumple con el filtro
  blogDestacado = computed(() => {
    const filtrados = this.blogsFiltrados();
    // Devolvemos el primer elemento que esté marcado como destacado, o en su defecto el primero disponible
    const principal = filtrados.find(b => b.destacado);
    return principal || (filtrados.length > 0 ? filtrados[0] : null);
  });

  // Computed para las noticias normales (excluyendo la destacada de arriba)
  blogsSecundarios = computed(() => {
    const filtrados = this.blogsFiltrados();
    const destacado = this.blogDestacado();
    if (!destacado) return filtrados;
    return filtrados.filter(blog => blog.id !== destacado.id);
  });

  // Cambiar categoría
  seleccionarCategoria(cat: string): void {
    this.categoriaSeleccionada.set(cat);
  }

  // Escuchar entrada de teclado en el buscador
  buscar(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.textoBusqueda.set(input.value);
  }
}
