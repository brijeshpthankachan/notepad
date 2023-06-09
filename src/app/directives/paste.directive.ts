import { Directive, HostListener, Renderer2 } from '@angular/core'

@Directive({
	selector: '[appPaste]',
	standalone: true
})

export class PasteDirective {
	constructor(private renderer: Renderer2) { }

	/**
		* Reads the text from the clipboard and pastes it into the text area at the current cursor position.
	  */
	@HostListener('click')
	Paste() {
		navigator.clipboard.readText().then(text => {
			const textarea = document.getElementById('note-content-area') as HTMLTextAreaElement
			const startPosition = textarea.selectionStart
			const endPosition = textarea.selectionEnd
			const currentText = textarea.value
			const newText = currentText.substring(0, startPosition) + text + currentText.substring(endPosition)
			textarea.value = newText

			this.renderer.setProperty(textarea, 'value', newText)
			textarea.dispatchEvent(new Event('input'))
		})
	}

}

