import { Pipe, PipeTransform } from '@angular/core'
import { INote } from 'src/models/note'

@Pipe({
	name: 'dateRangeFilter'
})
export class DateRangeFilterPipe implements PipeTransform {
	transform(notes: INote[], startDate: number, endDate: number): INote[] {
		return notes.filter(
			(x) =>
				startDate <= x.writtenOn.getTime() && x.writtenOn.getTime() <= endDate
		)
	}
}
