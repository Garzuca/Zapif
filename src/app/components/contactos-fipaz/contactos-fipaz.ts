import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CanalContacto {
  id: number;
  icono: string;
  titulo: string;
  descripcion: string;
  valor: string;
  tipo: 'email' | 'telefono' | 'ubicacion' | 'horario';
  colorClass: string;
  badgeText: string;
}

@Component({
  selector: 'app-contactos-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactos-fipaz.html',
  styleUrl: './contactos-fipaz.css',
})
export class ContactosFipaz {

  canales: CanalContacto[] = [
    {
      id: 1,
      icono: 'fa-solid fa-envelope-open-text',
      titulo: 'Correo General',
      descripcion: 'Para consultas e información general sobre la feria',
      valor: 'infofipaz@gmail.com',
      tipo: 'email',
      colorClass: 'canal-rojo',
      badgeText: 'Atención General'
    },
    {
      id: 2,
      icono: 'fa-solid fa-handshake',
      titulo: 'Área Comercial',
      descripcion: 'Registro de stands, tarifas y contratos de exposición',
      valor: 'ejecutiva1.fipaz@gmail.com',
      tipo: 'email',
      colorClass: 'canal-verde',
      badgeText: 'Ventas & Stands'
    },
    {
      id: 3,
      icono: 'fa-solid fa-newspaper',
      titulo: 'Prensa y Medios',
      descripcion: 'Acreditaciones, entrevistas y comunicados de prensa',
      valor: 'feriafipaz@gmail.com',
      tipo: 'email',
      colorClass: 'canal-gris',
      badgeText: 'Medios y Prensa'
    },
    {
      id: 4,
      icono: 'fa-brands fa-whatsapp',
      titulo: 'WhatsApp Oficial',
      descripcion: 'Atención rápida e instantánea por mensajería',
      valor: '+59176204510',
      tipo: 'telefono',
      colorClass: 'canal-whatsapp',
      badgeText: 'Chat en Vivo'
    }
  ];

  datosUbicacion = {
    direccion: 'Oficina San Pedro, Cap. Castrillo Nº 363',
    ciudad: 'La Paz, Bolivia',
    referencia: '',
    horario: 'Lunes a Sábado: 08:30 - 12:30'
  };

  scrollAlContacto(): void {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  }
}
