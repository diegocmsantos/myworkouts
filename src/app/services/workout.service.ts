import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {

  _http:any;
  apiKey: string;
  workoutUrl: string;
  
  constructor(private http: Http) {
    this._http = http;
    this.apiKey = '0dZxTlcYKOX9yHNGM5Vw3raXGOHiVUod';
    this.workoutUrl = 'https://api.mlab.com/api/1/databases/myworkouts_maia/collections/workouts';
  }

  getWorkouts() {
    return this._http.get(this.workoutUrl + '?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

  addWorkout(workout) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(
      this.workoutUrl + '?apiKey=' + this.apiKey,
      JSON.stringify(workout),
      {headers: headers}
    )
    .map(res => res.json());
  }

  deleteWorkout(workoutId) {
    return this._http.delete(this.workoutUrl + '/' + workoutId + '?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

}