import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { NoteService } from 'src/app/services/note.service'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html'
})

export class HeaderComponent {
	/**
	 * @param {MatDialog} dialog - The MatDialog service used for opening dialogs.
	 * @param {NoteService} noteService - An instance of the NoteService.
	 */
	constructor(public dialog: MatDialog, private readonly noteService: NoteService) { }

	/**
	 * Opens a dialog and performs some actions when it is closed.
	 */
	openDialog() {
		/**
		 * The MatDialogRef representing the opened dialog.
		 * @type {MatDialogRef<EditorComponent>}
		 */
		const dialog: MatDialogRef<EditorComponent> = this.dialog.open(EditorComponent, { data: null })

		/**
		 * Subscribes to the afterClosed event of the dialog.
		 * This callback is executed when the dialog is closed.
		 */
		dialog.afterClosed().subscribe(() => this.noteService.refresh())
	}
}
