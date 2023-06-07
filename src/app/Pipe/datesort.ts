import { Pipe, PipeTransform } from '@angular/core'
import { INote } from 'src/models/note'

@Pipe({
	name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
	transform(notes: INote[]): INote[] {
		return notes.sort((b, a) => a.writtenOn.getTime() - b.writtenOn.getTime())
	}
}
