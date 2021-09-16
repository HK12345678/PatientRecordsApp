/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action, createReducer, on } from '@ngrx/store';
import * as UiActions from './ui.actions';
import { IPatientRecord} from  './ui.models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const uiFeatureKey = 'ui';

export interface ExIPatRecState {
  Recs : IPatientRecord[],
  Rec: IPatientRecord,
  error : string;
}

export const initialState: ExIPatRecState = {
  Recs: [],
  Rec: {} as IPatientRecord,
  error: ''
};

export function reducer(state = initialState, action: UiActions.PatientRecordsActions): ExIPatRecState {
  switch (action.type) {

    case UiActions.PatientRecordActionTypes.LoadPatientRecords:
    
    return {
        ...state
      }

    case UiActions.PatientRecordActionTypes.LoaddPatientRecordsSuccess:
      return {
        ...state,
        Recs: action.payload.PatientRecordArray,
        error: ''
      }

    case UiActions.PatientRecordActionTypes.LoaddPatientRecordsFailure:
      return {
        ...state,
        Recs: [],
        error: action.payload.error
      }

      case UiActions.PatientRecordActionTypes.LoadPatientIDRecord:
    
    return {
        ...state
      }

    case UiActions.PatientRecordActionTypes.LoaddPatientIDRecordSuccess:
      return {
        ...state,
        Rec: action.payload.PatientRecord,
        error: ''
      }

    case UiActions.PatientRecordActionTypes.LoaddPatientIDRecordFailure:
      return {
        ...state,
        Recs: [],
        error: action.payload.error
      }

      case UiActions.PatientRecordActionTypes.DeletePatientRecord:
    
    return {
        ...state
      }

    case UiActions.PatientRecordActionTypes.DeletePatientRecordFailure:
      //debugger;
      return {
        ...state,
        error: action.payload.error
      }

      case UiActions.PatientRecordActionTypes.AddPatientRecord:
    
        return {
            ...state
          }
    
        case UiActions.PatientRecordActionTypes.AddPatientRecordSuccess:
          return {
            ...state,
            Rec: action.payload,
            error: ''
          }
    
        case UiActions.PatientRecordActionTypes.AddPatientRecordFailure:
          return {
            ...state,
            Recs: [],
            error: action.payload.error
          }

          
      case UiActions.PatientRecordActionTypes.EditPatientRecord:
    
        return {
            ...state
          }
    
        case UiActions.PatientRecordActionTypes.EditPatientRecordSuccess:
          return {
            ...state,
            Rec: action.payload,
            error: ''
          }
    
        case UiActions.PatientRecordActionTypes.EditPatientRecordFailure:
          return {
            ...state,
            Recs: [],
            error: action.payload.error
          }

    default:
      return state;
  }
}
