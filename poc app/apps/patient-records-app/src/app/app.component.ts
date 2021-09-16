import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPatientRec} from '@poc/data';

@Component({
  selector: 'poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  PatientRecArray: IPatientRec[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<IPatientRec[]>('/api/GetPatientsList').subscribe((t) => (this.PatientRecArray = t));
  }

  addrecord() {
    this.http.post('/api/AddPatientRecord', {}).subscribe(() => {
      this.fetch();
    });
};
}
