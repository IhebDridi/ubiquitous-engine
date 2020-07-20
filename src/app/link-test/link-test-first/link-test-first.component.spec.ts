import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTestFirstComponent } from './link-test-first.component';

describe('LinkTestFirstComponent', () => {
  let component: LinkTestFirstComponent;
  let fixture: ComponentFixture<LinkTestFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTestFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTestFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
