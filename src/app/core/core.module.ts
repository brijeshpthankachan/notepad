import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { DateSortPipe } from '../Pipe/datesort'
import { CutDirective } from '../directives/cut.directive'
import { HighlightDirective } from '../directives/highlight.directive'
import { CopyDirective } from '../directives/copy.directive'
import { PasteDirective } from '../directives/paste.directive'

@NgModule({
	declarations: [HighlightDirective, DateSortPipe, CutDirective, CopyDirective, PasteDirective],
	imports: [CommonModule],
	exports: [HighlightDirective, DateSortPipe, CutDirective, CopyDirective, PasteDirective]
})
export class CoreModule { }
