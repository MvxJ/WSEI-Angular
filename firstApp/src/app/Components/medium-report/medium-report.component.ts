import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-report',
  templateUrl: './medium-report.component.html',
  styleUrls: ['./medium-report.component.scss']
})
export class MediumReportComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() prevValue = '';
}
