import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-fipaz',
  imports: [],
  templateUrl: './hero-fipaz.html',
  styleUrl: './hero-fipaz.css',
})
export class HeroFipaz {
  @Output() onQuieroExponerClick = new EventEmitter<void>();
  @Output() onQuieroVisitarClick = new EventEmitter<void>();
  @Output() onReservarEspacioClick = new EventEmitter<void>();

  dispararModalExpositores(): void {
    this.onQuieroExponerClick.emit();
  }

  dispararModalVisitantes(): void {
    this.onQuieroVisitarClick.emit();
  }
}
