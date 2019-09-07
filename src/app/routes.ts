import { Route } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FeatureModule } from '../Feature.module';


export const routes:Route[]=[
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent},
    {path:'test',redirectTo:'first',pathMatch:'full'},
    {path:'feature',loadChildren:'../feature.module#FeatureModule'}
]