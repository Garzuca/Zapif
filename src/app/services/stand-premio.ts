import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface StandPremiado {
    id: number,
    nombre: string;
    anio: string;
    descripcion: string;
    imagenUrl: string;
    categoriaPremio: string;
    fechaCreacion: string;
}

@Injectable({
    providedIn: 'root'
})
export class StandPremioService {

    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getStandsPremiadosByAnio(anio?: string, categoria?: string): Observable<StandPremiado[]> {
        let params = new HttpParams();

        if (anio) {
            params = params.set('anio', anio);
        }

        if (categoria) {
            params = params.set('categoria', categoria);
        }

        return this.http.get<StandPremiado[]>(`${this.apiUrl}/stands-premiados`, { params });
    }
}
