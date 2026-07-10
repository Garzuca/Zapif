import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMetricas } from './components/dashboard-metricas/dashboard-metricas'; // Ajusta al nombre real de tu archivo
import { TableroEventosComponent } from './components/tablero-eventos/tablero-eventos';       // Ajusta al nombre real de tu archivo
import { PatrocinadoresPremiun } from './components/patrocinadores-premiun/patrocinadores-premiun';
import { NavbarFipazComponent } from './shared/navbar-fipaz/navbar-fipaz';
import { HeroFipaz } from './components/hero-fipaz/hero-fipaz';
import { ExpositoresWizardComponent } from './components/expositores-wizard/expositores-wizard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DashboardMetricas, // <-- Registramos el bloque de KPIs
    TableroEventosComponent,     // <-- Registramos la agenda interactiva
    PatrocinadoresPremiun,
    NavbarFipazComponent,
    HeroFipaz,
    ExpositoresWizardComponent
  ],
  templateUrl: './app.html', // O el nombre abreviado si aplica en tu versión
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'fipaz-app';

  modalExpositoresAbierto: boolean = false;

  abrirModalExpositores(): void {
    this.modalExpositoresAbierto = true;
  }

  cerrarModalExpositores(): void {
    this.modalExpositoresAbierto = false;
  }
}
