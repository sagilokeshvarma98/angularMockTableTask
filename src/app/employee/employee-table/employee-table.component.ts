import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { IEmpData } from "../../Interfaces/interface";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  public employeeData:IEmpData[] = []

  constructor(private empData:EmployeeService) { }

  ngOnInit(): void {
    this.getEmplooyeeData()
  }

  public getEmplooyeeData() {
    this.empData.getEmployeeData().subscribe(res=>this.employeeData = res)
  }

  sortByColumn() {
    for (let ele in this.employeeData) {
      for (let ele2 in this.employeeData) {
        if(this.employeeData[ele].username < this.employeeData[ele2].username) {
          let temp = this.employeeData[ele]
          this.employeeData[ele] = this.employeeData[ele2];
          this.employeeData[ele2] = temp
        }
      }
    }
  }
}
