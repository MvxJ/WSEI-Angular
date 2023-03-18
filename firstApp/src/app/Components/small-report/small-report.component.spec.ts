import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallReportComponent } from './small-report.component';

describe('SmallReportComponent', () => {
  let component: SmallReportComponent;
  let fixture: ComponentFixture<SmallReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
