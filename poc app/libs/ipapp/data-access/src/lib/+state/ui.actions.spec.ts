import * as fromUi from './ui.actions';

describe('loadUis', () => {
  it('should return an action', () => {
    expect(fromUi.init().type).toBe('[Ui] Load Uis');
  });
});
