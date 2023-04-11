import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregisterationComponent } from './userregisteration.component';

describe('UserregisterationComponent', () => {
  let component: UserregisterationComponent;
  let fixture: ComponentFixture<UserregisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserregisterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
