import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateSortPipe } from '../Pipe/datesort'
import { CutDirective } from '../directives/cut.directive'
import { HighlightDirective } from '../directives/highlight.directive'
import { PasteDirective } from '../directives/paste.directive'

@NgModule({
	declarations: [HighlightDirective, DateSortPipe, CutDirective, PasteDirective],
	imports: [CommonModule],
	exports: [HighlightDirective, DateSortPipe, CutDirective, PasteDirective]
})
export class CoreModule { }
