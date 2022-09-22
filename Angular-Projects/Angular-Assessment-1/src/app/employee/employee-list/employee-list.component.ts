
import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public x : any ;
  public empDetails : any ;
 
  @Input() public details : any; 
  @Output() public listData : EventEmitter<any>

  constructor(
    public route :Router,
    private activatedRouter : ActivatedRoute
  ) { 
    this.details = [];
  this.empDetails =  this.activatedRouter.snapshot.params['empdetails'] ;
  this.listData =  new EventEmitter;
}

  ngOnInit(): void {
  }

  onDelete(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.details.splice(x, 1 );
    }   
  } 

  onDetails(item : any){
    this.route.navigate(['employee/employee-details'],{queryParams : item})
  }

  onEdit(item : any) : void{
    this.listData.emit(item)
  }
  
}


