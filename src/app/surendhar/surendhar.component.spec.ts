import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurendharComponent } from './surendhar.component';

describe('SurendharComponent', () => {
  let component: SurendharComponent;
  let fixture: ComponentFixture<SurendharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurendharComponent]
    });
    fixture = TestBed.createComponent(SurendharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
