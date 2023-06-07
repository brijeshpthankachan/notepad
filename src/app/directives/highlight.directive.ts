import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	constructor(private el: ElementRef) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('rgb(153 243 150)')
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('rgb(153 243 178)')
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color
	}
}
