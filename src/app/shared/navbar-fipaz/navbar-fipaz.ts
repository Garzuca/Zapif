import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-fipaz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-fipaz.html',
  styleUrls: ['./navbar-fipaz.css']
})
export class NavbarFipazComponent {

  // Creamos el evento de salida hacia el componente padre
  @Output() onQuieroExponerClick = new EventEmitter<void>();

  dispararModal(): void {
    this.onQuieroExponerClick.emit();
  }
}