import { Route } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FeatureModule } from '../Feature.module';
import { ActivateGuard } from './activate.guard';


export const routes:Route[]=[
    {path:'first/:id',component:FirstComponent,canActivate:[ActivateGuard ]},
    {path:'second',component:SecondComponent},
    {path:'test',redirectTo:'first',pathMatch:'full'},
    {path:'feature',loadChildren:'../feature.module#FeatureModule'}
]