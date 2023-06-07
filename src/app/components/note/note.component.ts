import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { Observable } from 'rxjs'
import { DateConfig } from 'src/app/configs/dateconfig'
import { copiedNote } from 'src/app/data/Notes'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'
import { CoreModule } from '../../core/core.module'
import { CardComponent } from '../card/card.component'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-note',
	standalone: true,
	templateUrl: './note.component.html',
	imports: [CommonModule, MatTabsModule, CoreModule, CardComponent]
})
export class NoteComponent implements OnInit {
	notes: Observable<INote[]>
	emptyNote: INote = {
		id: 0,
		title: '',
		content: '',
		writtenOn: null,
		isDeleted: false
	}

	constructor(
		private readonly noteService: NoteService,
		public dialog: MatDialog,
		public readonly dateConfig: DateConfig
	) {}

	ngOnInit(): void {
		this.getNotes()
	}

	openDialog(note: INote) {
		const dialogRef = this.dialog.open(EditorComponent, {
			data: { note: note, editedNote: copiedNote }
		})

		dialogRef.afterClosed().subscribe(() => this.getNotes())
	}

	getNotes() {
		this.notes = this.noteService.getNotes()
	}

	edit(note: INote) {
		this.openDialog(note)
	}

	delete(note: INote) {
		this.noteService.delete(note.id)
		this.getNotes()
	}

	copy(note: INote) {
		copiedNote.title = note.title
		copiedNote.content = note.content
	}

	cut(note: INote) {
		this.copy(note)
		this.delete(note)
	}
}
