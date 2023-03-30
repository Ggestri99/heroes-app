import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http: HttpClient
  ) {
   }

   getHeroes():Observable<Heroes[]>{
    return this.http.get<Heroes[]>('http://localhost:3000/heroes')
   }
}
