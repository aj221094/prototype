import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataDisplayComponent } from './dashboard/data-display/data-display.component';
import { JsonViewerComponent } from './dashboard/json-viewer/json-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataDisplayComponent,
    JsonViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
