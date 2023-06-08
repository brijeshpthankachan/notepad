import { Directive, HostListener } from '@angular/core'

@Directive({
	selector: '[appPaste]'
})

export class PasteDirective {

	@HostListener('click')
	Paste() {

		navigator.clipboard.readText().then(text => {
			const textarea = document.getElementById('area') as HTMLTextAreaElement
			const startPosition = textarea.selectionStart
			const endPosition = textarea.selectionEnd
			const currentText = textarea.value
			console.log(currentText)
			const newText = currentText.substring(0, startPosition) + text + currentText.substring(endPosition)
			textarea.value = newText
		})
	}

}

