/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPatientRecord } from './+state/ui.models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class IpappService {
  private API_URL = 'https://localhost:44338';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPatientRecord[]> {
    //debugger;
    return this.http.get<IPatientRecord[]>(`${this.API_URL}/api/GetPatientsRecordList/`);
}

 getByID(PatientId: number): Observable<IPatientRecord> {
  return this.http.get<IPatientRecord>(`${this.API_URL}/api/GetPatientRecordByID?PatientId=${PatientId}`);
}

Delete(PatientId: number): Observable<IPatientRecord> {
  //debugger;
  return this.http.get<IPatientRecord>(`${this.API_URL}/api/DeletePatientRecord?ID=${PatientId}`);
}

Add(PatientRecord: IPatientRecord): Observable<IPatientRecord> {
  //debugger;
  return this.http.post<IPatientRecord>(`${this.API_URL}/api/InsertPatientRecord`, PatientRecord);
}

Update(PatientRecord: IPatientRecord): Observable<IPatientRecord> {
  //debugger;
  return this.http.put<IPatientRecord>(`${this.API_URL}/api/UpdatePatientRecord/`, PatientRecord);
}
}