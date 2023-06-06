import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { EditorComponent } from '../editor/editor.component'
import { HeaderComponent } from '../header/header.component'
import { NoteComponent } from '../note/note.component'

@Component({
	selector: 'app-home-component',
	standalone: true,
	templateUrl: './home.component.html',
	imports: [
		CommonModule,
		HeaderComponent,
		NoteComponent,
		EditorComponent,
		MatDialogModule
	]
})
export class HomeComponent {}
