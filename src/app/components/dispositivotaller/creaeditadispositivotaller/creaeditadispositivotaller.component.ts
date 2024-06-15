import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DispositivoTaller } from '../../../models/dispositivotaller';
import { DispositivotallerService } from '../../../services/dispositivotaller.service';
import { Router } from '@angular/router';
import { DispositivoService } from '../../../services/dispositivo.service';
import { TallerService } from '../../../services/taller.service';
import { Dispositivo } from '../../../models/dispositivo';
import { Taller } from '../../../models/taller';

@Component({
  selector: 'app-creaeditadispositivotaller',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    ReactiveFormsModule,
    MatSelectModule, 
    CommonModule, 
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './creaeditadispositivotaller.component.html',
  styleUrl: './creaeditadispositivotaller.component.css'
})
export class CreaeditadispositivotallerComponent implements OnInit{
  form:FormGroup = new FormGroup({})
  dispositivotaller:DispositivoTaller = new DispositivoTaller();
  listaDispositivos: Dispositivo[] = [];
  listaTalleres: Taller[] = [];

  constructor(
    private formBuilder:FormBuilder, 
    private dtS: DispositivotallerService,
    private router:Router,
    private dS:DispositivoService,
    private tS:TallerService 
  ){}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      dispositivotaller:['',Validators.required],
      dispositivo:['',Validators.required],
      taller:['',Validators.required]
    });
    this.dS.list().subscribe((data) => {
      this.listaDispositivos = data;
    });
    this.tS.list().subscribe((data) => {
      this.listaTalleres = data
    })
  }

  aceptar():void
  {
  if(this.form.valid)
    {
      this.dispositivotaller.dispositivo.idDispositivo = this.form.value.dispositivo;
      this.dispositivotaller.taller.idTaller = this.form.value.taller;
      
      this.dtS.insert(this.dispositivotaller).subscribe((data) => {
        this.dtS.list().subscribe((data) => {
          this.dtS.setList(data);
        });
      });

      this.router.navigate(['dispositivotaller']);
    }
  }
}
