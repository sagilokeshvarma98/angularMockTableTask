import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEmpData} from './Interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  public getEmployeeData():Observable<IEmpData[]> {
    return this.http.get<IEmpData[]>("http://localhost:3000/empData")
  }
}
