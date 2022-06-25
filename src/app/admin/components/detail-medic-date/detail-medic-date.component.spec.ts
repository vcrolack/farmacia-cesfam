import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedicDateComponent } from './detail-medic-date.component';

describe('DetailMedicDateComponent', () => {
  let component: DetailMedicDateComponent;
  let fixture: ComponentFixture<DetailMedicDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMedicDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMedicDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
