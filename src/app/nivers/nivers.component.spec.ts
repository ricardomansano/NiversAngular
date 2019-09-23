import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiversComponent } from './nivers.component';

describe('NiversComponent', () => {
  let component: NiversComponent;
  let fixture: ComponentFixture<NiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
