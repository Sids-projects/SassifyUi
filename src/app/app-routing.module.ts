import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './screens/components/components.component';
import { TemplatesComponent } from './screens/templates/templates.component';

const routes: Routes = [
  { path: 'Component', component: ComponentsComponent },
  { path: 'Templates', component: TemplatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
