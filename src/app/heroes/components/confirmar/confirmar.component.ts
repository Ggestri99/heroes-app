import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroes,

  ) {}

  ngOnInit(){

  }

  borrar(){
    this.dialogRef.close(true)
  }

  cerrar() {
    this.dialogRef.close(false)
  }
}
