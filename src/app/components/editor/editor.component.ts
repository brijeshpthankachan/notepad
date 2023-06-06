import { CommonModule } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'

@Component({
	selector: 'app-editor',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule],
	templateUrl: './editor.component.html'
})
export class EditorComponent {
	noteContent  : string
	noteTitle: string
	date = new Date()

	constructor(
		private readonly noteService: NoteService,
		@Inject(MAT_DIALOG_DATA) public data: { note: INote; editedNote: INote }
	) {}

	ngOnInit(): void {
		if (this.data.note != null) {
			this.noteContent = this.data.note.content
			this.noteTitle = this.data.note.title
		}
		setInterval(() => {
			this.date = new Date()
		}, 1000)
	}

	saveNote() {
		const newNote: INote = {
			content: this.noteContent.trim(),
			id: this.data.note.id != 0 ? this.data.note.id : Date.now(),
			title: !this.noteTitle
				? this.noteContent.split(' ').slice(0, 2).join(' ').trim()
				: this.noteTitle,
			writtenOn: new Date(),
			isDeleted: false
		}
		if (newNote.content) {
			this.noteService.addNote(newNote)
		}
	}

	pasteNote() {
		if (this.data.editedNote != null) {
			this.noteContent = this.data.editedNote.content
			this.noteTitle = this.data.editedNote.title
		}
	}
}
