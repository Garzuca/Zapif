import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandPremiado } from '../../services/stand-premio';

@Component({
  selector: 'app-stand-premiados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stand-premiados.html',
  styleUrl: './stand-premiados.css',
})
export class StandPremiados {
  private readonly standsSignal = signal<StandPremiado[]>([]);
  readonly stands = this.standsSignal.asReadonly();
  readonly indiceActivo = signal(0);

  @Input({ alias: 'stands' })
  set standsInput(value: StandPremiado[] | null | undefined) {
    const next = value ?? [];
    this.standsSignal.set(next);

    if (this.indiceActivo() >= next.length) {
      this.indiceActivo.set(0);
    }
  }

  readonly anguloPaso = computed(() => {
    const total = this.stands().length;
    return total > 0 ? 360 / total : 0;
  });

  readonly rotacionGlobal = computed(() => {
    return -this.indiceActivo() * this.anguloPaso();
  });

  siguiente(): void {
    const total = this.stands().length;
    if (total === 0) return;
    this.indiceActivo.update(idx => (idx + 1) % total);
  }

  anterior(): void {
    const total = this.stands().length;
    if (total === 0) return;
    this.indiceActivo.update(idx => (idx - 1 + total) % total);
  }

  seleccionarIndice(index: number): void {
    this.indiceActivo.set(index);
  }

  obtenerEstiloItem(index: number): Record<string, string> {
    const angulo = index * this.anguloPaso();
    const radio = Math.max(280, this.stands().length * 60);

    return {
      'transform': `rotateY(${angulo}deg) translateZ(${radio}px)`
    };
  }
}
