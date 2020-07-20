import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNavRealComponent } from './project-nav-real.component';

describe('ProjectNavRealComponent', () => {
  let component: ProjectNavRealComponent;
  let fixture: ComponentFixture<ProjectNavRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectNavRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNavRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
