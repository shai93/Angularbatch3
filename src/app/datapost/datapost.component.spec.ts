import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapostComponent } from './datapost.component';

describe('DatapostComponent', () => {
  let component: DatapostComponent;
  let fixture: ComponentFixture<DatapostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
