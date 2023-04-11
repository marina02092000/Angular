import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwithdiscountComponent } from './productwithdiscount.component';

describe('ProductwithdiscountComponent', () => {
  let component: ProductwithdiscountComponent;
  let fixture: ComponentFixture<ProductwithdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductwithdiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductwithdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
