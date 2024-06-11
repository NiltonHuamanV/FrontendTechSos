import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import { RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarmarca',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './listarmarca.component.html',
  styleUrl: './listarmarca.component.css'
})
export class ListarmarcaComponent implements OnInit{
  marcas: Marca[] = [];

  displayedColumns: string[] = [
    'codigo',
    'marca'
  ];

  dataSource:MatTableDataSource<Marca> = new MatTableDataSource();
  constructor(private mS:MarcaService){}

  ngOnInit(): void {
    this.mS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
    this.mS.getlist().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    });
    this.cargarMarcas();
    this.mS.getlist().subscribe((marcas: Marca[]) => {
      this.marcas = marcas;
      this.dataSource = new MatTableDataSource(marcas);
    });
  }

  //esto
  cargarMarcas(): void {
    this.mS.list().subscribe((marcas: Marca[]) => {
      this.marcas = marcas;
      this.dataSource = new MatTableDataSource(marcas);
    });
  }

}
