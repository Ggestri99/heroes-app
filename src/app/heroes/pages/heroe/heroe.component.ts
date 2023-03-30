import { Component } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe?:Heroes

  constructor(
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRouter.params.subscribe(resp=>{
      console.log(resp)
    })
  }
}
