import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisualiseComponent } from './previsualise.component';

describe('PrevisualiseComponent', () => {
  let component: PrevisualiseComponent;
  let fixture: ComponentFixture<PrevisualiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisualiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisualiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
