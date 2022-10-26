import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcosComponent } from './barcos/barcos.component';
import { BarcosDetailsComponent } from './barcos-details/barcos-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'barcos', pathMatch: 'full' },
  { path: 'detail/:id', component: BarcosDetailsComponent },
  { path: 'barcos', component: BarcosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
