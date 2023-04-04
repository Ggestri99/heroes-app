import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino?:string
  heroes?: Heroes[]

  constructor (
    private _HeroesService: HeroesService
  ) {

  }

  buscando() {
    this._HeroesService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}
