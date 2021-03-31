import { fakeAsync, tick } from '@angular/core/testing';
import { NasaTestComponent } from './nasa-test.component';

describe('NasaTestComponent', () => {
  let component: NasaTestComponent;
  let timerCallbackFunction;
  beforeEach(() => {
    component = new (NasaTestComponent);
  });
  
  it('should call setInterval', fakeAsync(() => {
    component.number = 1;
    component.testNasa();
    tick(1001);
    expect(component.count).toBe(0);
  }));
  
});
