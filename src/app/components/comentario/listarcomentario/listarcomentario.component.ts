import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ComentarioClienteTaller } from '../../../models/comentario';
import { ComentarioService } from '../../../services/comentario.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-listarcomentario',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './listarcomentario.component.html',
  styleUrl: './listarcomentario.component.css'
})
export class ListarcomentarioComponent implements OnInit {

  dataSource: MatTableDataSource<ComentarioClienteTaller> = new MatTableDataSource();

  displayedColumns: string[] = [
    'codigo',
    'descripcion',
    'calificacion',
    'fechaComentario',
    'taller',
    'accion01',
    'accion02'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private cS: ComentarioService, private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getlist().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id: number) {
    this.cS.eliminar(id).subscribe(
      (data) => {
        this.cS.list().subscribe((data)=>{
          this.cS.setlist(data)
        });
      },
      (error) => {
        this.snackBar.open('No fue posible eliminar el registro, ya se encuentra registrado en otro lado', 'Cerrar', {
          duration: 3000 // Duración del mensaje en milisegundos
        });
      }
    );
  }
}



