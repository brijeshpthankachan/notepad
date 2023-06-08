import { Directive, ElementRef, HostListener, OnInit } from '@angular/core'

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
	constructor(private el: ElementRef) { }
	color: string
	colors = ['#F7E6C4', '#F5EFE7', '#FFE7CE', '#FCE9F1', '#ECF8F9', '#F8E8EE', '#E3F4F4', '#E6FFFD', '#F9FBE7', '#E8F6EF']

	getRandomInteger(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	ngOnInit(): void {
		const randomNum: number = this.getRandomInteger(0, 9)
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

