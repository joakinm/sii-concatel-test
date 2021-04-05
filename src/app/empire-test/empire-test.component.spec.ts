import { NgForm } from '@angular/forms';
import { EmpireTestComponent } from './empire-test.component';

describe('EmpireTestComponent', () => {
  let component: EmpireTestComponent;

  beforeEach(() => {
    component = new EmpireTestComponent(null);
  });

  it('registers rebels and planets', () => {
    component.rebel = 'Claudio';
    component.planet = 'Saturn';
    component.testEmpireRegister();

    expect(component.rebelsRecorded.length).toBe(1);
  });

  it('registers rebels correctly', () => {
    const rebelName = 'Claudio';
    const planetName = 'Saturn';
    component.rebel = rebelName;
    component.planet = planetName;
    component.testEmpireRegister();
    expect(component.rebelsRecorded[0].rebelName).toBe(rebelName);
    expect(component.rebelsRecorded[0].planetName).toBe(planetName);
  });
});
