import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianViewComponent } from './accordian-view.component';

describe('AccordianViewComponent', () => {
  let component: AccordianViewComponent;
  let fixture: ComponentFixture<AccordianViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
