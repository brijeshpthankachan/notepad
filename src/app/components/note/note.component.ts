import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { Observable } from 'rxjs'
import { NoteService } from 'src/app/services/note.service'
import { INote } from 'src/models/note'
import { CoreModule } from '../../core/core.module'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-note',
	standalone: true,
	templateUrl: './note.component.html',
	imports: [CommonModule, MatTabsModule, CoreModule]
})
export class NoteComponent implements OnInit {
	notes: Observable<INote[]>
	startDate = new Date().setHours(0, 0, 0, 0)
	endDate = new Date().setHours(23, 59, 59)
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
		this.dialog.open(EditorComponent, {
			data: { note: note }
		})
	}
	ngOnInit(): void {
		this.notes = this.noteService.getNotes()
		console.log(new Date(this.startDate))
		console.log(new Date(this.endDate))

		console.log(new Date(this.startOfWeek))
		console.log(new Date(this.endOfWeek))
		console.log(new Date(this.monthStartDate))
		console.log(new Date(this.monthEndDate))
	}

	edit(note: INote) {
		this.openDialog(note)
	}

	delete(note: INote) {
		this.noteService.delete(note.id)
	}
}
