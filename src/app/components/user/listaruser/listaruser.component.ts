import { Component, OnInit } from '@angular/core';
import {MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaruser.component.html',
  styleUrl: './listaruser.component.css'
})
export class ListaruserComponent implements OnInit{
  displayedColumns: String[] = ['username'];

  ngOnInit(): void { }
}
