import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-fipaz',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos FormsModule para capturar los inputs con [(ngModel)]
  templateUrl: './footer-fipaz.html',
  styleUrls: ['./footer-fipaz.css']
})
export class FooterFipazComponent {

  @Output() onExponerClick = new EventEmitter<void>();
  @Output() onVisitanteClick = new EventEmitter<void>();

  // Estructura de datos temporal para el formulario antes de conectar el Backend
  contacto = {
    email: '',
    telefono: ''
  };

  exitoEnvio: boolean = false;

  procesarContacto(form: any): void {
    if (form.valid) {
      // Aquí simularás la petición POST a tu API de Spring Boot/Python en el futuro
      console.log('Datos listos para enviar al backend:', this.contacto);

      this.exitoEnvio = true;

      // Limpiamos el formulario
      this.contacto = { email: '', telefono: '' };
      form.resetForm();

      // Desaparecer el mensaje de éxito después de 4 segundos
      setTimeout(() => {
        this.exitoEnvio = false;
      }, 4000);
    }
  }

  dispararExpositores(): void {
    this.onExponerClick.emit();
  }

  dispararVisitantes(): void {
    this.onVisitanteClick.emit();
  }
}