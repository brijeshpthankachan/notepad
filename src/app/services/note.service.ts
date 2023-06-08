import { EventEmitter, Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { INote } from 'src/models/note'
import { note } from '../data/Notes'

@Injectable({
	providedIn: 'root'
})
export class NoteService {

	public myEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

	public emitEvent(data: boolean): void {
		this.myEventEmitter.emit(data)
	}

	/**
	 * Deletes a note by ID.
	 * @param {number} id - The ID of the note to be deleted.
	 */
	deleteNote(id: number) {
		const index = note.findIndex((x) => x.id === id)
		if (index !== -1) {
			note.splice(index, 1)
		}
	}

	/**
   * Retrieves all notes.
   * @returns {Observable<INote[]>} - An observable emitting the array of notes.
   */
	getNotes(): Observable<INote[]> {
		return of(note)
	}

	/**
   * Adds or updates a note.
   * @param {INote} newNote - The note to be added or updated.
   */
	addOrUpdateNote(newNote: INote) {
		const index = note.findIndex((x) => x.id === newNote.id)
		if (index !== -1) {
			note[index].title = newNote.title
			note[index].content = newNote.content
		} else {
			note.push(newNote)
		}
	}
}
