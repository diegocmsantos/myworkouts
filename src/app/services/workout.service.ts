import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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

}