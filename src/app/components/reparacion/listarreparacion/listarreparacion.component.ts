import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Reparacion } from '../../../models/reparacion';
import { ReparacionService } from '../../../services/reparacion.service';

@Component({
  selector: 'app-listarreparacion',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
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
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private rS: ReparacionService) {}

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

}
