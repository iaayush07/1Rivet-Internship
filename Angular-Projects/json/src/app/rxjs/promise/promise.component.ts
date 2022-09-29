import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  // text = "NO FOUND";
  constructor() { }

  ngOnInit(): void {
  }

    
  login() {

  //Create New Promise
  // new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     this.text = "STEP 0";
  //     resolve({ name: "sunil", id: 1234 })
  //   }, 2000)

  //Create 2nd Promoise
  // }).then(response => {
  //   this.text = "STEP 1";
  //   console.log("Step 1 completed ", response)
  //   return new Promise((resolve, reject) => {
  //     setTimeout((_:any) => resolve(Object.assign({ title: "singh" }, response)), 2000)
  //   });
  //Without any promise
  // }).then(response => {
  //   this.text = "STEP 2";
  //   console.log("Step 2 completed ", response);
  //   return "Simple text";
  // Without Promise and with Delayed message  
  // }).then(response => {
  //   this.text = "STEP 3";
  //   console.log("Step 3 ", response);
  //   setTimeout(() => { console.log("Step 3 Delayed ") }, 2000);

  //Final Excetion
  // }).then(response => {
  //   this.text = "STEP 4";
  //   console.log("Step 4 ", response);
  // })

}

}
