import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToSubmitComponent } from './form-to-submit.component';

describe('FormToSubmitComponent', () => {
  let component: FormToSubmitComponent;
  let fixture: ComponentFixture<FormToSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
