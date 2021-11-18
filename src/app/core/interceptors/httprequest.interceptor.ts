  import { Injectable } from '@angular/core';
  import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
  } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable()
  export class HttprequestInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {   

      const header: HttpHeaders = new HttpHeaders()
      .append('Authorization','Bearer h56hguguhg56gg5gg4g6hghgug6ggug46gh')
      .append('token','token')

      // headers.append('Authorization','Bearer h56hguguhg56gg5gg4g6hghgug6ggug46gh');
      // headers.append('token','token')
      // request.headers.set('content-type','application/json');
      // request.headers.set('Authorization','Bearer h56hguguhg56gg5gg4g6hghgug6ggug46gh');
      // request.headers.set('Access-Control-Allow-Origin', '*');

      const reqHead = request.clone({        
        headers: header
      }); return next.handle(reqHead)
      // .pipe(tap(event=>{
      //   if(event.type === HttpEventType.Response) {
      //    console.log("Its response",event);
      //  }
      //  })) 
      
    }
  }
