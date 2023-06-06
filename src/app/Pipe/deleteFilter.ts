import { Pipe, PipeTransform } from '@angular/core'
import { INote } from 'src/models/note'

@Pipe({
	name: 'deleteFilter'
})
export class DeleteFilterPipe implements PipeTransform {
	transform(notes: INote[]): INote[] {
		const filteredNotes = notes.filter((x) => x.isDeleted === false)
		return filteredNotes
	}
}
