import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TallerService } from '../../../services/taller.service';
import { Taller } from '../../../models/taller';

@Component({
  selector: 'app-listartaller',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listartaller.component.html',
  styleUrl: './listartaller.component.css'
})
export class ListartallerComponent implements OnInit {

  displayedColumns: String[] = ['codigo', 'taller','numerodetelefono','direccion', 'distrito'];
  dataSource:MatTableDataSource<Taller> = new MatTableDataSource()
  constructor(private tS:TallerService) {
  }
  ngOnInit(): void {
    this.tS.list().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    })
    this.tS.getlist().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    })

}

}
