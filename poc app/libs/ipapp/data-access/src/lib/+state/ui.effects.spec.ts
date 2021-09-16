import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { uiEffects } from './ui.effects';

describe('UiEffects', () => {
  let actions$: Observable<any>;
  let effects: uiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        uiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(uiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
