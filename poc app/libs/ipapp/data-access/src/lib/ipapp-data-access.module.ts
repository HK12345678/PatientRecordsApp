import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUIReducer from './+state/ui.reducer';
import { uiEffects } from './+state/ui.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUIReducer.uiFeatureKey, fromUIReducer.reducer),
    EffectsModule.forFeature([uiEffects]),
  ],
})
export class UIDataAccessModule {}
