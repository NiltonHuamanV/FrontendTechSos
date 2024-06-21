import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MejoresTalleresDTO } from '../../../models/mejoresTalleres';
import { ComentarioService } from '../../../services/comentario.service';
import { LoginService } from '../../../services/login.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-report02',
  standalone: true,
  imports: [BaseChartDirective],

  templateUrl: './report02.component.html',
  styleUrl: './report02.component.css'
})
export class Report02Component implements OnInit{

  barChartOptions:ChartOptions={
    responsive: true,
    };

    barChartLabels: string[] = [];

   //barChartType: ChartType = 'pie';

   //barChartType: ChartType = 'doughnut';

   //barChartType: ChartType = 'line';

   barChartType: ChartType = 'bar';

   //barChartType: ChartType = 'polarArea';


    barChartLegend=true;
    barChartData: ChartDataset[]=[];

    constructor(private cS: ComentarioService ){}
    ngOnInit(): void {
      this.cS.getMejoresTalleres().subscribe((data) => {
        this.barChartLabels = data.map((item) => item.nombre_taller);
        this.barChartData = [
          {
            data: data.map((item) => item.promediocalificacion),
            label: 'Promedio calificacion',
            backgroundColor: [
              '#00FFF3',
              '#00E4FF',
              '#00C9FF',
              '#00A2FF',
              '#0083FF',
              '#0068FF',
              '#004DFF',
              '#0013FF',
            ],
            borderColor: 'rgba(173, 216, 230, 1)',
            borderWidth: 1,
          },

        ];
      });
  }

}
