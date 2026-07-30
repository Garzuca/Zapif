import { Component, signal } from '@angular/core';

interface Auspiciador {
  id: number;
  nombre: string;
  url: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-gestion-auspiciadores',
  standalone: true,
  templateUrl: './gestion-auspiciadores.html',
  styleUrl: './gestion-auspiciadores.css'
})
export class GestionAuspiciadores {
  // Lista de 24 auspiciadores centralizada
  auspiciadores = signal<Auspiciador[]>([
    { id: 1, nombre: 'Auspiciador 1', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/auspi-1-fondo.png' },
    { id: 2, nombre: 'Auspiciador 2', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/cinecenter.png' },
    { id: 3, nombre: 'Auspiciador 3', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/toro-ev.jpg' },
    { id: 4, nombre: 'Auspiciador 4', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/bolivision.avif' },
    { id: 5, nombre: 'Auspiciador 5', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/abyayala-1.jpg' },
    { id: 6, nombre: 'Auspiciador 6', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/unibienes-fondo.png' },
    { id: 7, nombre: 'Auspiciador 7', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/el-diario.png' },
    { id: 8, nombre: 'Auspiciador 8', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/caparazon.jpg' },
    { id: 9, nombre: 'Auspiciador 9', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/gamlp.png' },
    { id: 10, nombre: 'Auspiciador 10', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/cotel.png' },
    { id: 11, nombre: 'Auspiciador 11', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/ctv.webp' },
    { id: 12, nombre: 'Auspiciador 12', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/mecapaca.jpg' },
    { id: 13, nombre: 'Auspiciador 13', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/cizee.jpg' },
    { id: 14, nombre: 'Auspiciador 14', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/vittamax.jpg' },
    { id: 15, nombre: 'Auspiciador 15', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/radio-splendid.webp' },
    { id: 16, nombre: 'Auspiciador 16', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/ectv.jpg' },
    { id: 17, nombre: 'Auspiciador 17', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/latinoradio.png' },
    { id: 18, nombre: 'Auspiciador 18', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/campoferial.png' },
    { id: 19, nombre: 'Auspiciador 19', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/rtp.webp' },
    { id: 20, nombre: 'Auspiciador 20', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/dajers.jpg' },
    { id: 21, nombre: 'Auspiciador 21', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/radiogente.webp' },
    { id: 22, nombre: 'Auspiciador 22', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/radiolaser.png' },
    { id: 23, nombre: 'Auspiciador 23', url: 'https://fipaz.com.bo', imagenUrl: 'assets/images/auspiciadores/cimac.png' },
  ]);
}