import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { INote } from '../../../models/note'
import { CoreModule } from '../../core/core.module'

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, CoreModule],
	templateUrl: './card.component.html'
})
export class CardComponent {
	/**
	  * Input property for receiving a note object.
	  */
	@Input() note: INote

	/**
	 * Output event emitter for deleting a note.
	 */
	@Output() deleteNoteEmitter = new EventEmitter<INote>()

	/**
	 * Output event emitter for editing a note.
	 */
	@Output() editNoteEventEmitter = new EventEmitter<INote>()

	/**
		* Deletes a note by emitting the note instance.
		* @param {INote} noteInstance - The note to be deleted.
		* @emits deleteNoteEmitter
		*/
	deleteNote(noteInstance: INote) {
		this.deleteNoteEmitter.emit(noteInstance)
	}

	/**
		* Edits a note by emitting the note instance.
		* @param {INote} noteInstance - The note to be edited.
		* @emits editNoteEventEmitter
		*/
	editNote(noteInstance: INote) {
		this.editNoteEventEmitter.emit(noteInstance)
	}
}
