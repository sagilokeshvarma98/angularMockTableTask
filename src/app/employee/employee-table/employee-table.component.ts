import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmModalService } from 'src/app/core/services/confirm-modal.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { IEmpData } from "../../core/Interfaces/interface";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {

  employeeData: IEmpData[] = []
  editObj!: IEmpData
  public employeeEditObj: FormGroup;

  constructor(private empDataSer: EmployeeService, private build: FormBuilder, private route: Router, private modalservice: ConfirmModalService) {
    this.getEmployeeData()
    this.employeeEditObj = this.build.group({
      id: [''],
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      appsDeveloped: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      joiningTime: [''],
      imageUrl: ['']
    })
  }

  get editFromControls() {
    return this.employeeEditObj.controls;
  }

  public getEmployeeData() {
    this.empDataSer.getEmployeeData().subscribe((res: IEmpData[]) => {
      this.employeeData = res.filter((x: IEmpData) => {
        let date = new Date(x.joiningTime)
        x.dateString = new Date(date.getMonth(), date.getDate(), date.getFullYear(), 0o0, 0o0, 0o0).getTime()
        return x;
      })
    },
    ()=>{
      this.route.navigate(['networkError'])
    })
  }

  sortByColumn($event: any) {
    let colName: keyof IEmpData = $event.colName;
    const isAscending: boolean = $event.isAscending;
    if (colName === "joiningTime") {
      colName = "dateString"
      this.employeeData = this.employeeData.sort(
        this.compare(colName, isAscending)
      )
    }
    else
      this.employeeData = this.employeeData.sort(
        this.compare(colName, isAscending)
      )
  }

  compare(colName: keyof IEmpData, isAsscending: boolean) {
    return function(a: IEmpData, b: IEmpData) {
      if (a[colName].toString().toLowerCase() < b[colName].toString().toLowerCase()) {
        return isAsscending ? -1 : 1;
      }
      if (a[colName].toString().toLowerCase() > b[colName].toString().toLowerCase()) {
        return isAsscending ? 1 : -1;
      }
      return 0;
    };
  }

  deleteRow(idNo: number, index: number) {
    this.modalservice.confirm()
    .then((confirmed:boolean) => {console.log('User confirmed:', confirmed)
  })
  .catch(() => {
    console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)')
    let testRet = this.modalservice.confirm();
    console.log(testRet);
    });
    // const user = this.employeeData[index].username
    // const conformationToDelete = confirm("Do you want to delete " + user + "?")
    // if (conformationToDelete)
    //   this.empDataSer.deleteEmployee(idNo).subscribe(() => this.getEmployeeData())
  }

  selectEditObj(employee: IEmpData) {
    this.editObj = employee
    this.employeeEditObj.controls['id'].setValue(employee.id);
    this.employeeEditObj.controls['firstName'].setValue(employee.firstName);
    this.employeeEditObj.controls['lastName'].setValue(employee.lastName);
    this.employeeEditObj.controls['email'].setValue(employee.email);
    this.employeeEditObj.controls['experience'].setValue(employee.experience);
    this.employeeEditObj.controls['gender'].setValue(employee.gender);
    this.employeeEditObj.controls['appsDeveloped'].setValue(employee.appsDeveloped);
    this.employeeEditObj.controls['username'].setValue(employee.username);
  }

  resetEmployee() {
      this.employeeEditObj.reset()
  }

  editEmployee() {
    const obj: IEmpData = this.employeeEditObj.value
    obj.imageUrl = this.editObj.imageUrl
    this.empDataSer.editEmployee(obj).subscribe(() => this.getEmployeeData())
  }

  addEmployee() {
    let addObj = this.employeeEditObj.value
    addObj.id = Math.round(Math.random() * 10000)
    this.empDataSer.addEmployee(addObj).subscribe(() => {
      this.getEmployeeData()
    });
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