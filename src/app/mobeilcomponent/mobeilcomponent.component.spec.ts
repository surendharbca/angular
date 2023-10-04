import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobeilcomponentComponent } from './mobeilcomponent.component';

describe('MobeilcomponentComponent', () => {
  let component: MobeilcomponentComponent;
  let fixture: ComponentFixture<MobeilcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobeilcomponentComponent]
    });
    fixture = TestBed.createComponent(MobeilcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
