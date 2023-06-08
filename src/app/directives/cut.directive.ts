import { Directive, HostListener } from '@angular/core'

@Directive({
	selector: '[appCut]'
})

export class CutDirective {
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
	}
}
