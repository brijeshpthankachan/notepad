import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class DateConfig {
	beginningOfDay = new Date().setHours(0, 0, 0, 0)
	endOfDay = new Date().setHours(23, 59, 59)

	beginningOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		1
	).setHours(0, 0, 0, 0)

	endOfMonth = new Date(
		new Date().getFullYear(),
		new Date().getMonth() + 1,
		0
	).setHours(23, 59, 59, 999)

	beginningOfWeek =
		new Date().setHours(0, 0, 0, 0) - new Date().getDay() * 86400000

	endOfWeek = new Date(
		new Date(this.beginningOfWeek).setDate(
			new Date(this.beginningOfWeek).getDate() + 7
		)
	).setHours(23, 59, 59, 999)
}
