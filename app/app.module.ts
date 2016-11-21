import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent
    ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}