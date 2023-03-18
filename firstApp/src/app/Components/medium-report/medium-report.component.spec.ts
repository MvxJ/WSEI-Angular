import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumReportComponent } from './medium-report.component';

describe('MediumReportComponent', () => {
  let component: MediumReportComponent;
  let fixture: ComponentFixture<MediumReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
