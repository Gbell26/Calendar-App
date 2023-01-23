import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { DayComponentComponent } from './day-component/day-component.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import { AddEventPopupComponent } from './add-event-popup/add-event-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponentComponent,
    DayComponentComponent,
    SidebarComponentComponent,
    AddEventPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
