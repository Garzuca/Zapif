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
      valor: 'info@fipaz.bo',
      tipo: 'email',
      colorClass: 'canal-rojo'
    },
    {
      id: 2,
      icono: 'fa-solid fa-handshake',
      titulo: 'Área Comercial',
      descripcion: 'Registro de stands, tarifas y contratos de exposición',
      valor: 'comercial@fipaz.bo',
      tipo: 'email',
      colorClass: 'canal-verde'
    },
    {
      id: 3,
      icono: 'fa-solid fa-newspaper',
      titulo: 'Prensa y Comunicación',
      descripcion: 'Acreditaciones, entrevistas y comunicados de prensa',
      valor: 'prensa@fipaz.bo',
      tipo: 'email',
      colorClass: 'canal-gris'
    },
    {
      id: 4,
      icono: 'fa-brands fa-whatsapp',
      titulo: 'WhatsApp Oficial',
      descripcion: 'Atención rápida por mensajería instantánea',
      valor: '+591 2 123 4567',
      tipo: 'telefono',
      colorClass: 'canal-rojo'
    }
  ];

  datosUbicacion = {
    direccion: 'Campo Ferial Chuquiago Marka',
    ciudad: 'La Paz, Bolivia',
    referencia: 'Av. Montes, entre calles Bozo y Loayza',
    horario: 'Lunes a Viernes: 9:00 – 17:00',
    horarioFeria: 'Durante la feria: 10:00 – 21:00'
  };

  scrollAlContacto(): void {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  }
}
