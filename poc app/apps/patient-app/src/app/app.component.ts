import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IPatientRecord} from '@ipoc/data';

@Component({
  selector: 'ipoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  PatientRecordArray: IPatientRecord[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    //this.http.get<IPatientRecord[]>('/api/GetPatientsList').subscribe((t) => 
    //(this.PatientRecordArray = t));
  }

  addrecord() {
    this.http.post('/api/AddPatientRecord', {}).subscribe(() => {
      this.fetch();
    });
};
}
