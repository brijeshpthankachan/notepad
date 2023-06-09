import { CommonModule } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { CoreModule } from 'src/app/core/core.module'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'

@Component({
	selector: 'app-editor',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule, CoreModule],
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

	/**
	* Saves a note by adding it to the note service.
	*/
	saveNote() {
		/**
	   * @typedef {Object} INote - Interface for a note.
	   * @property {string} content - The content of the note.
	   * @property {number} id - The unique identifier of the note.
	   * @property {string} title - The title of the note.
	   * @property {Date} writtenOn - The date the note was written on.
	   */

		/**
	 * Represents a new note to be saved.
	 * @type {INote}
	 */
		const newNote: INote = {
			content: this.noteContent.trim(),
			id: this.data?.note?.id || Date.now(),
			title: this.noteTitle,
			writtenOn: new Date()
		}

		if (newNote.content) {
			/**
			 * Adds a note to the note service.
			 * @param {INote} note - The note to be added.
			 */
			this.noteService.addOrUpdateNote(newNote)
		}
	}

}
