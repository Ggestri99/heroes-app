import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  modelName?: string
  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: '',
  }

  constructor(
    private _heroesService: HeroesService,
  ){

  }
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  guardar() {
    if(this.heroe.superhero.trim().length === 0) {
      return
    } else {
      this._heroesService.agregarHeroe( this.heroe ).subscribe(
        resp => {
          console.log('respuesta:', this.heroe)
        }
      )
    }
  }
}
