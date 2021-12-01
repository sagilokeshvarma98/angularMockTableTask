import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortTableDirective } from './directives/sort-table.directive';
import { NetworkErrorComponent } from './network-error/network-error.component';
import { ConformationModalComponent } from './conformation-modal/conformation-modal.component';



@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    SortTableDirective,
    NetworkErrorComponent,
    ConformationModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    FilterPipe,
    SortTableDirective,
    NetworkErrorComponent,
    ConformationModalComponent
  ]
})
export class CoreModule { }
