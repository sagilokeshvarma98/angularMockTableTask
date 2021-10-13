
// export class Sort {
//     private _sortOrder = -1;
//     private _collator = new Intl.Collator(undefined,{
//         numeric: true,
//         sensitivity: "base"
//     })

//     public startSort(property: string) {
//         return (a,b)=>{
//             return this._collator.compare(a[property], b[property]) * this._sortOrder
//         }
//     }

// }