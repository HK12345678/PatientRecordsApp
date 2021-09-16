/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {  catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import * as UiActions from './ui.actions';
import { IpappService } from '../ipapp.service';
import { fetch } from '@nrwl/angular';
import { EmptyError } from 'rxjs/internal/util/EmptyError';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IPatientRecord } from './ui.models';

@Injectable()
export class uiEffects 
 {
  @Effect()
  LoadPatientRecords$ = createEffect(() =>
            this.actions$.pipe (ofType(UiActions.PatientRecordActionTypes.LoadPatientRecords),
                              fetch({
        run: (action) => {
          return this.ipappService.getAll()
            .pipe(
              map(PatientRecordArray => new UiActions.LoaddPatientRecordsSuccess
                ({ PatientRecordArray }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return new UiActions.LoaddPatientRecordsFailure({ error });
        },
      })
    ));

    @Effect()
    loadByIDr$: Observable<Action> = this.actions$.pipe(
      ofType<UiActions.LoadPatientRecordByID>(
        UiActions.PatientRecordActionTypes.LoadPatientIDRecord
      ),
      mergeMap((action: UiActions.LoadPatientRecordByID) =>
      this.ipappService.getByID(action.payload).pipe(
          map(
            (PatientRecord) =>
              new UiActions.LoaddPatientRecordByIDSuccess({PatientRecord})
          ),
          catchError(err => of(new UiActions.LoaddPatientRecordByIDFailure(err)))
        )
      )
    );

    @Effect()
    Delete$: Observable<Action> = this.actions$.pipe(
      ofType<UiActions.DeletePatientRecord>(
        UiActions.PatientRecordActionTypes.DeletePatientRecord
      ),
      mergeMap((action: UiActions.DeletePatientRecord) =>
      this.ipappService.Delete(action.payload).pipe(
          map(
            (PatientRecord) =>
              new UiActions.DeletePatientRecordSuccess()
          ),
          catchError(err => of(new UiActions.DeletePatientRecordFailure(err)))
        )
      )
    );


    @Effect()
    Add$: Observable<Action> = this.actions$.pipe(
      ofType<UiActions.AddPatientRecord>(
        UiActions.PatientRecordActionTypes.AddPatientRecord
      ),
      mergeMap((action: UiActions.AddPatientRecord) =>
      this.ipappService.Add(action.payload).pipe(
          map(
            (PatientRecord) =>
              new UiActions.AddPatientRecordSuccess(PatientRecord)
          ),
          catchError(err => of(new UiActions.AddPatientRecordFailure(err)))
        )
      )
    );

    @Effect()
    Edit$: Observable<Action> = this.actions$.pipe(
      ofType<UiActions.EditPatientRecord>(
        UiActions.PatientRecordActionTypes.EditPatientRecord
      ),
      mergeMap((action: UiActions.EditPatientRecord) =>
      this.ipappService.Update(action.payload).pipe(
          map(
            (PatientRecord) =>
              new UiActions.EditPatientRecordSuccess(PatientRecord)
          ),
          catchError(err => of(new UiActions.EditPatientRecordFailure(err)))
        )
      )
    );

  constructor(private actions$: Actions, private ipappService: IpappService) {}
}
