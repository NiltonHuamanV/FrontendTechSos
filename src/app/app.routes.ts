import { Routes } from '@angular/router';
import { DistrictComponent } from './components/district/district.component';
import { CreaeditadistrictComponent } from './components/district/creaeditadistrict/creaeditadistrict.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ReparacionComponent } from './components/reparacion/reparacion.component';

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
        path:"brand", component: MarcaComponent
    },
    {
        path:"reparacion", component: ReparacionComponent
    }
];
