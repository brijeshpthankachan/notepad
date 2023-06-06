import { CommonModule } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { note } from 'src/app/data/Notes'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'

@Component({
	selector: 'app-editor',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule],
	templateUrl: './editor.component.html'
})
export class EditorComponent {
	note = ''
	editedNote = ''
	title: string

	constructor(
		private readonly noteService: NoteService,
		@Inject(MAT_DIALOG_DATA) public data: { note: INote; editedNote: INote }
	) {}

	ngOnInit(): void {
		if (this.data.note != null) {
			this.note = this.data.note.content
			this.title = this.data.note.title
		}
	}

	saveNote() {
		const newNote: INote = {
			content: this.note.trim(),
			id: this.data.note.id!=0 ? this.data.note.id : Date.now(),
			title: (this.title ?? this.note.split(' ').slice(0, 2).join(' ')).trim(),
			writtenOn: new Date(),
			isDeleted: false
		}
		console.log(newNote)

		if (newNote.content) {
			this.noteService.addNote(newNote)
			console.log(note)
		}
	}

	pasteNote() {
		console.log(this.data.editedNote)
		if (this.data.editedNote != null) {
			this.note = this.data.editedNote.content
			this.title = this.data.editedNote.title
		}
	}
}
