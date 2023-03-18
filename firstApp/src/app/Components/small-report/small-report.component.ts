import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-report',
  templateUrl: './small-report.component.html',
  styleUrls: ['./small-report.component.scss']
})
export class SmallReportComponent {
  @Input() value = '';
  @Input() label = '';
  @Input() color = '';
  @Input() icon = '';
}
