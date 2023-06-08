import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { EditorComponent } from '../editor/editor.component'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(public dialog: MatDialog) { }
	openDialog() { this.dialog.open(EditorComponent, { data: null }) }
}
