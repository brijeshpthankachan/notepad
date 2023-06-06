import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'
import { DeleteFilterPipe } from '../Pipe/deleteFilter'
import { HighlightDirective } from '../directives/highlight.directive'

@NgModule({
	declarations: [
		DateRangeFilterPipe,
		DeleteFilterPipe,
		HighlightDirective,
		DeleteFilterPipe
	],

	imports: [CommonModule],
	exports: [DateRangeFilterPipe, DeleteFilterPipe]
})
export class CoreModule {}
