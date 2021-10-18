import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { IEmpData } from "../../Interfaces/interface";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {

  public employeeData:IEmpData[] = []

  constructor(private empData:EmployeeService) {
    this.getEmplooyeeData()
   }

  public getEmplooyeeData() {
    this.empData.getEmployeeData().subscribe(res=>this.employeeData = res.filter((x:IEmpData)=>{
      let date = new Date(x.joiningTime)
      x.dateString = new Date( date.getMonth(), date.getDate(), date.getFullYear(), 0o0, 0o0, 0o0).getTime()
      return x;
    }))
  }

  sortByColumn($event : any) {
    let colName: keyof IEmpData = $event.colName;
    const isAscending: boolean = $event.isAscending;
    const isDefault : boolean = $event.isDefault
    if(colName === "joiningTime" && !isDefault)
    {
      colName = "dateString"
      this.employeeData = this.employeeData.sort(
        this.compare( colName , isAscending)
        )
    }
    else
    this.employeeData = this.employeeData.sort(
      this.compare(colName , isAscending)
      )
   }

   compare(colName : keyof IEmpData, isAsscending : boolean) {
    return function(a: IEmpData, b: IEmpData) {
      if (a[colName] < b[colName]) {
        return isAsscending ? -1 : 1;
      }
      if (a[colName] > b[colName]) {
        return isAsscending ? 1 : -1;
      }
      return 0;
    };
  }

//    returnSortValue(colName , isAscending){
//   return function(a:IEmpData ,b:IEmpData ) => {
//     if (a[colName]> b[colName]) {
//       return isAscending ? 1 : -1
//     }
//     if (a[colName] < b[colName]) {
//       return isAscending ? -1 : 1
//     }
//     return 0;
//   }
// }

}



// returnSortValue(colName , isAscending){
//   return function(a:IEmpData ,b:IEmpData)=>{
//     if (a[colName]> b[colName]) {
//       return isAscending ? 1 : -1
//     }
//     if (a[colName] < b[colName]) {
//       return isAscending ? -1 : 1
//     }
//     return 0;
//   }
// }




// for (let ele in this.employeeData) {
//   for (let ele2 in this.employeeData) {
//     if(this.employeeData[ele].username < this.employeeData[ele2].username) {
//       let temp = this.employeeData[ele]
//       this.employeeData[ele] = this.employeeData[ele2];
//       this.employeeData[ele2] = temp
//     }
//   }
// }

