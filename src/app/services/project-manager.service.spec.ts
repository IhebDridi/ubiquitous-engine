import { TestBed } from '@angular/core/testing';

import { ProjectMAnagerService } from './project-manager.service';

describe('ProjectMAnagerService', () => {
  let service: ProjectMAnagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMAnagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
