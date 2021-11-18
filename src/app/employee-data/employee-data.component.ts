import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';
import { IEmpData } from '../core/Interfaces/interface';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  public data: IEmpData[] = []
  public filterName:string = "default"
  public sortName:string = "a-z"
  public pageNumber:number = 1

  constructor(public empData:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData()
  }

  public getEmployeeData() {
    this.empData.getEmployeeData().subscribe(res=> {
      this.data = res
    })
  }

  public sortTableData(event:Event) {
    let optionValue = (event.target as HTMLInputElement).value
    this.sortName = optionValue 
  }

  public filterTableData(event:Event) {
    let optionValue = (event.target as HTMLInputElement).value
    this.filterName = optionValue 
  }
}
