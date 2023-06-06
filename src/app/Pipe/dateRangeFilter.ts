import { Pipe, PipeTransform } from '@angular/core'
import { INote } from 'src/models/note'

@Pipe({
	name: 'dateRangeFilter'
})
export class DateRangeFilterPipe implements PipeTransform {
	transform(notes: INote[], startDate: number, endDate: number): INote[] {
		const filteredNotes = notes.filter(
			(x) =>
				startDate <= x.writtenOn.getTime() && x.writtenOn.getTime() <= endDate
		)

		return filteredNotes.sort(
			(a, b) => a.writtenOn.getTime() - b.writtenOn.getTime()
		)
	}
}
