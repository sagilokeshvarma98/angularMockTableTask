import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { EmployeeModule } from './employee/employee.module';
import { HttprequestInterceptor } from './core/interceptors/httprequest.interceptor';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    EmployeeModule,
    CoreModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttprequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
