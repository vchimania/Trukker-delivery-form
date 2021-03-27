import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDeliveryComponent } from './item-delivery/item-delivery.component';

const routes: Routes = [
{ path: '', redirectTo: '/item-delivery', pathMatch: 'full' },
{ path: 'item-delivery', component: ItemDeliveryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
