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
  termino:string = ''
  heroes?: Heroes[]
  heroeSeleccionado?: Heroes;
  estado?:boolean = true


  constructor (
    private _HeroesService: HeroesService
  ) {

  }

  buscando() {

    this._HeroesService.getSugerencias(this.termino.trim()).subscribe(heroes => this.heroes = heroes)
    console.log(this.termino)}



  opcionSeleccionada(e:MatAutocompleteSelectedEvent) {

    if(!e.option.value){
      this.heroeSeleccionado = undefined
      return
    }
    const heroe:Heroes = e.option.value
    this.termino = heroe.superhero

    this._HeroesService.getHeroePorId(heroe.id!).subscribe(
      heroe=>this.heroeSeleccionado = heroe
    )
  }
}
