import { Routes } from '@angular/router';
import { DistrictComponent } from './components/district/district.component';
import { CreaeditadistrictComponent } from './components/district/creaeditadistrict/creaeditadistrict.component';
import { MarcaComponent } from './components/marca/marca.component';
import { CreaeditamarcaComponent } from './components/marca/creaeditamarca/creaeditamarca.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { CreaeditamodeloComponent } from './components/modelo/creaeditamodelo/creaeditamodelo.component';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { CreaeditadispositivoComponent } from './components/dispositivo/creaeditadispositivo/creaeditadispositivo.component';
import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { TallerComponent } from './components/taller/taller.component';
import { CreaeditatallerComponent } from './components/taller/creaeditataller/creaeditataller.component';
import { CreaeditacomentarioComponent } from './components/comentario/creaeditacomentario/creaeditacomentario.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { DispositivotallerComponent } from './components/dispositivotaller/dispositivotaller.component';
import { CreaeditadispositivotallerComponent } from './components/dispositivotaller/creaeditadispositivotaller/creaeditadispositivotaller.component';
import { CreaeditareparacionComponent } from './components/reparacion/creaeditareparacion/creaeditareparacion.component';

export const routes: Routes = [
    {
        path:"distrito", component: DistrictComponent,
        children:[
            {
                path:'insertardistrict', component:CreaeditadistrictComponent
            }
        ]
    },
    {
        path:"marca", component: MarcaComponent,
        children:[
            {
                path:'insertarmarca', component: CreaeditamarcaComponent
            }
        ]
    },

    {
        path:"modelo", component: ModeloComponent,
        children:[
            {
                path:'insertarmodelo', component:CreaeditamodeloComponent
            }
        ]
    },
    {
        path:"dispositivo", component: DispositivoComponent,
        children:[
            {
                path:'insertardispositivo', component:CreaeditadispositivoComponent,
            }
        ]
    },
    {
        path:"reparacion", component: ReparacionComponent,
        children:[
            {
                path:'insertarreparacion', component: CreaeditareparacionComponent,
            },
            {
                path: 'ediciones/:id', component: CreaeditareparacionComponent,
            }
        ]
    },

    {
        path:"taller", component: TallerComponent,
        children:[
            {
                path:'insertartaller', component:CreaeditatallerComponent
            },
            { path: 'ediciones/:id', component:CreaeditatallerComponent },

        ]
    },
    {
        path:"dispositivotaller", component: DispositivotallerComponent,
        children:[
            {
                path:'insertardispositivotaller', component: CreaeditadispositivotallerComponent
            },
            {
                path: 'ediciones/:id', component: CreaeditadispositivotallerComponent
            }
        ]
    },

    {
      path:"comentarios", component: ComentarioComponent,
      children:[
          {
              path:'insertarcomentario', component:CreaeditacomentarioComponent
          },
          { path: 'ediciones/:id', component:CreaeditacomentarioComponent },

      ]
  },
];
