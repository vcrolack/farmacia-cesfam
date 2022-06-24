import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsSectionComponent } from './prescriptions-section.component';

describe('PrescriptionsSectionComponent', () => {
  let component: PrescriptionsSectionComponent;
  let fixture: ComponentFixture<PrescriptionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
