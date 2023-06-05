import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'

@Component({
	selector: 'app-editor',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule],
	templateUrl: './editor.component.html'
})
export class EditorComponent {
	value: string
}
