import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() empList: employee[];
  @Output() outputList: EventEmitter<employee>;

  constructor(
    private employeeserice: EmployeeService,
    private router: Router,
    // private actroute : ActivatedRoute
  ) {
    this.empList = [];
    this.outputList = new EventEmitter;
  }

  ngOnInit(): void {
    // declared getemployeedata for showing data which are already stored
    this.getEmployeeData()
  }

  // getempdata method comming from employeeservice for getting data
  getEmployeeData() {
    this.employeeserice.getEmpData().subscribe((result) => {
      this.empList = result
    })
  }

  onDelete(id: any) {
    this.employeeserice.deleteEmpData(Number(id)).subscribe((res) => {
      this.getEmployeeData();
    })
  }
  onEdit(employee: employee) {
    this.router.navigate(['employee/edit/' + employee.id]);
    this.outputList.emit(employee)
    // console.log(employee);
  }

  onDetails(item: employee) {
    this.router.navigate(['employee/employee-details'], { queryParams: item })
  }
}
