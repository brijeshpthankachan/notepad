import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
	selector: '[appCut]'
})

export class CutDirective {
	constructor(private readonly el: ElementRef) { }

	@HostListener('click')
	cut() {
		const selection = document.getSelection()
		navigator.clipboard.writeText(selection.toString())
		selection.deleteFromDocument()
	}

}
