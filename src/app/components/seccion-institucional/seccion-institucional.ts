import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seccion-institucional',
  standalone: true, // 🌟 Standalone explícito para evitar problemas en la raíz
  imports: [CommonModule],
  templateUrl: './seccion-institucional.html',
  styleUrls: ['./seccion-institucional.css']
})
export class SeccionInstitucionalComponent {
  // Por ahora no requiere lógica compleja, solo renderizado estático de alta calidad
}
export class SeccionInstitucional { }
