import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-jogging',
  templateUrl: './add-or-update-jogging.component.html',
  styleUrls: ['./add-or-update-jogging.component.css']
})
export class AddOrUpdateJoggingComponent implements OnInit {
  @Output() joggingCreated = new EventEmitter<any>();
  @Input() joggingInfo: any;
  @Output() onCloseClicked: EventEmitter<any> = new EventEmitter<any>();

  public buttonText = 'Save';

  constructor() {
    this.clearJoggingInfo();
 }

  ngOnInit(): void {
  }

  private clearJoggingInfo = function() {
    // Create an empty jogging object
    this.joggingInfo = {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    };
  };

  public addOrUpdateJoggingRecord = function(event) {
    this.addNew = false;
    this.joggingCreated.emit(this.joggingInfo, this.addNew);
    this.clearJoggingInfo();
  };

  public closeClicked = function (event) {
    this.onCloseClicked.emit(false);
    this.clearJoggingInfo();
  }
}
