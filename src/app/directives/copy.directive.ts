import { Directive, HostListener } from '@angular/core'

@Directive({
	selector: '[appCopy]',
	standalone: true
})

export class CopyDirective {

	@HostListener('click')
	copy() {
		/**
		 * The selected text from the document.
		 * If there is no selection copies the whole document
		 * @type {string}
		 */
		let selectedText: string = document.getSelection().toString()

		if (!selectedText) {
			selectedText = (document.getElementById('note-content-area') as HTMLInputElement).value
		}

		navigator.clipboard.writeText(selectedText)
	}
}
