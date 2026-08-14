import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarFipazComponent } from './shared/navbar-fipaz/navbar-fipaz';
import { FooterFipazComponent } from './components/footer-fipaz/footer-fipaz';
import { ExpositoresWizardComponent } from './components/expositores-wizard/expositores-wizard';
import { VisitantesFipazComponent } from './components/visitantes-fipaz/visitantes-fipaz';
import { VideoYoutube } from './components/video-youtube/video-youtube';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarFipazComponent,
    FooterFipazComponent,
    ExpositoresWizardComponent,
    VisitantesFipazComponent,
    VideoYoutube
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  modalExpositoresAbierto = false;
  modalVisitantesAbierto = false;

  abrirModalExpositores() {
    this.modalExpositoresAbierto = true;
  }

  cerrarModalExpositores() {
    this.modalExpositoresAbierto = false;
  }

  abrirModalVisitantes() {
    this.modalVisitantesAbierto = true;
  }

  cerrarModalVisitantes() {
    this.modalVisitantesAbierto = false;
  }
}
