import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TestSelectorComponent } from './test-selector.component';

describe('TestSelectorComponent', () => {
  let component: TestSelectorComponent;
  let fixture: ComponentFixture<TestSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ TestSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('navigates to empire test', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.openEmpire();
    expect(spy).toHaveBeenCalledWith(['empire-test']);
  });

  it('navigates to fizzbuzz test', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.openFizzBuzz();
    expect(spy).toHaveBeenCalledWith(['fizzbuzz-test']);
  });

  it('navigates to nasa test', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.openNasa();
    expect(spy).toHaveBeenCalledWith(['nasa-test']);
  });
});
