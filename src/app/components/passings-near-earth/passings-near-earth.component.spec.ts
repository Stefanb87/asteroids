import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingsNearEarthComponent } from './passings-near-earth.component';

describe('PassingsNearEarthComponent', () => {
  let component: PassingsNearEarthComponent;
  let fixture: ComponentFixture<PassingsNearEarthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingsNearEarthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingsNearEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
