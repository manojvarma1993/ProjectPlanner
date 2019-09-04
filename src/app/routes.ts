import {  Route } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FeatureModule } from '../feature.module';


export const routes:Route[]=
[
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent},
    {path:'test',redirectTo:'first',pathMatch:'full'},

    {path:'nat',loadChildren:'../feature.module#FeatureModule'}
 
]