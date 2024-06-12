import { Routes } from '@angular/router';
import { DistrictComponent } from './components/district/district.component';
import { CreaeditadistrictComponent } from './components/district/creaeditadistrict/creaeditadistrict.component';
import { MarcaComponent } from './components/marca/marca.component';
import { CreaeditamarcaComponent } from './components/marca/creaeditamarca/creaeditamarca.component';
import { ModeloComponent } from './components/modelo/modelo.component';
import { CreaeditamodeloComponent } from './components/modelo/creaeditamodelo/creaeditamodelo.component';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';

export const routes: Routes = [
    {
        path:"district", component: DistrictComponent,
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
                path:'insertarmarca', component:CreaeditamarcaComponent
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
                path:'insertardispositivo', component:CreaeditamodeloComponent,
            }
        ]
    },
];
