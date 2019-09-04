import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component(
{
selector:'app-root',
templateUrl:'./app.component.html'

})


export class AppComponent
{

  fo:FormGroup;

  ngOnInit()
  {
    this.fo=new FormGroup(
      {
        firstName: new FormControl('FirstName'),
        secondName:new FormControl('SecondName')
    
       });  
    
  }

  formSubmitted()
  {
    console.log(this.fo.value);
    this.fo.patchValue({
      firstName:"Manoj"
    });
  }
  


}