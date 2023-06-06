import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'
import { EditorComponent } from '../editor/editor.component'
import { copiedNote } from 'src/app/data/Notes'

@Component({
	selector: 'app-note',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit {
	notes: Observable<INote[]>
	

	constructor(
		private readonly noteService: NoteService,
		public dialog: MatDialog,
	) { }


	openDialog(note: INote) {
		this.dialog.open(EditorComponent, {
			data: { note: note, editedNote: copiedNote },
		})
	}
	ngOnInit(): void {
		this.notes = this.noteService.getNotes()
	}

	edit(note: INote) {
		this.openDialog(note)
	}

	copy(note: INote) {
		copiedNote.title = note.title
		copiedNote.content = note.content
		console.log(copiedNote)
	}
}	
