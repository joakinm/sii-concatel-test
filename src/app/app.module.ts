import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FizzbuzzTestComponent } from './fizzbuzz-test/fizzbuzz-test.component';
import { FormsModule } from '@angular/forms';
import { NasaTestComponent } from './nasa-test/nasa-test.component';
import { EmpireTestComponent } from './empire-test/empire-test.component';
import { TestSelectorComponent } from './test-selector/test-selector.component';
import { HeaderComponent } from './header/header.component';
import { NasaLaunchPipe } from './nasa-test/nasa-launch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzTestComponent,
    NasaTestComponent,
    EmpireTestComponent,
    TestSelectorComponent,
    HeaderComponent,
    NasaLaunchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
