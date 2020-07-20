import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownformSignUpComponent } from './dropdownform-sign-up.component';

describe('DropdownformSignUpComponent', () => {
  let component: DropdownformSignUpComponent;
  let fixture: ComponentFixture<DropdownformSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownformSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownformSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
