import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
	selector: 'app-note',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './note.component.html'
})
export class NoteComponent {
	notes = ['note1', 'note2', 'note3']
}
