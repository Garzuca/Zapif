import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-fipaz',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-fipaz.html',
  styleUrls: ['./navbar-fipaz.css']
})
export class NavbarFipazComponent {

  // Creamos el evento de salida hacia el componente padre
  @Output() onQuieroExponerClick = new EventEmitter<void>();
  @Output() onQuieroVisitarClick = new EventEmitter<void>();

  menuAbierto = false;

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  dispararModal(): void {
    this.onQuieroExponerClick.emit();
    this.cerrarMenu();
  }

  dispararModalVisitantes(): void {
    this.onQuieroVisitarClick.emit();
    this.cerrarMenu();
  }
}