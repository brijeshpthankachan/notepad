import { Pipe, PipeTransform } from '@angular/core'
import { Observable, map } from 'rxjs'
import { INote } from 'src/models/note'

@Pipe({
	name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
	transform(notes$: Observable<INote[]>): Observable<INote[]> {
		return notes$.pipe(
			map(notes => notes.sort((a, b) => b.writtenOn.getTime() - a.writtenOn.getTime()))
		)
	}
}