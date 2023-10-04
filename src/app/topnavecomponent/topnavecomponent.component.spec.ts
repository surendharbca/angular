import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavecomponentComponent } from './topnavecomponent.component';

describe('TopnavecomponentComponent', () => {
  let component: TopnavecomponentComponent;
  let fixture: ComponentFixture<TopnavecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopnavecomponentComponent]
    });
    fixture = TestBed.createComponent(TopnavecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
