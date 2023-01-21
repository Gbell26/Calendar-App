import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { DayComponentComponent } from './day-component/day-component.component';
import { Service } from './data-service';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponentComponent,
    DayComponentComponent,
    SidebarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
