import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

 public myParam : any;
  constructor(
    private route : ActivatedRoute
  ) {


   }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.myParam=params);
   
    }
  }



