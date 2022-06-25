import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicDateComponent } from './add-medic-date.component';

describe('AddMedicDateComponent', () => {
  let component: AddMedicDateComponent;
  let fixture: ComponentFixture<AddMedicDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
