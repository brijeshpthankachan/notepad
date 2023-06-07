import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'
import { DateSortPipe } from '../Pipe/datesort'
import { HighlightDirective } from '../directives/highlight.directive'

@NgModule({
	declarations: [DateRangeFilterPipe, HighlightDirective, DateSortPipe],
	imports: [CommonModule],
	exports: [DateRangeFilterPipe, HighlightDirective, DateSortPipe]
})
export class CoreModule {}
