import { EmpireTestComponent } from './empire-test.component';

describe('EmpireTestComponent', () => {
  let component: EmpireTestComponent;

  beforeEach(() => {
    component = new EmpireTestComponent();
  });

  it('should register rebels and planets', () => {
    component.rebel = 'Claudio';
    component.planet = 'Saturn';
    component.testEmpireRegister();

    expect(component.rebelsRecorded.length).toBe(1);
  });
});
