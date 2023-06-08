import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'
import { DateSortPipe } from '../Pipe/datesort'
import { CutDirective } from '../directives/cut.directive'
import { HighlightDirective } from '../directives/highlight.directive'
import { PasteDirective } from '../directives/paste.directive'

@NgModule({
	declarations: [DateRangeFilterPipe, HighlightDirective, DateSortPipe, CutDirective, PasteDirective],
	imports: [CommonModule],
	exports: [DateRangeFilterPipe, HighlightDirective, DateSortPipe, CutDirective, PasteDirective]
})
export class CoreModule { }
