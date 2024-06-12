import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DispositivoService } from '../../../services/dispositivo.service';
import { Dispositivo } from '../../../models/dispositivo';
@Component({
  selector: 'app-listardispositivo',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listardispositivo.component.html',
  styleUrl: './listardispositivo.component.css'
})
export class ListardispositivoComponent {
  displayedColumns: string[] = ['codigo', 'modelo', 'observaciones']
  datasource : MatTableDataSource<Dispositivo>= new MatTableDataSource()
  constructor(private dS:DispositivoService){}

  ngOnInit(): void {
    this.dS.list().subscribe(data=> {
      this.datasource = new MatTableDataSource(data)
    })
    this.dS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
}

}
