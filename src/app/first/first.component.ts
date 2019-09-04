import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit 
{
  @Input() p;
  @Output() o=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 LogBody()
 {
   this.o.emit(this.p.body); 
 }


}
