import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface VideoTikTok {
    id: number;
    titulo: string;
    urlTikTok: string;
    videoId: string;
    activo: boolean;
    fechaPublicacion: string;
}

@Injectable({
    providedIn: 'root'
})
export class TikTokService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/TikToks`;

    // Único método necesario para el portal público de la FIPAZ
    obtenerPublicos(): Observable<VideoTikTok[]> {
        return this.http.get<VideoTikTok[]>(`${this.apiUrl}/publicos`);
    }
}