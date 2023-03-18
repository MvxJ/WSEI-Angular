import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { CardComponent } from './Components/card/card.component';
import { SmallReportComponent } from './Components/small-report/small-report.component';
import { MediumReportComponent } from './Components/medium-report/medium-report.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    CardComponent,
    SmallReportComponent,
    MediumReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
