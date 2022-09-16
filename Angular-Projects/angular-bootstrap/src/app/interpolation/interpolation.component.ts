import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  public name = "Ayush";
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "hello " + this.name;
  }

}
