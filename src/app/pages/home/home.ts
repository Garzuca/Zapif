import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardMetricas } from '../../components/dashboard-metricas/dashboard-metricas';
import { TableroEventosComponent } from '../../components/tablero-eventos/tablero-eventos';
import { PatrocinadoresPremiun } from '../../components/patrocinadores-premiun/patrocinadores-premiun';
import { HeroFipaz } from '../../components/hero-fipaz/hero-fipaz';
import { ExpositoresWizardComponent } from '../../components/expositores-wizard/expositores-wizard';
import { VisitantesFipazComponent } from '../../components/visitantes-fipaz/visitantes-fipaz';
import { FooterFipazComponent } from '../../components/footer-fipaz/footer-fipaz';
import { GaleriaHistoricaComponent } from '../../components/galeria-historica/galeria-historica';
import { ContadorFipazComponent } from "../../components/contador-fipaz/contador-fipaz";
import { SeccionInstitucionalComponent } from '../../components/seccion-institucional/seccion-institucional';
import { BlogsFipaz } from '../../components/blogs-fipaz/blogs.fipaz';
import { ContactosFipaz } from '../../components/contactos-fipaz/contactos-fipaz';
import { GestionAuspiciadores } from '../../components/gestion-auspiciadores/gestion-auspiciadores';
import { SeccionTikTokComponent } from "../../components/seccion-tiktok/seccion-tiktok";
import { SeccionTestimoniosComponent } from "../../components/testimonios/testimonios";
import { VideoYoutube } from "../../components/video-youtube/video-youtube";
import { NosotrosFipaz } from '../../components/nosotros-fipaz/nosotros-fipaz';
import { StandPremiados } from '../../components/stand-premiados/stand-premiados';

@Component({
  selector: 'app-home',
  imports: [
    DashboardMetricas,
    TableroEventosComponent,
    PatrocinadoresPremiun,
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
    VideoYoutube,
    NosotrosFipaz,
    StandPremiados
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Output() OnQuieroExponerClick = new EventEmitter<void>();

  abrirModalExpositores() {
    this.OnQuieroExponerClick.emit();
  }
}
