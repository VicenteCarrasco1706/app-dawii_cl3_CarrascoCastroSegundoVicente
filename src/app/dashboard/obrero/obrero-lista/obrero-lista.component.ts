import { Component } from '@angular/core';
import { Obrero } from '../obrero';
import { ObreroService } from '../obrero.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-obrero-lista',
  templateUrl: './obrero-lista.component.html',
  styleUrl: './obrero-lista.component.css'
})
export class ObreroListaComponent {
  obreros: Obrero[] = []
  displayedColumns: string[] = ["id", "name", "status", "species"]

  constructor(private obreroService : ObreroService,
    private snackBar: MatSnackBar){

  }

  ngOnInit(): void {
    this.obreroService.listarObrero()
      .subscribe(
        (data) => {
          this.obreros = data
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', {duration: 50000})
        }        
      )
}
}