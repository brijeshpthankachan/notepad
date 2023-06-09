import { Directive, ElementRef, HostListener, OnInit } from '@angular/core'

@Directive({
	selector: '[appHighlight]',
	standalone: true
})
export class HighlightDirective implements OnInit {
	constructor(private el: ElementRef) { }
	color: string
	colors = ['#F7E6C4', '#F5EFE7', '#FFE7CE', '#FCE9F1', '#ECF8F9', '#F8E8EE', '#E3F4F4', '#E6FFFD', '#F9FBE7', '#E8F6EF']

	/**
		* Generates a random integer between the specified minimum and maximum values (inclusive).
		* @param {number} min - The minimum value.
		* @param {number} max - The maximum value.
		* @returns {number} The random integer generated.
		*/
	getRandomInteger(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	ngOnInit(): void {
		const randomNum: number = this.getRandomInteger(0, 9)
		this.color = this.colors[randomNum]
		this.highlight(this.color)
	}

	/**
		* Event listener for the 'mouseenter' event.
		* Highlights the element with a predefined color when the mouse enters the element.
		*/
	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('#F9F5EB')
	}

	/**
		* Event listener for the 'mouseleave' event.
		* Restores the original color of the element when the mouse leaves the element.
		*/
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(this.color)
	}

	/**
		* Applies the specified color as the background color of the host element.
		* @param {string} color - The color to be applied.
		*/
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color
	}

}

