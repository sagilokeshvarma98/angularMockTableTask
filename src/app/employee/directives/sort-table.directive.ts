import { Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
@Directive({
  selector: '[appSortTable]'
})
export class SortTableDirective {

  @Input() colName:string = "";
  @Input() isAscending:boolean = true;
  @Input() isDefault:boolean = false;
  @Output() getSortValues: EventEmitter<any> = new EventEmitter();

  @HostListener('click') sortDataByColumName() {
    this.isAscending = !this.isAscending
    this.getSortValues.emit({
      isAscending: this.isAscending,
      colName: this.colName,
    })
  }

  
  // toCheckTheTable() {
    // type TEmpData = keyof IEmpData;
  //   const element = this.el.nativeElement
  //   const property: keyof IEmpData = element.getAttribute("data-name")
  //   for (let ele in this.tableData) {
  //     for (let ele2 in this.tableData) {
  //       if(this.tableData[ele][property] < this.tableData[ele2][property]) {
  //         let temp = this.tableData[ele]
  //         this.tableData[ele] = this.tableData[ele2];
  //         this.tableData[ele2] = temp
  //       }
  //     }
  //   }
  // }

}

//CICD