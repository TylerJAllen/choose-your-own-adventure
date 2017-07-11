import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ChapterDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
