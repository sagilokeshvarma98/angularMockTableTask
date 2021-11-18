import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEmpData} from '../Interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  public testNode1():Observable<any>
  {
    return this.http.get('http://http://localhost:5000/empData');
  }

  public getEmployeeData():Observable<IEmpData[]> {
    return this.http.get<IEmpData[]>("http://localhost:3000/empData")
  }

  public deleteEmployee(id:number):Observable<IEmpData> {
    return this.http.delete<IEmpData>(`http://localhost:3000/empData/${id}`)
  }

  public editEmployee(empObj:IEmpData):Observable<IEmpData> {
    return this.http.put<IEmpData>(`http://localhost:3000/empData/${empObj.id}`,empObj)
  }

  public addEmployee(empObj:IEmpData):Observable<IEmpData> {
    return this.http.post<IEmpData>("http://localhost:3000/empData",empObj)
  }

}
