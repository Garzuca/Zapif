import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Pabellon {
    id: number,
    nombre: string
}

export interface Stand {
    id: number,
    codigo: string,
    pabellonId: number,
    pabellonNombre: string,
    ocupado: boolean,
    metrosCuadrados: number//en el backend es decimal
}

export interface CreatePostulacionExpositorDto {
    nombreCompleto: string;
    telefono?: string | null;
    email: string;
    nombreEmpresa?: string | null;
    rubro: string;
    productoServicio?: string | null;
    ciudad?: string | null;
    enlacesWeb?: string | null;
    pabellonDeseadoId?: number | null;
}
@Injectable({
    providedIn: 'root'
})
export class ReservasService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPabellones(): Observable<Pabellon[]> {
        return this.http.get<Pabellon[]>(`${this.apiUrl}/pabellones`);
    }

    getStands(): Observable<Stand[]> {
        return this.http.get<Stand[]>(`${this.apiUrl}/stands`);
    }

    postPostulacionExpositor(postulacion: CreatePostulacionExpositorDto): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/postulaciones-expositor`, postulacion);
    }
}
