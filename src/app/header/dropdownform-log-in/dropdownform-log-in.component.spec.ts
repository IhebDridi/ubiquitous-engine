import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownformLogInComponent } from './dropdownform-log-in.component';

describe('DropdownformLogInComponent', () => {
  let component: DropdownformLogInComponent;
  let fixture: ComponentFixture<DropdownformLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownformLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownformLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
