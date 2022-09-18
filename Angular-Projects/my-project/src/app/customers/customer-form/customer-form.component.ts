import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public title : string;
  public customerid : any;
  
  constructor(
    public route : Router,
    private activatedRouter : ActivatedRoute
  ) {
    
    this.customerid = this.activatedRouter.snapshot.params['customerid']
   
    this.title = this.customerid ? 'Edit' : 'Add';
   }

  ngOnInit(): void {
    console.log(this.customerid)
  }

  onSave(){
    this.route.navigate(['customers','customer-list'])
  }
  onCancle(){
    this.route.navigate(['customers','customer-list'])
  }
  customerSubmit(value : any){
    console.log(value);
  }
}
