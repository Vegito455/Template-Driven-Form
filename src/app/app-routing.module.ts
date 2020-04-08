import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestformComponent } from './testform/testform.component';

const routes: Routes = [
  {path : '', redirectTo : 'testform',pathMatch:'full' },
  {path : 'testform', component:TestformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
