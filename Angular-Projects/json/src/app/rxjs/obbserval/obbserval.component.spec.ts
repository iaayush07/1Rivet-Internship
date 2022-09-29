import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObbservalComponent } from './obbserval.component';

describe('ObbservalComponent', () => {
  let component: ObbservalComponent;
  let fixture: ComponentFixture<ObbservalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObbservalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObbservalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
