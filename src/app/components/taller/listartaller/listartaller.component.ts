import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TallerService } from '../../../services/taller.service';
import { Taller } from '../../../models/taller';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listartaller',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    RouterLink,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './listartaller.component.html',
  styleUrl: './listartaller.component.css'
})
export class ListartallerComponent implements OnInit {

  dataSource:MatTableDataSource<Taller> = new MatTableDataSource()
  displayedColumns: String[] =
  ['codigo',
  'taller',
  'numerodetelefono',
  'direccion',
  'distrito',
  'accion01',
  'accion02'];

  constructor(private tS:TallerService, private snackBar:MatSnackBar) {
  }
  ngOnInit(): void {
    this.tS.list().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    })
    this.tS.getlist().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    })

}

eliminar(id: number) {
  this.tS.eliminar(id).subscribe((data) => {
    this.tS.list().subscribe((data) => {
      this.tS.setlist(data);
    });
  });
}

}
