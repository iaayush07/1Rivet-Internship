import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

public name : string [];

  constructor() { 
  this.name = ["Ayush","Amresh"];
  }

  ngOnInit(): void {
  }
  add(data:string){
  this.name.push(data);
  }

}
