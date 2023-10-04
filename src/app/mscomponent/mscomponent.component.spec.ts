import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MscomponentComponent } from './mscomponent.component';

describe('MscomponentComponent', () => {
  let component: MscomponentComponent;
  let fixture: ComponentFixture<MscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MscomponentComponent]
    });
    fixture = TestBed.createComponent(MscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
