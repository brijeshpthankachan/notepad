import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	constructor(private el: ElementRef) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('rgba(18, 237, 75, 0.9)')
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('')
		this.highlight('rgba(18, 237, 84, 0.636)')
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color
	}
}
