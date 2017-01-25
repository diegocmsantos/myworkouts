import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutsPage } from '../workouts/workouts';

import { WorkoutService } from '../../app/services/workout.service';

@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  public title: String;
  public note: String;
  public type: String;
  public result: any;

  constructor(public navCtrl: NavController,
    private _workoutService: WorkoutService) {}

  onSubmit() {
    const workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    // Add workout
    this._workoutService.addWorkout(workout)
    .subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(WorkoutsPage);
  }

}
