import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DispositivoService } from '../../../services/dispositivo.service';
import { Dispositivo } from '../../../models/dispositivo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-listardispositivo',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatButtonModule],
  templateUrl: './listardispositivo.component.html',
  styleUrl: './listardispositivo.component.css'
})
export class ListardispositivoComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'modelo', 'observaciones','modificar', 'eliminar']
  datasource : MatTableDataSource<Dispositivo>= new MatTableDataSource()
  constructor(
    private dS:DispositivoService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.dS.list().subscribe(data=> {
      this.datasource = new MatTableDataSource(data)
    })
    this.dS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
}
deletes(id: number): void {
  this.dS.delete(id).subscribe(
    (data) => {
      this.dS.list().subscribe((data)=>{
        this.dS.setList(data)
      });
    },
    (error) => {
      this.snackBar.open('No fue posible eliminar el registro', 'Cerrar', {
        duration: 3000 // Duración del mensaje en milisegundos
      });
    }
  );
}

}
