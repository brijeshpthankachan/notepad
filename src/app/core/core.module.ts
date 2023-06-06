import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'
import { DeleteFilterPipe } from '../Pipe/deleteFilter'

@NgModule({
	declarations: [DateRangeFilterPipe, DeleteFilterPipe],

	imports: [CommonModule],
	exports: [DateRangeFilterPipe, DeleteFilterPipe]
})
export class CoreModule {}
