import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicescomponentComponent } from './electronicescomponent.component';

describe('ElectronicescomponentComponent', () => {
  let component: ElectronicescomponentComponent;
  let fixture: ComponentFixture<ElectronicescomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicescomponentComponent]
    });
    fixture = TestBed.createComponent(ElectronicescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
