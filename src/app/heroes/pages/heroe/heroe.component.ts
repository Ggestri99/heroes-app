import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe!:Heroes

  constructor(
    private activateRouter: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activateRouter.params.pipe(
      switchMap(({id})=>this._heroesService.getHeroePorId(id))
    ).subscribe(heroe => this.heroe = heroe)
  }
}
