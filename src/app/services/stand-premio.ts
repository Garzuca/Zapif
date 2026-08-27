import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface StandPremiado {
    id: number;
    nombre: string;
    anio: string;
    descripcion: string;
    imagenUrl: string;
    categoriaPremio: string; // 'DORADO' | 'PLATA'
    fechaCreacion?: string;
}

export const MOCK_STANDS_PREMIADOS: StandPremiado[] = [
    {
        id: 1,
        nombre: 'Quantum Motores Bolivia',
        anio: '2025',
        descripcion: 'Premio al Mejor Stand de Innovación Tecnológica y Movilidad Sostenible.',
        imagenUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
        categoriaPremio: 'DORADO'
    },
    {
        id: 2,
        nombre: 'Cervecería Boliviana Nacional',
        anio: '2025',
        descripcion: 'Premio al Stand con Mejor Experiencia Interactiva y Diseño Arquitectónico.',
        imagenUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800',
        categoriaPremio: 'DORADO'
    },
    {
        id: 3,
        nombre: 'Sofía ALC S.A.',
        anio: '2025',
        descripcion: 'Galardón de Plata en la Categoría Gastronomía y Sector Agroindustrial.',
        imagenUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
        categoriaPremio: 'PLATA'
    },
    {
        id: 4,
        nombre: 'Banco Bisa',
        anio: '2025',
        descripcion: 'Reconocimiento a la Mejor Presencia Institucional y Servicios Financieros.',
        imagenUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
        categoriaPremio: 'PLATA'
    }
];

@Injectable({
    providedIn: 'root'
})
export class StandPremioService {

    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getStandsPremiadosByAnio(anio?: string, categoriaPremio?: string): Observable<StandPremiado[]> {
        let params = new HttpParams();

        if (anio) {
            params = params.set('anio', anio);
        }

        if (categoriaPremio) {
            params = params.set('categoriaPremio', categoriaPremio);
        }

        return this.http.get<StandPremiado[]>(`${this.apiUrl}/stands-premiados`, { params }).pipe(
            catchError((err) => {
                console.warn('Servidor backend offline o sin datos de stands premiados, usando datos de demostración:', err);
                return of(MOCK_STANDS_PREMIADOS);
            })
        );
    }
}
