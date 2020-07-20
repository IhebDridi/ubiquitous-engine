import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPresentationRealComponent } from './project-presentation-real.component';

describe('ProjectPresentationRealComponent', () => {
  let component: ProjectPresentationRealComponent;
  let fixture: ComponentFixture<ProjectPresentationRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPresentationRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPresentationRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
