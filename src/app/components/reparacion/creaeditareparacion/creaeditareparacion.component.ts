import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Reparacion } from '../../../models/reparacion';
import { DispositivoTaller } from '../../../models/dispositivotaller';
import { ReparacionService } from '../../../services/reparacion.service';
import { DispositivotallerService } from '../../../services/dispositivotaller.service';

@Component({
  selector: 'app-creaeditareparacion',
  standalone: true,
  imports: [
    MatFormFieldModule,
    NgIf,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './creaeditareparacion.component.html',
  styleUrl: './creaeditareparacion.component.css'
})
export class CreaeditareparacionComponent {

  form: FormGroup = new FormGroup({});
  reparation: Reparacion = new Reparacion();
  listaReparaciones: Reparacion[] = [];
  listaDispositivos: DispositivoTaller[] = [];

  constructor(private formBuilder:FormBuilder,
    private rS:ReparacionService,
    private dtS:DispositivotallerService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      dispositivo:['',Validators.required],
      fecha:['',Validators.required]
    });
    this.dtS.list().subscribe((data) => {
      this.listaDispositivos = data;
    });
  }

  aceptar():void
  { 
    this.reparation.dispositivoTaller.dispositivo = this.form.value.dispositivo;
    this.reparation.FechaFin = this.form.value.fecha;
    if(this.form.valid)
      {
        this.rS.insert(this.reparation).subscribe((data)=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data)
          })
      });
      this.router.navigate(['reparacion'])
    }
  }


}
