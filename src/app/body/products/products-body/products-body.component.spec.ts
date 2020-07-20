import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBodyComponent } from './products-body.component';

describe('ProductsBodyComponent', () => {
  let component: ProductsBodyComponent;
  let fixture: ComponentFixture<ProductsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
