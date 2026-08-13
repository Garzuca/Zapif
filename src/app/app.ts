import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMetricas } from './components/dashboard-metricas/dashboard-metricas';
import { TableroEventosComponent } from './components/tablero-eventos/tablero-eventos';
import { PatrocinadoresPremiun } from './components/patrocinadores-premiun/patrocinadores-premiun';
import { NavbarFipazComponent } from './shared/navbar-fipaz/navbar-fipaz';
import { HeroFipaz } from './components/hero-fipaz/hero-fipaz';
import { ExpositoresWizardComponent } from './components/expositores-wizard/expositores-wizard';
import { VisitantesFipazComponent } from './components/visitantes-fipaz/visitantes-fipaz';
import { FooterFipazComponent } from './components/footer-fipaz/footer-fipaz';
import { GaleriaHistoricaComponent } from './components/galeria-historica/galeria-historica';
import { ContadorFipazComponent } from "./components/contador-fipaz/contador-fipaz";
import { SeccionInstitucionalComponent } from './components/seccion-institucional/seccion-institucional';
import { BlogsFipaz } from './components/blogs-fipaz/blogs.fipaz';
import { ContactosFipaz } from './components/contactos-fipaz/contactos-fipaz';
import { GestionAuspiciadores } from './components/gestion-auspiciadores/gestion-auspiciadores';
import { SeccionTikTokComponent } from "./components/seccion-tiktok/seccion-tiktok";
import { SeccionTestimoniosComponent } from "./components/testimonios/testimonios";
import { VideoYoutube } from "./components/video-youtube/video-youtube";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DashboardMetricas,
    TableroEventosComponent,
    PatrocinadoresPremiun,
    NavbarFipazComponent,
    HeroFipaz,
    ExpositoresWizardComponent,
    VisitantesFipazComponent,
    FooterFipazComponent,
    GaleriaHistoricaComponent,
    ContadorFipazComponent,
    SeccionInstitucionalComponent,
    BlogsFipaz,
    ContactosFipaz,
    GestionAuspiciadores,
    SeccionTikTokComponent,
    SeccionTestimoniosComponent,
    VideoYoutube
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'fipaz-app';

  modalExpositoresAbierto: boolean = false;
  modalVisitantesAbierto: boolean = false;

  abrirModalExpositores(): void {
    this.modalExpositoresAbierto = true;
  }

  cerrarModalExpositores(): void {
    this.modalExpositoresAbierto = false;
  }

  abrirModalVisitantes(): void {
    this.modalVisitantesAbierto = true;
  }

  cerrarModalVisitantes(): void {
    this.modalVisitantesAbierto = false;
  }
}
