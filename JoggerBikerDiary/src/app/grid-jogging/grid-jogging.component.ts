import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.css']
})
export class GridJoggingComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() joggingData: Array<any>;
  @Input() addNew: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

  public customTrackBy(index: number, obj: any): any {
    return index;
  }

  public editRecord(record) {
    this.addNew = true;
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.addNew = true;
    this.newClicked.emit(this.addNew);
  }

}
