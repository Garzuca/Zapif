import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface diaAgenda {
    id: number,
    fecha: string, // formato ISO ej:"2026-07-15"
    nombreDia: string
}

export interface EventoAgenda {
    id: number;
    diaId: number;
    categoriaNombre: string | null;
    titulo: string;
    hora: string | null; // formato "HH:mm:ss"
    lugar: string | null;
    descripcionCorta: string | null;
    imagenFondo: string | null;
    creadoPorEmail: string;
    fechaCreacion: string;
}
@Injectable({
    providedIn: 'root'
})
export class EventosService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getDiasActivos(): Observable<diaAgenda[]> {
        return this.http.get<diaAgenda[]>(`${this.apiUrl}/dias-agenda`);
    }
    getEventosActivos(): Observable<EventoAgenda[]> {
        return this.http.get<EventoAgenda[]>(`${this.apiUrl}/eventos-agenda`);
    }
}
