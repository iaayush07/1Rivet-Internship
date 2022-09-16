import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList: any = [];
  constructor() {
    this.customerList = [
      {
        id: 1,
        name: 'ayush',
        email: 'iaayush087@gmail.com'
      },
      {
        id: 2,
        name: 'ayush',
        email: 'iaayush087@gmail.com'
      }, {
        id: 3,
        name: 'ayush',
        email: 'iaayush087@gmail.com'
      },
      {
        id: 4,
        name: 'ayush',
        email: 'iaayush087@gmail.com'
      },
      

    ]
  }

  ngOnInit(): void {
  }

}
