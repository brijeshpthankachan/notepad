import { Directive, HostListener, Renderer2 } from '@angular/core'

@Directive({
	selector: '[appCut]'
})

export class CutDirective {

	constructor(private renderer: Renderer2) { }
	@HostListener('click')
	cut() {
		const selection = document.getSelection().toString()
		const textarea = document.getElementById('area') as HTMLTextAreaElement
		let newText = ''

		if (selection) {
			navigator.clipboard.writeText(selection)
			const startPosition = textarea.selectionStart
			const endPosition = textarea.selectionEnd
			const currentText = textarea.value
			newText = currentText.substring(0, startPosition) + currentText.substring(endPosition)
			textarea.value = newText
		}
		else {
			navigator.clipboard.writeText(textarea.value)
			textarea.value = ''
		}

		this.renderer.setProperty(textarea, 'value', newText)
		textarea.dispatchEvent(new Event('input'))
	}
}
