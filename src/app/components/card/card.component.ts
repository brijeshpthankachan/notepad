import {Component, EventEmitter, Input, Output} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CoreModule} from '../../core/core.module'
import {INote} from '../../../models/note'

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, CoreModule],
	templateUrl: './card.component.html'
})
export class CardComponent {

	@Input() note: INote
	@Output() copyNoteEmitter: EventEmitter<INote> = new EventEmitter<INote>()
	@Output() cutNoteEmitter: EventEmitter<INote> = new EventEmitter<INote>()
	@Output() deleteNoteEmitter: EventEmitter<INote> = new EventEmitter<INote>()
	@Output() editNoteEventEmitter: EventEmitter<INote> = new EventEmitter<INote>()

	copyNote(noteInstance: INote): void {
		this.copyNoteEmitter.emit(noteInstance)
	}

	cutNote(noteInstance: INote): void {
		this.cutNoteEmitter.emit(noteInstance)
	}

	deleteNote(noteInstance: INote): void {
		this.deleteNoteEmitter.emit(noteInstance)
	}

	editNote(noteInstance: INote): void {
		this.editNoteEventEmitter.emit(noteInstance)
	}
}
