import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './section.components/home/home.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
    	BrowserModule,
    	AppRoutingModule,
		HttpClientModule,
		ServicesModule,
		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
