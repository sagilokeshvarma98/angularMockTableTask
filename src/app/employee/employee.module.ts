import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { SortTableDirective } from './directives/sort-table.directive';
import { EmployeeTableComponent } from './employee-table/employee-table.component';


@NgModule({
  declarations: [
    SortTableDirective,
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
