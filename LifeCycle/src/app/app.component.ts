import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  count:number = 1;

  constructor() {
    setTimeout(() => {
      this.title = "My First App";
    }, 10000);
  }

  ngOnInit(): void {
    console.log("ngOnInit",this.count);
    this.count++;
  }

  ngOnChanges(): void{
    console.log("ngOnChanges",this.count);
    this.count++;
  }

  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked",this.count);
    this.count++;
  }

  ngDoCheck(): void{
    console.log("ngDoCheck",this.count);
    this.count++;
  }

  ngAfterContentInit(): void{
    console.log("ngAfterContentInit",this.count);
    this.count++;
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit",this.count);
    this.count++;
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked",this.count);
    this.count++;
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy",this.count);
    this.count++;
  }
}
