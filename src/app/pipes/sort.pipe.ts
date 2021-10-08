import { Pipe, PipeTransform } from '@angular/core';
import { IEmpData } from '../Interfaces/interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(data : IEmpData[], sortName:string): IEmpData[] {
    if(sortName === "a-z")
      return data.sort((a,b)=>a.username.localeCompare(b.username))
    else if(sortName === "z-a")
    return data.sort((a,b)=>b.username.localeCompare(a.username))
    else if(sortName === "lowExp")
    return data.sort((a,b)=>a.experience - b.experience)
    else if(sortName === "highExp")
    return data.sort((a,b)=>b.experience - a.experience)
    else
    return data;
  }

}
