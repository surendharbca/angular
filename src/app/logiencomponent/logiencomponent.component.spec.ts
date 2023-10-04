import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiencomponentComponent } from './logiencomponent.component';

describe('LogiencomponentComponent', () => {
  let component: LogiencomponentComponent;
  let fixture: ComponentFixture<LogiencomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogiencomponentComponent]
    });
    fixture = TestBed.createComponent(LogiencomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
