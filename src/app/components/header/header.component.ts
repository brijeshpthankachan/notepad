import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, MatButtonModule],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(public dialog: MatDialog) {}

	openDialog() {
		this.dialog.open(EditorComponent)
	}
}
