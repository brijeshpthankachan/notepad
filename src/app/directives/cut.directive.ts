import { Directive, HostListener, Renderer2 } from '@angular/core'

@Directive({
	selector: '[appCut]'
})

export class CutDirective {
	/**
	 * Constructs a new instance of the CutDirective class.
	 * @param {Renderer2} renderer - The Renderer2 service used for manipulating the DOM.
	 */
	constructor(private renderer: Renderer2) { }

	/**
	 * Cuts the selected text and copies it to the clipboard.
	 * If no text is selected, cuts the whole text area with id 'note-content-area'
	 */
	@HostListener('click')
	cut() {

		const selection = document.getSelection().toString()
		const textarea = document.getElementById('note-content-area') as HTMLTextAreaElement
		let newText = ''

		if (selection) {
			navigator.clipboard.writeText(selection)

			const startPosition = textarea.selectionStart
			const endPosition = textarea.selectionEnd
			const currentText = textarea.value
			newText = currentText.substring(0, startPosition) + currentText.substring(endPosition)

			textarea.value = newText
		} else {
			navigator.clipboard.writeText(textarea.value)
			textarea.value = ''
		}

		/**
		 * Sets the 'value' property of the textarea element to the new text.
	     * Dispatches an 'input' event on the textarea element.
 	    */
		this.renderer.setProperty(textarea, 'value', newText)
		textarea.dispatchEvent(new Event('input'))
	}
}
