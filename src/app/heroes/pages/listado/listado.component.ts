import { HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes$?:Observable<Heroes[]>

  constructor(
    private _HeroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.heroes$ = this._HeroesService.getHeroes()

  }
}
