import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent as first } from './first.component';

describe('FirstComponent', () => {
  let component: first;
  let fixture: ComponentFixture<first>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ first ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(first);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
