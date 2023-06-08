import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { Observable } from 'rxjs'
import { DateSortPipe } from 'src/app/Pipe/datesort'
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
	$notes: Observable<INote[]>
	sortedNotes$: Observable<INote[]>

	constructor(
		private readonly noteService: NoteService,
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
		this.sortedNotes$ = new DateSortPipe().transform(this.noteService.getNotes())
	}

	/**
   * Opens a dialog to edit a note.
   * @param {INote} newNote - The note to be edited.
   */
	openDialog(newNote: INote) {
		this.dialog.open(EditorComponent, { data: { note: newNote } })
	}

	/**
   * Deletes a note from the note service.
   * @param {INote} note - The note to be deleted.
   */
	delete(note: INote) {
		this.noteService.deleteNote(note.id)
	}
}
