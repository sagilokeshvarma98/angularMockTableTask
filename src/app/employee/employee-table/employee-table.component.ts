import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { IEmpData } from "../../Interfaces/interface";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {

  public employeeData:IEmpData[] = []
  public editObj:IEmpData = {
    id: 1,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    experience: 1,
    appsDeveloped: '',
    username: '',
    joiningTime: '',
    imageUrl: '',
    dateString: 1
  };
  
  public employeeEditObj:FormGroup;

  constructor(private empData:EmployeeService , private build:FormBuilder) {
    this.getEmployeeData()
    this.employeeEditObj = this.build.group({
      id: [''],
      username: ['',[Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['',Validators.required],
      email: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      appsDeveloped: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      joiningTime: [''],
      imageUrl: ['']
    })
   }

   get editFromControls() {
    return this.employeeEditObj.controls;
  }

  public getEmployeeData() {
    this.empData.getEmployeeData().subscribe(res=>{
      this.employeeData = res.filter((x:IEmpData)=>{
        let date = new Date(x.joiningTime)
        x.dateString = new Date( date.getMonth(), date.getDate(), date.getFullYear(), 0o0, 0o0, 0o0).getTime()
        return x;
      })
    })
  }

  sortByColumn($event : any) {
    let colName: keyof IEmpData = $event.colName;
    const isAscending: boolean = $event.isAscending;    
    if(colName === "joiningTime")
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

  deleteRow(idNo:number) 
  {
    const user = this.employeeData[idNo-1].username
    const conformationToDelete = confirm("Do you want to delete "+user+"?")
    if(conformationToDelete)
      this.empData.deleteEmployee(idNo).subscribe(()=>this.getEmployeeData())
  }

  selectEditObj(employee:IEmpData)
  {
    this.editObj = employee
  }

  editEmployee()
  {
    const obj:IEmpData = this.employeeEditObj.value
    obj.imageUrl = this.editObj.imageUrl
    this.empData.editEmployee(obj).subscribe(()=>this.getEmployeeData())
  }

  addEmployee() {
    let addObj = this.employeeEditObj.value
    addObj.id = Math.random() * 10000
    this.empData.addEmployee(addObj).subscribe(()=>this.getEmployeeData());
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