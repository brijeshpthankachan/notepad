import { Directive, HostListener } from '@angular/core'

@Directive({
	selector: '[appCopy]'
})
export class CopyDirective {

	@HostListener('click')
	copy() {
		let selectedText = document.getSelection().toString()

		if (!selectedText) {
			selectedText = (document.getElementById('area') as HTMLInputElement).value
		}
		navigator.clipboard.writeText(selectedText)
	}
}