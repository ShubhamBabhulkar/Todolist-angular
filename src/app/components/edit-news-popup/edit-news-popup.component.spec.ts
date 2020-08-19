import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsPopupComponent } from './edit-news-popup.component';

describe('EditNewsPopupComponent', () => {
  let component: EditNewsPopupComponent;
  let fixture: ComponentFixture<EditNewsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
