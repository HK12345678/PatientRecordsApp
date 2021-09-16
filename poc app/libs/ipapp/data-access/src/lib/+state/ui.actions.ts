/* eslint-disable no-debugger */
import { Action } from '@ngrx/store';
import { IPatientRecord } from './ui.models'

export enum PatientRecordActionTypes {
  LoadPatientRecords = '[PatientRecord] Load Patient Records',
  LoaddPatientRecordsSuccess = '[PatientRecord] Load Patient Success',
  LoaddPatientRecordsFailure = '[PatientRecord] Load Patient Failure',

  LoadPatientIDRecord = '[PatientRecord] Load Patient Record By ID',
  LoaddPatientIDRecordSuccess = '[PatientRecord] Load Patient By ID Success',
  LoaddPatientIDRecordFailure = '[PatientRecord] Load Patient By ID Failure',

  DeletePatientRecord = '[PatientRecord] Delete Patient Record',
  DeletePatientRecordSuccess = '[PatientRecord] Delete Patient Success',
  DeletePatientRecordFailure = '[PatientRecord] Delete Patient Failure',


  AddPatientRecord = '[PatientRecord] Add Patient Record',
  AddPatientRecordSuccess = '[PatientRecord] Add Patient Success',
  AddPatientRecordFailure = '[PatientRecord] Add Patient Failure',

  EditPatientRecord = '[PatientRecord] Edit Patient Record',
  EditPatientRecordSuccess = '[PatientRecord] Edit Patient Success',
  EditPatientRecordFailure = '[PatientRecord] Edit Patient Failure',
}

export class LoadPatientRecords implements Action {
  readonly type = PatientRecordActionTypes.LoadPatientRecords;
}

export class LoaddPatientRecordsSuccess implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientRecordsSuccess;
  constructor(public payload: { PatientRecordArray: IPatientRecord[] }) { }
}

export class LoaddPatientRecordsFailure implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientRecordsFailure;
  constructor(public payload: { error: string }) { }
}

export class LoadPatientRecordByID implements Action {
  readonly type = PatientRecordActionTypes.LoadPatientIDRecord;
  constructor(
    public payload:  number ) {
    }
// constructor(public payload: { ID: number }) { }
}

export class LoaddPatientRecordByIDSuccess implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientIDRecordSuccess;
  constructor(public payload: { PatientRecord: IPatientRecord }) { }
}

export class LoaddPatientRecordByIDFailure implements Action {
  readonly type = PatientRecordActionTypes.LoaddPatientIDRecordFailure;
  constructor(public payload: { error: string }) { }
}

export class DeletePatientRecord implements Action {
  readonly type = PatientRecordActionTypes.DeletePatientRecord;
  constructor(
    public payload:  number ) {
    }
}

export class DeletePatientRecordSuccess implements Action {
  readonly type = PatientRecordActionTypes.DeletePatientRecordSuccess;
}

export class DeletePatientRecordFailure implements Action {
  readonly type = PatientRecordActionTypes.DeletePatientRecordFailure;
  constructor(public payload: { error: string }) { }
}


export class AddPatientRecord implements Action {
  readonly type = PatientRecordActionTypes.AddPatientRecord;
  constructor(public payload: IPatientRecord ) { }
}

export class AddPatientRecordSuccess implements Action {
  readonly type = PatientRecordActionTypes.AddPatientRecordSuccess;
  constructor(public payload: IPatientRecord ) { }
}

export class AddPatientRecordFailure implements Action {
  readonly type = PatientRecordActionTypes.AddPatientRecordFailure;
  constructor(public payload: { error: string }) { }
}

export class EditPatientRecord implements Action {
  readonly type = PatientRecordActionTypes.EditPatientRecord;
  constructor(public payload: IPatientRecord ) { }
}

export class EditPatientRecordSuccess implements Action {
  readonly type = PatientRecordActionTypes.EditPatientRecordSuccess;
  constructor(public payload: IPatientRecord ) { }
}

export class EditPatientRecordFailure implements Action {
  readonly type = PatientRecordActionTypes.EditPatientRecordFailure;
  constructor(public payload: { error: string }) { }
}

export type PatientRecordsActions = LoadPatientRecords | LoaddPatientRecordsSuccess | LoaddPatientRecordsFailure  |
LoadPatientRecordByID | LoaddPatientRecordByIDSuccess | LoaddPatientRecordByIDFailure |
DeletePatientRecord | DeletePatientRecordSuccess | DeletePatientRecordFailure |
AddPatientRecord | AddPatientRecordSuccess | AddPatientRecordFailure |
EditPatientRecord | EditPatientRecordSuccess | EditPatientRecordFailure;


