import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConformationModalComponent } from '../conformation-modal/conformation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  constructor(private ngbMod:NgbModal) { }

  public confirm():Promise<boolean> {
    const confirmRes = this.ngbMod.open(ConformationModalComponent,{size: 'sm'});
    return confirmRes.result; 
  }

}