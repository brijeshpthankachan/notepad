import { Directive, ElementRef, HostListener, OnInit } from '@angular/core'

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
	constructor(private el: ElementRef) { }
	color: string
	colors = ['#FEFAE0', '#E9EDC9', '#FAEDCD', '#DBE4C6', '#F1DEC9', '#EEEEEE']

	getRandomInteger(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	ngOnInit(): void {
		const randomNum: number = this.getRandomInteger(0, 5)
		this.color = this.colors[randomNum]
		this.highlight(this.color)
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('#F9F5EB')
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(this.color)
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color
	}

}

