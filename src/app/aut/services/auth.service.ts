import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Auth } from 'src/app/aut/interface/auth.interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _auth: Auth | undefined

  get auth(): Auth{
    return {...this._auth!}
  }

  constructor(
    private http: HttpClient,
  ) { }

  login(): Observable<any> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap(auth => this._auth = auth)
    )
  }

  logout(){
    this._auth = undefined
  }
}
