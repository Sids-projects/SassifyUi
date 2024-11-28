import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Material
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
// Components
import { CustomizerComponent } from './customizer.component';
import { CusHomeComponent } from './components/cus-home/cus-home.component';
import { CusAppComponent } from './components/cus-app/cus-app.component';

@NgModule({
  declarations: [CustomizerComponent, CusHomeComponent, CusAppComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    DragDropModule,
  ],
})
export class CustomizerModule {}
