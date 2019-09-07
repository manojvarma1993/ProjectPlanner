import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule} from '@angular/router';
@NgModule(
{
imports:[CommonModule,
RouterModule.forChild([
    {path:'feature',component:FeatureComponent}
])],
exports:[],
declarations:[FeatureComponent],
providers:[]

})


export class FeatureModule
{

}