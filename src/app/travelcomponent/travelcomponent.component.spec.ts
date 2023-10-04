import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcomponentComponent } from './travelcomponent.component';

describe('TravelcomponentComponent', () => {
  let component: TravelcomponentComponent;
  let fixture: ComponentFixture<TravelcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelcomponentComponent]
    });
    fixture = TestBed.createComponent(TravelcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
