import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar,
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
        .subscribe(heroe => this.mostrarSnackBar('Registro Actulizado'))
    } else {
      //Crear nuevo registro
      this._heroesService.agregarHeroe(this.heroe).subscribe(
        heroe => {
          this.router.navigate(['/heroes/editar', heroe.id])
          this.mostrarSnackBar('Registro Creado')
        }
      )
    }
  }

  borrar() {
    this._heroesService.borrarHeroe(this.heroe.id!).subscribe(
      resp => {
        this.router.navigate(['/heroes']);
      }
    )
  }

  mostrarSnackBar(termino: string): void {
    this._snackBar.open(termino, 'ok!', {
      duration: 2000
    })
  }
}
