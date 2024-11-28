import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Modules
import { UiCompsModule } from './ui-comps/ui-comps.module';
import { UiCompsRoutingModule } from './ui-comps/uicomps-routing.module';
import { TemplateSetModule } from './template-set/template-set.module';
import { TempsetRoutingModule } from './template-set/temp-routing.module';
import { CustomizerModule } from './customizer/customizer.module';
import { CustomizerRoutingModule } from './customizer/customizer.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Modules
    UiCompsModule,
    UiCompsRoutingModule,
    TemplateSetModule,
    TempsetRoutingModule,
    CustomizerModule,
    CustomizerRoutingModule,

    // Material
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    DragDropModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
