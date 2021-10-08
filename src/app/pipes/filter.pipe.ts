import { Pipe, PipeTransform } from '@angular/core';
import { IEmpData } from '../Interfaces/interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data : IEmpData[], filterName:string): IEmpData[] {
    if(filterName === "male")
      return data.filter((a)=>a.gender === "M")
    else if(filterName === "female")
    return data.filter((a)=>a.gender === "F")
    else
    return data;
  }
}
