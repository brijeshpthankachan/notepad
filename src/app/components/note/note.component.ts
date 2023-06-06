import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { Observable } from 'rxjs'
import { copiedNote } from 'src/app/data/Notes'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'
import { CoreModule } from '../../core/core.module'
import { EditorComponent } from '../editor/editor.component'
import {CardComponent} from '../card/card.component'

@Component({
	selector: 'app-note',
	standalone: true,
	templateUrl: './note.component.html',
	imports: [CommonModule, MatTabsModule, CoreModule, CardComponent]
})
export class NoteComponent implements OnInit {
	notes: Observable<INote[]>
	startDate = new Date().setHours(0, 0, 0, 0)
	endDate = new Date().setHours(23, 59, 59)
	emptyNote: INote = {
		id: 0,
		title: '',
		content: '',
		writtenOn: null,
		isDeleted: false
	}
	monthStartDate = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		1
	).setHours(0, 0, 0, 0)
	monthEndDate = new Date(
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		0
	).setHours(23, 59, 59, 999)

	startOfWeek = new Date().setHours(0, 0, 0, 0) - new Date().getDay() * 86400000

	endOfWeek = new Date(
		new Date(this.startOfWeek).setDate(new Date(this.startOfWeek).getDate() + 7)
	).setHours(23, 59, 59, 999)

	constructor(
		private readonly noteService: NoteService,
		public dialog: MatDialog
	) {}

	openDialog(note: INote) {
		const dialogRef = this.dialog.open(EditorComponent, {
			data: { note: note, editedNote: copiedNote }
		})

		dialogRef.afterClosed().subscribe(() => this.getNotes())
	}

	getNotes() {
		this.notes = this.noteService.getNotes()
	}

	ngOnInit(): void {
		this.getNotes()
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
		alert('Note Copied!')
	}

	cut(note: INote) {
		copiedNote.title = note.title
		copiedNote.content = note.content
		this.delete(note)
	}
}
