import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino = ''
  heroes?: Heroes[]
  heroeSeleccionado?: Heroes


  constructor (
    private _HeroesService: HeroesService
  ) {

  }

  buscando() {
    this._HeroesService.getSugerencias(this.termino).subscribe(heroes => this.heroes = heroes)
    console.log(this.termino)
  }

  opcionSeleccionada(e:MatAutocompleteSelectedEvent) {
    const heroe:Heroes = e.option.value
    this.termino = heroe.superhero

    this._HeroesService.getHeroePorId(heroe.id!).subscribe(
      heroe=>this.heroeSeleccionado = heroe
    )
  }
}
