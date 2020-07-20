import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMComponent } from './model-m.component';

describe('ModelMComponent', () => {
  let component: ModelMComponent;
  let fixture: ComponentFixture<ModelMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
