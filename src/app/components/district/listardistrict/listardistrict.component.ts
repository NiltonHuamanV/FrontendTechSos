import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
import { District } from '../../../models/district';
import { DistrictService } from '../../../services/district.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-listardistrict',
  standalone: true,
  imports: [MatTableModule, NgIf,],
  templateUrl: './listardistrict.component.html',
  styleUrl: './listardistrict.component.css'
})
export class ListardistrictComponent implements OnInit{
  displayedColumns: String[] = ['codigo', 'distrito'];
  dataSource:MatTableDataSource<District> = new MatTableDataSource()
  constructor(private dS:DistrictService) {
  }
  ngOnInit(): void {
    this.dS.list().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    })
    this.dS.getlist().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data)
    })

}
}

