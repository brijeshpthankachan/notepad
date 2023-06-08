import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'
import { DateSortPipe } from '../Pipe/datesort'
import { CutDirective } from '../directives/cut.directive'
import { HighlightDirective } from '../directives/highlight.directive'

@NgModule({
	declarations: [DateRangeFilterPipe, HighlightDirective, DateSortPipe, CutDirective],
	imports: [CommonModule],
	exports: [DateRangeFilterPipe, HighlightDirective, DateSortPipe, CutDirective]
})
export class CoreModule { }
