import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Dispositivo } from '../../../models/dispositivo';
import { Modelo } from '../../../models/modelo';
import { DispositivoService } from '../../../services/dispositivo.service';
import { Router } from '@angular/router';
import { ModeloService } from '../../../services/modelo.service';
@Component({
  selector: 'app-creaeditadispositivo',
  standalone: true,
  imports: [MatFormFieldModule, 
    ReactiveFormsModule,
    MatSelectModule, 
    CommonModule, 
    MatInputModule,
    MatButtonModule],
  templateUrl: './creaeditadispositivo.component.html',
  styleUrl: './creaeditadispositivo.component.css'
})
export class CreaeditadispositivoComponent {
form:FormGroup = new FormGroup({})
dispositivo:Dispositivo = new Dispositivo();
listaModelos: Modelo[] = [];
constructor(
  private formBuilder:FormBuilder, 
  private dS: DispositivoService,
  private router:Router,
  private mS :ModeloService,
){}

ngOnInit():void
{
  this.form=this.formBuilder.group({
    modelo:['',Validators.required],
    observaciones:['',Validators.required],
  });
  this.mS.list().subscribe((data) => {
    this.listaModelos = data;
  });
}
aceptar():void
{
  if(this.form.valid)
    {
      this.dispositivo.modelo.idmodelo = this.form.value.modelo;
      this.dispositivo.observaciones = this.form.value.observaciones;
      
      this.dS.insert(this.dispositivo).subscribe((data) => {
        this.dS.list().subscribe((data) => {
          this.dS.setList(data);
        });
      });

      this.router.navigate(['dispositivo']);
    }


}
}

