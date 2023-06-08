import { Directive, HostListener, Renderer2 } from '@angular/core'

@Directive({
	selector: '[appCut]'
})

export class CutDirective {

	constructor(private renderer: Renderer2) { }
	@HostListener('click')
	cut() {
		const selection = document.getSelection()
		navigator.clipboard.writeText(selection.toString())
		const textarea = document.getElementById('area') as HTMLTextAreaElement
		const startPosition = textarea.selectionStart
		const endPosition = textarea.selectionEnd
		const currentText = textarea.value
		const newText = currentText.substring(0, startPosition) + currentText.substring(endPosition)
		textarea.value = newText

		this.renderer.setProperty(textarea, 'value', newText)
		textarea.dispatchEvent(new Event('input'))
	}
}
