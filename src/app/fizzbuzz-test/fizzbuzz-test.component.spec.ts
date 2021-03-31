import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzbuzzTestComponent } from './fizzbuzz-test.component';

describe('FizzbuzzTestComponent', () => {
  let component: FizzbuzzTestComponent;
  let fixture: ComponentFixture<FizzbuzzTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzbuzzTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzbuzzTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
