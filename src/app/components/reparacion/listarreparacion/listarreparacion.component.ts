import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Reparacion } from '../../../models/reparacion';
import { ReparacionService } from '../../../services/reparacion.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listarreparacion',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterLink,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './listarreparacion.component.html',
  styleUrl: './listarreparacion.component.css'
})
export class ListarreparacionComponent implements OnInit{

  dataSource: MatTableDataSource<Reparacion> = new MatTableDataSource();

  displayedColumns: string[] = [
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'modificar',
    'eliminar'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rS: ReparacionService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.rS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deletes(id: number): void {
    this.rS.eliminar(id).subscribe(
      (data) => {
        this.rS.list().subscribe((data)=>{
          this.rS.setList(data)
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
