import { Component, OnInit } from '@angular/core';

import { ComentarioService } from '../../../services/comentario.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-report02',
  standalone: true,
  imports: [BaseChartDirective],

  templateUrl: './report02.component.html',
  styleUrl: './report02.component.css'
})
export class Report02Component implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true // Para agrupar las barras por taller
      },
      y: {
        stacked: false // Para no apilar las barras en el eje Y
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  barChartLabels: string[] = [];

  barChartType: ChartType = 'bar';

  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [];

  constructor(private cS: ComentarioService) {}

  ngOnInit(): void {
    this.cS.getMejoresTalleres().subscribe(data => {
      const talleres = Array.from(new Set(data.map(item => item.nombre_taller)));
      const comentarios = Array.from(new Set(data.map(item => item.descripcion)));

      // Combinar comentarios y calificaciones en etiquetas únicas
      this.barChartLabels = data.map(item => `${item.descripcion} - ${item.promediocalificacion}`);

      this.barChartData = talleres.map(taller => ({
        label: taller,
        data: this.barChartLabels.map(label => {
          const [comentario, calificacionStr] = label.split(' - ');
          const calificacion = parseFloat(calificacionStr); // Convertir calificación a número
          const dato = data.find(item => item.nombre_taller === taller && item.descripcion === comentario && item.promediocalificacion === calificacion);
          return dato ? dato.promediocalificacion : 0;
        }),
        backgroundColor:[
          '#00FFF3',
          '#00E4FF',
          '#00C9FF',
          '#00A2FF',
          '#0083FF',
          '#0068FF',
          '#004DFF',
          '#0013FF',
        ],

        borderWidth: 1,
      }));
    });
  }


}
