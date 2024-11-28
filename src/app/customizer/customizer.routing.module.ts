import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizerComponent } from './customizer.component';
import { CusHomeComponent } from './components/cus-home/cus-home.component';
import { CusAppComponent } from './components/cus-app/cus-app.component';

const routes: Routes = [
  {
    path: 'CustomizerRouting',
    component: CustomizerComponent,
    children: [
      { path: '', redirectTo: 'CusHome-Route', pathMatch: 'full' },
      { path: 'CusHome-Route', component: CusHomeComponent },
      { path: 'CusApp-Route', component: CusAppComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomizerRoutingModule {}
