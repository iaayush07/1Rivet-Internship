import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public baseUrl: any;
  constructor(public http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

  //for getting data from db
  getEmpData(): Observable<any> {
    const url: string = this.baseUrl + 'empData'
    return this.http.get(url)
  }

  //for adding data
  addEmpData(empdata: employee): Observable<any> {
    const url: string = this.baseUrl + 'empData'
    return this.http.post(url, empdata)
  }

  //for deletin
  deleteEmpData(id: number): Observable<any> {
    const url: string = this.baseUrl + 'empData/' + id;
    return this.http.delete(url);
  }

  //for update
  updateEmpData(employee: employee, id: number): Observable<employee> {
    const url: string = this.baseUrl + 'empData/' + id;
    return this.http.put<employee>(url, employee)
  }

  // getEmpByID(id: Number): Observable<any> {
  //   const url: string = this.baseUrl + 'empData/' + id;
  //   return this.http.get(url)
  // }
}


