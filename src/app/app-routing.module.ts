import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkErrorComponent } from './core/network-error/network-error.component';

const routes: Routes = [{path: "networkError",component: NetworkErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
