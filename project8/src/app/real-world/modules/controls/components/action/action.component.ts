import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Output() edit = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { console.log('action'); }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit(null);
  }

  onView() {
    this.view.emit(null);
  }

  onDelete() {
    this.delete.emit(null);
  }
}
