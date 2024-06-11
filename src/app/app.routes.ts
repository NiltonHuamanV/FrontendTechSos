import { Routes } from '@angular/router';
import { DistrictComponent } from './components/district/district.component';
import { CreaeditadistrictComponent } from './components/district/creaeditadistrict/creaeditadistrict.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';

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
      path:"user", component: DistrictComponent,
      children:[
          {
              path:'registrar', component:CreaeditauserComponent          }
      ]
  },
];
