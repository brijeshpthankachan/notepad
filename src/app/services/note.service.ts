import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { INote } from 'src/models/note'
import { note } from '../data/Notes'

@Injectable({
	providedIn: 'root'
})
export class NoteService {
	delete(id: number) {
		const index = note.findIndex((x) => x.id === id)
		note[index].isDeleted = true
	}
	copiedNote: INote = null

	getNotes(): Observable<INote[]> {
		return of(note.filter((x) => x.isDeleted === false))
	}

	addNote(newNote: INote) {
		const index = note.findIndex((x) => x.id === newNote.id)
		if (index >= 0) {
			note[index].title = newNote.title
			note[index].content = newNote.content
		} else {
			note.push(newNote)
		}
	}

	copyNotes(note: INote) {
		this.copiedNote = note
	}

	pasteNote() {
		return this.copiedNote
	}
}
