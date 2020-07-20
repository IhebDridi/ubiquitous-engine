import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownformToolbarComponent } from './dropdownform-toolbar.component';

describe('DropdownformToolbarComponent', () => {
  let component: DropdownformToolbarComponent;
  let fixture: ComponentFixture<DropdownformToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownformToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownformToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
