import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireTestComponent } from './empire-test.component';

describe('EmpireTestComponent', () => {
  let component: EmpireTestComponent;
  let fixture: ComponentFixture<EmpireTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpireTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
