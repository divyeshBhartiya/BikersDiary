import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public joggingData: Array<any>;
  public currentJogging: any;
  public addNew: boolean;

  constructor (private workoutService: WorkoutService) {
    workoutService.get().subscribe((data: any) => this.joggingData = data);
    this.addNew = false;
    this.currentJogging = this.setInitialValuesForJoggingData();
  }
  ngOnInit(): void {
  }
  private setInitialValuesForJoggingData () {
    return {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    }
  }

  public createOrUpdateJogging = function(jogging: any) {
    // if jogging is present in joggingData, we can assume this is an update
    // otherwise it is adding a new element
    let joggingWithId : any;
    joggingWithId = _.find(this.joggingData, (el => el.id === jogging.id));
    if (joggingWithId) {
      const updateIndex = _.findIndex(this.joggingData, {id: joggingWithId.id});
      this.workoutService.update(jogging).subscribe(
        joggingRecord =>  this.joggingData.splice(updateIndex, 1, jogging)
      );
    } else {
      this.workoutService.add(jogging).subscribe(
        joggingRecord => this.joggingData.push(jogging)
      );
    }
    this.addNew = false;
    this.currentJogging = this.setInitialValuesForJoggingData();
  };

  public editClicked = function(record) {
    this.addNew = true;
    this.currentJogging = record;
  };

  public newClicked = function(event) {
    this.addNew = true;
    this.currentJogging = this.setInitialValuesForJoggingData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.joggingData, {id: record.id});
    debugger;
    this.workoutService.remove(record).subscribe(
      result => this.joggingData.splice(deleteIndex, 1)
    );
  }

  public closeClicked(event) {
    this.addNew = event;
  }

}
