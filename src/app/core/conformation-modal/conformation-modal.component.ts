import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conformation-modal',
  templateUrl: './conformation-modal.component.html',
  styleUrls: ['./conformation-modal.component.scss']
})
export class ConformationModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log('Hello');
  }

  ngOnDestroy() {
    console.log('Bye');
    
  }
  

  dismiss() {
    console.log('Hello');
    this.activeModal.dismiss(true)
  }

  cancel() {
    this.activeModal.close(false);
  }

  accept() {
    this.activeModal.close(true);
  }

}
