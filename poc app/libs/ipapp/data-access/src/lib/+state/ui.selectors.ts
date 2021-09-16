/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPatientRecord } from './ui.models';
import * as fromUIReducer from './ui.reducer';

export const getPatientRecordsFeatureState = createFeatureSelector
<fromUIReducer.ExIPatRecState>(fromUIReducer.uiFeatureKey);

export const getPatientRecords = createSelector(
  getPatientRecordsFeatureState,
  state => state.Recs
)
  
export const getError = createSelector(
  getPatientRecordsFeatureState,
  state => state.error
)


export const getPatientRecordByID = createSelector(
  getPatientRecordsFeatureState,
  state => state.Rec
)

export const DeletePatientRecordSel = createSelector(
  getPatientRecordsFeatureState,
  state => state.Rec
)

export const addPatientRecord = createSelector(
  getPatientRecordsFeatureState,
  state => state.Rec
)

export const editPatientRecord = createSelector(
  getPatientRecordsFeatureState,
  state => state.Rec
)