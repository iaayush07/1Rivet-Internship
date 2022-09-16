import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  text : number 
  constructor() {
    this.text= 20
   }

  ngOnInit(): void {
  }

  change(type:string){
    if(type ==  'increase'){
      this.text = this.text+10;
    }
    else
    {
      this.text = this.text-10;
    }
  }

}
