import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsListComponent } from './asteroids-list.component';

describe('AsteroidsListComponent', () => {
  let component: AsteroidsListComponent;
  let fixture: ComponentFixture<AsteroidsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
