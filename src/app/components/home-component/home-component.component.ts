import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component'

@Component({
	selector: 'app-home-component',
	standalone: true,
	templateUrl: './home-component.component.html',
	styleUrls: ['./home-component.component.scss'],
	imports: [CommonModule, HeaderComponent]
})
export class HomeComponentComponent {
}
