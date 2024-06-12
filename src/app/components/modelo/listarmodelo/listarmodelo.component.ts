import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Modelo } from '../../../models/modelo';
import { ModeloService } from '../../../services/modelo.service';
@Component({
  selector: 'app-listarmodelo',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listarmodelo.component.html',
  styleUrl: './listarmodelo.component.css'
})
export class ListarmodeloComponent {
  displayedColumns: string[] = ['codigo', 'modelo', 'marca']
  datasource : MatTableDataSource<Modelo>= new MatTableDataSource()
  constructor(private mS:ModeloService){}

  ngOnInit(): void {
    this.mS.list().subscribe(data=> {
      this.datasource = new MatTableDataSource(data)
    })
    this.mS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
}
}
