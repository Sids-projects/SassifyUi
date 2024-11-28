import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiCompsComponent } from './ui-comps.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: 'UiCompsRouting',
    component: UiCompsComponent,
    children: [
      { path: 'Accordion-Route', component: AccordionComponent },
      { path: 'Button-Route', component: ButtonComponent },
      { path: 'Card-Route', component: CardComponent },
      { path: 'Dropdown-Route', component: DropdownComponent },
      { path: 'Inputs-Route', component: InputsComponent },
      { path: 'MenuBar-Route', component: MenubarComponent },
      { path: 'Nav-Route', component: NavComponent },
      { path: 'Table-Route', component: TableComponent },
      { path: 'Tabs-Route', component: TabsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiCompsRoutingModule {}
