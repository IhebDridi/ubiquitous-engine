import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownToolbarConnectedComponent } from './dropdown-toolbar-connected.component';

describe('DropdownToolbarConnectedComponent', () => {
  let component: DropdownToolbarConnectedComponent;
  let fixture: ComponentFixture<DropdownToolbarConnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownToolbarConnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownToolbarConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
