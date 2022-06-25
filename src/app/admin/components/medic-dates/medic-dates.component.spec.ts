import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicDatesComponent } from './medic-dates.component';

describe('MedicDatesComponent', () => {
  let component: MedicDatesComponent;
  let fixture: ComponentFixture<MedicDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
