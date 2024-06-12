import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Marca } from '../../../models/marca';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-creaeditamarca',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './creaeditamarca.component.html',
  styleUrl: './creaeditamarca.component.css'
})
export class CreaeditamarcaComponent implements OnInit {
  form:FormGroup= new FormGroup({});
  marca:Marca = new Marca();

  constructor(private formBuilder:FormBuilder,
    private mS:MarcaService,
    private router:Router
  ){}


    ngOnInit(): void {
      this.form=this.formBuilder.group({
        marca:['',Validators.required],
      });
    }


    aceptar():void
    {
      if(this.form.valid)
        this.marca.nombre = this.form.value.marca;
          this.mS.insert(this.marca).subscribe((data)=>{
            this.mS.list().subscribe((data)=>{
              this.mS.setlist(data)
            })
        });
        this.router.navigate(['marca'])
    }

  }

