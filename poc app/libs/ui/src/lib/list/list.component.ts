/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ExIPatRecState, UIActions, UISelector } from '@papp/ipapp/data-access';
import { IPatientRecord } from 'libs/ipapp/data-access/src/lib/+state/ui.models';
import { IpappService } from 'libs/ipapp/data-access/src/lib/ipapp.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import {Location} from '@angular/common';


@Component({
  selector: 'inx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //records$!: Observable<IPatientRecord[]>;
  //records$ = this.store.select(state => UISelector.getPatientRecords);
  errorMessage = undefined;
  PatientRecordsRetrieved: IPatientRecord[]  = [];

  constructor(private route: Router, private store: Store<ExIPatRecState>,
    private location: Location) {
   //debugger;
    this.location.onUrlChange(x => this.urlChange());
  }

  openRecDetails(record : IPatientRecord)
  {
    this.route.navigate(['add', record.ID]);
  }

  RemoveRecord(record : IPatientRecord)
  {
    //debugger;
    this.store.dispatch(new UIActions.DeletePatientRecord(Number(record.ID)));
  }

  Add()
  {
    this.route.navigate(['add', -1]);
  }

  ngOnInit(): void {
   //debugger;
   this.store.dispatch(new UIActions.LoadPatientRecords);
   this.store.pipe(select(UISelector.getPatientRecords)).subscribe(
    patientRecords => 
    {
      this.PatientRecordsRetrieved = patientRecords;
    }
  )

  }

  urlChange() {
   //debugger;
   this.store.dispatch(new UIActions.LoadPatientRecords);
   this.store.pipe(select(UISelector.getPatientRecords)).subscribe(
    patientRecords => 
    {
      this.PatientRecordsRetrieved = patientRecords;
    }
  )
  }
}
