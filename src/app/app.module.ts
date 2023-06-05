import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponentComponent } from './components/home-component/home-component.component'

@NgModule({
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeComponentComponent,
		BrowserAnimationsModule
	]
})
export class AppModule {}
