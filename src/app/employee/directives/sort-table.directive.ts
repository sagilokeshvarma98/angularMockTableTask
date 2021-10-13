import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { IEmpData } from 'src/app/Interfaces/interface';
// import { Sort } from "../reusable/sort";
@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective implements OnChanges {

  @Input() tableData:IEmpData[] = [];
 
  constructor(private el:ElementRef) {
   }

   ngOnChanges() {
    this.toCheckTheTable()
   }

  toCheckTheTable() {
    // const sort = new Sort()
    const element = this.el.nativeElement
    const property = element.getAttribute("data-name")
    for (let ele in this.tableData) {
      for (let ele2 in this.tableData) {
        if(this.tableData[ele].lastName < this.tableData[ele2].lastName) {
          let temp = this.tableData[ele]
          this.tableData[ele] = this.tableData[ele2];
          this.tableData[ele2] = temp
        }
      }
    }
  }
}
