import { Component, OnInit, signal } from '@angular/core';
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
export class AppComponent implements OnInit {

  pasoFormuario = signal<'inicio' | 'pabellones' | 'registro'>('inicio');
  emailExpositor = signal<string>('');
  empresaExpositor = signal<string>('');
  modalExpositoresAbierto = false;
  modalVisitantesAbierto = false;

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    const accion = params.get('accion');
    const email = params.get('email');
    const empresa = params.get('empresa');

    if (accion === 'postular' || email) {
      if (email) this.emailExpositor.set(email);
      if (empresa) this.emailExpositor.set(empresa);

      this.pasoFormuario.set('pabellones');

      setTimeout(() => {
        const elementoSeccion = document.getElementById('selector-bloques');
        elementoSeccion?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }

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
