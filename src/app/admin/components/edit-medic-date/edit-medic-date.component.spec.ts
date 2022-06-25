import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicDateComponent } from './edit-medic-date.component';

describe('EditMedicDateComponent', () => {
  let component: EditMedicDateComponent;
  let fixture: ComponentFixture<EditMedicDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
