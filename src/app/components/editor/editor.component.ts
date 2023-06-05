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
	note = ''
	title: string

	constructor(
		private readonly noteService: NoteService,
		@Inject(MAT_DIALOG_DATA) public data: { note: INote }
	) {}

	ngOnInit(): void {
		if (this.data.note != null) {
			this.note = this.data.note.content
		}
	}

	saveNote() {
		const note: INote = {
			content: this.note.trim(),
			id: this.data != null ? this.data.note.id : Date.now(),
			title: (this.title ?? this.note.split(' ').slice(0, 2).join(' '))
				.trim()
				.toLowerCase(),
			writtenOn: new Date()
		}
		console.log(note)

		if (note.content) {
			this.noteService.addNote(note)
		}
	}
}
