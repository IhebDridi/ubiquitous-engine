import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTestSecondComponent } from './link-test-second.component';

describe('LinkTestSecondComponent', () => {
  let component: LinkTestSecondComponent;
  let fixture: ComponentFixture<LinkTestSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTestSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTestSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
