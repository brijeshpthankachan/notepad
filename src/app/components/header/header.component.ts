import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'
import { INote } from 'src/models/note'
import { EditorComponent } from '../editor/editor.component'
import { copiedNote } from 'src/app/data/Notes'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, MatButtonModule],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(public dialog: MatDialog) {}
	note: INote = {
		id: 0,
		title: '',
		content: '',
		writtenOn: undefined,
		isDeleted: false
	}

	openDialog() {
		this.dialog.open(EditorComponent, {
			data: { note: this.note , editedNote : copiedNote }
		})
	}
}
