import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './customDirectives/basicHighlightDirective/basic-highlight.directive';
import { DropdownDirective } from './customDirectives/dropdown.directive';
import { SampleObservableComponent } from './observables/sample-observable.component';
import { SampleOperatorComponent } from './rxjsOperators/rxjs-operators.component';
import { SamplePipeComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    DropdownDirective,
    SampleObservableComponent,
    SampleOperatorComponent,
    SamplePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
