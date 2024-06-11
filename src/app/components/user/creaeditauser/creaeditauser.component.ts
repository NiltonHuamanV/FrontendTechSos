import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-creaeditauser',
  standalone: true,
  imports: [
    MatFormFieldModule,
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    CommonModule,
    RouterLink],
  templateUrl: './creaeditauser.component.html',
  styleUrl: './creaeditauser.component.css'
})
export class CreaeditauserComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {}


  aceptar(): void {}


}


