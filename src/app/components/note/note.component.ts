import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { Observable } from 'rxjs'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'
import { CoreModule } from '../../core/core.module'
import { CardComponent } from '../card/card.component'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-note',
	standalone: true,
	templateUrl: './note.component.html',
	imports: [
		CommonModule,
		MatTabsModule,
		CoreModule,
		CardComponent,
		EditorComponent
	]
})
export class NoteComponent implements OnInit {
	notes: Observable<INote[]>

	constructor(
		private readonly noteService: NoteService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.getNotes()
	}

	openDialog(newNote: INote) {
		console.log(newNote)

		this.dialog.open(EditorComponent, { data: { note: newNote } })
	}

	getNotes() {
		this.notes = this.noteService.getNotes()
	}

	// edit(note: INote) {
	// 	this.openDialog(note)
	// 	console.log(note)

	// }

	delete(note: INote) {
		this.noteService.delete(note.id)
		this.getNotes()
	}
}
