import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SharedComponentComponent } from './Components/shared-component/shared-component.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shared',component:SharedComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
