import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material
import { MatIconModule } from '@angular/material/icon';

// Modules
import { UiCompsModule } from './ui-comps/ui-comps.module';
import { UiCompsRoutingModule } from './ui-comps/uicomps-routing.module';
import { TemplateSetModule } from './template-set/template-set.module';
import { TempsetRoutingModule } from './template-set/temp-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,

    // Modules
    UiCompsModule,
    UiCompsRoutingModule,
    TemplateSetModule,
    TempsetRoutingModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
