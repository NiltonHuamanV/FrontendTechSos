import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Modelo } from '../../../models/modelo';
import { ModeloService } from '../../../services/modelo.service';
import { Router } from '@angular/router';
import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca.service';
@Component({
  selector: 'app-creaeditamodelo',
  standalone: true,
  imports: [MatFormFieldModule, 
    ReactiveFormsModule,
    MatSelectModule, 
    CommonModule, 
    MatInputModule,
    MatButtonModule],
  templateUrl: './creaeditamodelo.component.html',
  styleUrl: './creaeditamodelo.component.css'
})
export class CreaeditamodeloComponent implements OnInit {
form:FormGroup = new FormGroup({})
modelo:Modelo = new Modelo();
listaMarcas: Marca[] = [];
constructor(
  private formBuilder:FormBuilder, 
  private mS: ModeloService,
  private router:Router,
  private MaS :MarcaService,
){}
ngOnInit():void
{
  this.form=this.formBuilder.group({
    modelo:['',Validators.required],
    marca:['',Validators.required],
  });
  this.MaS.list().subscribe((data) => {
    this.listaMarcas = data;
  });
}
aceptar():void
{
  if(this.form.valid)
    {
      this.modelo.nombre = this.form.value.modelo;
      this.modelo.marca.idmarca = this.form.value.marca;
      
      this.mS.insert(this.modelo).subscribe((data) => {
        this.mS.list().subscribe((data) => {
          this.mS.setList(data);
        });
      });

      this.router.navigate(['modelo']);
    }


}
}
