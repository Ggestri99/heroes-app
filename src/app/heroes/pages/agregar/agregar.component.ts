import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

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
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return
    } else {
      this.activatedRouter.params.pipe(
        switchMap(({ id }) => this._heroesService.getHeroePorId(id))
      ).subscribe(
        heroe => this.heroe = heroe
      )

    }

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
    if (this.heroe.superhero.trim().length === 0) {
      return
    }

    if (this.heroe.id) {
      //Actualizar
      this._heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => console.log('Actulizando heroe:', heroe))
    } else {
      //Crear nuevo registro
      this._heroesService.agregarHeroe(this.heroe).subscribe(
        heroe => {
          this.router.navigate(['/heroes/editar', heroe.id])
        }
      )
    }







  }
}
