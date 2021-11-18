import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortTableDirective } from './directives/sort-table.directive';



@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    SortTableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    FilterPipe,
    SortTableDirective
  ]
})
export class CoreModule { }
