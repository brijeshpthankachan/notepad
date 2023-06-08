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
	noteContent: string
	noteTitle: string

	constructor(private readonly noteService: NoteService, @Inject(MAT_DIALOG_DATA) public data: { note: INote }) { }

	ngOnInit(): void {
		if (this.data) {
			this.noteContent = this.data.note.content
			this.noteTitle = this.data.note.title
		}
	}

	saveNote() {
		const newNote: INote = {
			content: this.noteContent.trim(),
			id: this.data.note.id != 0 ? this.data.note.id : Date.now(),
			title: this.noteTitle,
			writtenOn: new Date()
		}
		if (newNote.content) {
			this.noteService.addNote(newNote)
		}
	}
}
