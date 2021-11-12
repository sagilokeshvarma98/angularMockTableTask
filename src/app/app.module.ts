import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { EmployeeModule } from './employee/employee.module';
import { HttprequestInterceptor } from './interceptors/httprequest.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    EmployeeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: HttprequestInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS,useClass: ResponseInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
