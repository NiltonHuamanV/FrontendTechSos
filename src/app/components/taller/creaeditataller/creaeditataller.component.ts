import { NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Taller } from '../../../models/taller';
import { TallerService } from '../../../services/taller.service';

@Component({
  selector: 'app-creaeditataller',
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
    RouterLink
  ],

  templateUrl: './creaeditataller.component.html',
  styleUrl: './creaeditataller.component.css'
})
export class CreaeditatallerComponent implements OnInit
{
  form: FormGroup = new FormGroup({});
  taller: Taller = new Taller();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  distritos: { value: string; viewValue: string }[] = [
    { value: 'Chorrillos', viewValue: 'Chorrillos' },
    { value: 'Barranco', viewValue: 'Barranco' },
    { value: 'Miraflores', viewValue: 'Miraflores ' },
    { value: 'Surco', viewValue: 'Surco' },]

    constructor(
      private tS: TallerService,
      private router: Router,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
         this.id = data['id'];
         this.edicion = data['id'] != null;
         this.init();
       });

       this.form = this.formBuilder.group({
        codigo: [''],
        taller: ['', Validators.required],
        numerodetelefono: ['', Validators.required],
        direccion: ['', Validators.required],
        distrito: ['', Validators.required],

      });
    }
      aceptar(): void {
        if (this.form.valid) {
          this.taller.idTaller = this.form.value.codigo;
          this.taller.nombre = this.form.value.taller;
          this.taller.numerodetelefono = this.form.value.numerodetelefono;
          this.taller.direccion = this.form.value.direccion;
          this.taller.district = this.form.value.distrito;
          if (this.edicion) {
            this.tS.update(this.taller).subscribe(() => {
              this.tS.list().subscribe((data) => {
                this.tS.setlist(data);
              });
            });
          } else {
            this.tS.insert(this.taller).subscribe((data) => {
              this.tS.list().subscribe((data) => {
                this.tS.setlist(data);
              });
            });
          }
          this.router.navigate(['taller']);
        }
      }


      init() {
        if (this.edicion) {
          this.tS.listId(this.id).subscribe((data) => {
            this.form = new FormGroup({
              codigo: new FormControl(data.idTaller),
              nombre: new FormControl(data.nombre),
              numerodetelefono: new FormControl(data.numerodetelefono),
              direccion: new FormControl(data.direccion),
              distrito: new FormControl(data.district),

            });
          });
        }
      }


}

