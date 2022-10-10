import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/crud.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  public empDetails : any ;
 
  @Input() public details : any; 
  @Output() public listData : EventEmitter<any>
     public data: user[];
   

  constructor(
    public route :Router,
    private activatedRouter : ActivatedRoute,
    public apiservice : ApiService
  ) { 
  this.details = [];
  this.empDetails =  this.activatedRouter.snapshot.params['empdetails'] ;
  
  this.listData =  new EventEmitter;
  this.data =[]
}

  ngOnInit(): void {
    this.getUserdata();
  }

  
  public getUserdata() : void {
    this.apiservice.getUser().subscribe((result)=>
    {
      this.details = result;
      console.log(this.details)
    });
    
  }

  //service for delete data
  onDelete(x: any){
    this.apiservice.deleteUser(x).subscribe((result)=>{
    
      this.getUserdata();
     
    })
  } 

  onDetails(item : any){
    this.route.navigate(['employee/employee-details'],{queryParams : item})
  }

  //service for update data
  onEdit(itemID :user) : void{
   this.route.navigate(['crud/edit/' + itemID])
  }

}
