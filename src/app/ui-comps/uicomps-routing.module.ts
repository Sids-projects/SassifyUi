import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiCompsComponent } from './ui-comps.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: 'UiCompsRouting',
    component: UiCompsComponent,
    children: [
      { path: 'Button-Route', component: ButtonComponent },
      { path: 'Card-Route', component: CardComponent },
      { path: 'Dropdown-Route', component: DropdownComponent },
      { path: 'Inputs-Route', component: InputsComponent },
      { path: 'Table-Route', component: TableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiCompsRoutingModule {}
