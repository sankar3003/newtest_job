import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreegridComponent } from './components/treegrid/treegrid.component';

const routes: Routes = [
  {
path:"",
redirectTo:"treegrid",
pathMatch:"full"
  },
  {
    path:'treegrid',
    component:TreegridComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
