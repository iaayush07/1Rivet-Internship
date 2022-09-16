import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() public ParentData : string[];
  @Output () ChildData : EventEmitter <string>
  
  
 
  constructor() {
    this.ParentData =[];
    this.ChildData = new EventEmitter();
   }

  ngOnInit(): void {
    
  }
  add(data : string){
    this.ChildData.emit(data);

    console.log(data)
  }
}
