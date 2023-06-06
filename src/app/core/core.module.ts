import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'
import { HighlightDirective } from '../directives/highlight.directive'

@NgModule({
	declarations: [DateRangeFilterPipe,HighlightDirective],

	imports: [CommonModule],
	exports: [DateRangeFilterPipe,HighlightDirective]
})
export class CoreModule {}
