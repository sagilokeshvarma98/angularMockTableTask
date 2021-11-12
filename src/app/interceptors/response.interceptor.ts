import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
  
    const reqClone = req.clone({setHeaders: {'x-test-req': 'req-test-header'}}); 
 
    return next.handle(reqClone) 
      .pipe(
        map((event:any) => { 
          if (event instanceof HttpResponse) { 
            event = event.clone({ 
              headers: event.headers.set('x-test-res', 'res-test-header') 
            }); 
          } 
          return event; 
        })
      )
  } 
}







// intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
//   const head:HttpHeaders = new HttpHeaders()
//   .append("test" , "tester")

  // return next.handle(request)
  //   .pipe(
  //     tap(
  //       res => {
  //         if (res instanceof HttpResponse) {
  //           console.log(res);
  //           res.clone({
  //             headers: head
  //           })
  //           return res.body;
  //         }
  //         return res
  //       }
  //     )
      // tap(
      //   event => {
      //     if(event instanceof HttpResponse)
      //     event = event.clone({ headers: event.headers.set('endTime', "endTimmer") });
      //   }
      // )
//     )
// }