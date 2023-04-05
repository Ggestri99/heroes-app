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

   getSugerencias(termino:string): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes/${termino}`)
   }

   getHeroes():Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`)
   }

   getHeroePorId(id:string):Observable<Heroes>{
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`)
   }
}
