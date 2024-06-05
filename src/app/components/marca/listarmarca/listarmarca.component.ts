import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarmarca',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './listarmarca.component.html',
  styleUrl: './listarmarca.component.css'
})
export class ListarmarcaComponent implements OnInit{
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
  }
}
