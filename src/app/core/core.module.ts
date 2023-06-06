import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateRangeFilterPipe } from '../Pipe/dateRangeFilter'

@NgModule({
	declarations: [DateRangeFilterPipe],

	imports: [CommonModule],
	exports: [DateRangeFilterPipe]
})
export class CoreModule {}
