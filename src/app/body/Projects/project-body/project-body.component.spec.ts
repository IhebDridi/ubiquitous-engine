import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBodyComponent } from './project-body.component';

describe('ProjectBodyComponent', () => {
  let component: ProjectBodyComponent;
  let fixture: ComponentFixture<ProjectBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
