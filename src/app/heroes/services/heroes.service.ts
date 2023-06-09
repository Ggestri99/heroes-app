import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
  }

  getSugerencias(termino: string): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`)
  }

  getHeroePorId(id: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`)
  }

  agregarHeroe(heroe: any): Observable<Heroes> {
    return this.http.post<Heroes>(`${this.baseUrl}/heroes`, heroe)
  }

  actualizarHeroe(heroe: any): Observable<Heroes> {
    return this.http.put<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<Heroes>(`${this.baseUrl}/heroes/${id}`)
  }
}
