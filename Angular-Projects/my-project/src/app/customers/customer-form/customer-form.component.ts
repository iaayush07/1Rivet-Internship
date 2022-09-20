import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from 'src/app/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public customerDetails ;

  public title : string;
  public customerid : any;

  public isSubmitted : boolean;
  
  constructor(
    public route : Router,
    private activatedRouter : ActivatedRoute
  ) {
    
    this.customerid = this.activatedRouter.snapshot.params['customerid']
   
    this.title = this.customerid ? 'Edit' : 'Add';
    this.customerDetails = new customer();

    this.isSubmitted = false;
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

  
  customerSubmit(){
    console.log(this.customerDetails);
    this.isSubmitted = true;
  }
}
