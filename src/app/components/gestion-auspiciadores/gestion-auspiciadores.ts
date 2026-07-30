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
    { id: 1, nombre: 'Tu Super', url: 'https://www.facebook.com/TuSuperSupermercado/', imagenUrl: 'assets/images/auspiciadores/auspi-1-fondo.png' },
    { id: 2, nombre: 'cine center', url: 'https://www.cinecenter.com.bo/', imagenUrl: 'assets/images/auspiciadores/cinecenter.png' },
    { id: 3, nombre: 'motocicletas toro', url: 'https://www.facebook.com/people/Motocicletas-Toro-Ev/61568327279816/', imagenUrl: 'assets/images/auspiciadores/toro-ev.jpg' },
    { id: 4, nombre: 'bolivision', url: 'https://www.redbolivision.tv.bo/', imagenUrl: 'assets/images/auspiciadores/bolivision.avif' },
    { id: 5, nombre: 'abya yala', url: 'https://abyayala.tv.bo/', imagenUrl: 'assets/images/auspiciadores/abyayala-1.jpg' },
    { id: 6, nombre: 'unibienes', url: 'https://www.unibienes.com.bo/', imagenUrl: 'assets/images/auspiciadores/unibienes-fondo.png' },
    { id: 7, nombre: 'el Diario', url: 'https://www.eldiario.net/portal/', imagenUrl: 'assets/images/auspiciadores/el-diario.png' },
    { id: 8, nombre: 'Caparazon', url: 'https://www.facebook.com/CentroComercialCaparazonMallCenter', imagenUrl: 'assets/images/auspiciadores/caparazon.jpg' },
    { id: 9, nombre: 'gamlp', url: 'https://lapaz.bo/', imagenUrl: 'assets/images/auspiciadores/gamlp.png' },
    { id: 10, nombre: 'cotel', url: 'https://cotelnet.com/', imagenUrl: 'assets/images/auspiciadores/cotel.png' },
    { id: 11, nombre: 'ctv', url: 'https://ctvbolivia.com/', imagenUrl: 'assets/images/auspiciadores/ctv.webp' },
    { id: 12, nombre: 'municipalidad mecapaca', url: 'https://www.facebook.com/p/Gobierno-Aut%C3%B3nomo-Municipal-de-Mecapaca-100064458141932/', imagenUrl: 'assets/images/auspiciadores/mecapaca.jpg' },
    { id: 13, nombre: 'cizee', url: 'https://www.facebook.com/CIZEEBolivia/', imagenUrl: 'assets/images/auspiciadores/cizee.jpg' },
    { id: 14, nombre: 'Vitta Max', url: 'https://www.facebook.com/vittamax.bolivia', imagenUrl: 'assets/images/auspiciadores/vittamax.jpg' },
    { id: 15, nombre: 'radio splendid', url: 'https://radiosplendid.bo/', imagenUrl: 'assets/images/auspiciadores/radio-splendid.webp' },
    { id: 16, nombre: 'ectv', url: 'https://www.facebook.com/grupoempresarialecvt', imagenUrl: 'assets/images/auspiciadores/ectv.jpg' },
    { id: 17, nombre: 'latino radio', url: 'https://eslatinoradio.com/', imagenUrl: 'assets/images/auspiciadores/latinoradio.png' },
    { id: 18, nombre: 'campo ferial', url: 'https://chuquiagomarka.com.bo/', imagenUrl: 'assets/images/auspiciadores/campoferial.png' },
    { id: 19, nombre: 'rtp', url: 'https://rtpbolivia.com.bo/', imagenUrl: 'assets/images/auspiciadores/rtp.webp' },
    { id: 20, nombre: 'Dajers srl', url: 'https://www.findglocal.com/BO/La-Paz/582104224985607/Dajers-Importaciones-SRL', imagenUrl: 'assets/images/auspiciadores/dajers.jpg' },
    { id: 21, nombre: 'radio gente', url: 'https://www.facebook.com/radiogentebolivia', imagenUrl: 'assets/images/auspiciadores/radiogente.webp' },
    { id: 22, nombre: 'radio laser', url: 'https://radios.com.bo/laser-103-9/', imagenUrl: 'assets/images/auspiciadores/radiolaser.png' },
    { id: 23, nombre: 'cimac', url: 'https://www.facebook.com/cimacelectrodomesticos', imagenUrl: 'assets/images/auspiciadores/cimac.png' },
  ]);
}