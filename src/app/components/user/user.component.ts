import { Component, OnInit } from '@angular/core';
import { ListaruserComponent } from './listaruser/listaruser.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, ListaruserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void { }}
