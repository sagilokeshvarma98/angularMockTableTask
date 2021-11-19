import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEmpData} from '../Interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  nodeURL = 'http://localhost:5000/empData'

  public getEmployeeData():Observable<IEmpData[]> {
    return this.http.get<IEmpData[]>(this.nodeURL)
  }

  public deleteEmployee(id:number):Observable<IEmpData> {
    return this.http.delete<IEmpData>(`${this.nodeURL}/${id}`)
  }

  public editEmployee(empObj:IEmpData):Observable<IEmpData> {
    return this.http.put<IEmpData>(this.nodeURL,empObj)
  }

  public addEmployee(empObj:IEmpData):Observable<IEmpData> {
    return this.http.post<IEmpData>(this.nodeURL,empObj)
  }

}
