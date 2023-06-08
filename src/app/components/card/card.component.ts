import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { INote } from '../../../models/note'
import { CoreModule } from '../../core/core.module'

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, CoreModule],
	templateUrl: './card.component.html'
})
export class CardComponent {
	@Input() note: INote
	@Output() deleteNoteEmitter: EventEmitter<INote> = new EventEmitter<INote>()
	@Output() editNoteEventEmitter: EventEmitter<INote> = new EventEmitter<INote>()

	deleteNote(noteInstance: INote): void {
		this.deleteNoteEmitter.emit(noteInstance)
	}

	editNote(noteInstance: INote): void {
		this.editNoteEventEmitter.emit(noteInstance)
	}
}
