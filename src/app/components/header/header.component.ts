import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NoteService } from 'src/app/services/note.service'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(public dialog: MatDialog, private readonly noteService: NoteService) { }

	openDialog() {
		const x = this.dialog.open(EditorComponent, { data: null })
		x.afterClosed().subscribe(() => this.noteService.emitEvent(true))
	}
}
