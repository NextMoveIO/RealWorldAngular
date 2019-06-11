import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {

  id: number;

  okCallback: Function;
  cancelCallback: Function;

  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
  }

  setCallbacks(okCallback: Function, cancelCallback?: Function) {
    this.okCallback = okCallback;
    this.cancelCallback = cancelCallback;
  }

  ok() {
    if (this.okCallback) {
      this.okCallback(this.id);
    }
    this.close();
  }

  cancel() {
    if (this.cancelCallback) {
      this.cancelCallback();
    }
    this.close();
  }

  close() {
    this.modalRef.hide();
  }

}
