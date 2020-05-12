import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCustomerComponent } from './current-customer.component';

describe('CurrentCustomerComponent', () => {
  let component: CurrentCustomerComponent;
  let fixture: ComponentFixture<CurrentCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
