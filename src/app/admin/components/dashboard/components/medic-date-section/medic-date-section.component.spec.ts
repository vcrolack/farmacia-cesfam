import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicDateSectionComponent } from './medic-date-section.component';

describe('MedicDateSectionComponent', () => {
  let component: MedicDateSectionComponent;
  let fixture: ComponentFixture<MedicDateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicDateSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicDateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
