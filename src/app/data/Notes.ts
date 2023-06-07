/* eslint-disable quotes */
import { INote } from 'src/models/note'

export const note: INote[] = [
	{
		id: 1,
		title: 'Meeting Notes',
		content:
			"Today's meeting focused on discussing the upcoming project deadlines and assigning tasks to team members. We reviewed the project scope and identified potential risks. The client's feedback was also discussed, and adjustments were made to accommodate their requirements. Overall, the meeting was productive, and everyone left with a clear understanding of their responsibilities.",
		writtenOn: new Date('2023-06-01'),
		isDeleted: false
	},
	{
		id: 2,
		title: 'Shopping List',
		content: `1. Milk - 2 liters 2. Bread - Whole wheat3. Eggs - A dozen 4. Chicken - Boneless, skinless 5. Tomatoes - 4 medium-sized 6. Onions - 2 large 7. Pasta - Penne 8. Cheese - Cheddar 9. Apples - 6 10. Yogurt - Greek, plain`,
		writtenOn: new Date('2023-06-02'),
		isDeleted: false
	},
	{
		id: 3,
		title: 'Book Recommendations',
		content:
			"I recently read 'Educated' by Tara Wester and found it to be a captivating memoir. It provides insights into the author's journey of self-education despite growing up in a strict and abusive household. The book highlights the importance of education and its power to transform lives. I highly recommend it to anyone interested in compelling personal stories.",
		writtenOn: new Date('2023-05-31'),
		isDeleted: false
	},
	{
		id: 4,
		title: 'Travel Itinerary',
		content:
			'Destination: Paris, France  Duration: 7 days    Day 1: Visit the Eiffel Tower and enjoy a boat cruise on the Seine River.  Day 2: Explore the Louvre Museum and indulge in French cuisine.  Day 3: Take a day trip to Versailles and tour the magnificent palace.  Day 4: Discover the charm of Montmartre and visit Sacred-Chur Basilica.  Day 5: Stroll along the Champs-Elysée and visit the Arc de Triumphed.  Day 6: Experience the beauty of Notre-Dame Cathedral and take a river cruise.  Day 7: Enjoy a relaxing day in the Luxembourg Gardens before departure.',
		writtenOn: new Date('2023-05-30'),
		isDeleted: false
	},
	{
		id: 5,
		title: 'Fitness Goals',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-04'),
		isDeleted: false
	},
	{
		id: 6,
		title: 'Fness Goals',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-04'),
		isDeleted: false
	},
	{
		id: 7,
		title: 'Fitness ls',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-04'),
		isDeleted: false
	},
	{
		id: 8,
		title: 'Fiess Goals',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-04'),
		isDeleted: false
	},
	{
		id: 9,
		title: 'ness Goals',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-04'),
		isDeleted: false
	},
	{
		id: 10,
		title: 'Fitns Goals',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-06'),
		isDeleted: false
	},
	{
		id: 11,
		title: 'Fitness Go',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-06'),
		isDeleted: false
	},
	{
		id: 12,
		title: 'Fitness ',
		content:
			'Current weight: 70 kg  Goal weight: 65 kg    To achieve my fitness goals, I will:  - Follow a balanced diet with reduced calorie intake.  - Exercise for at least 30 minutes, **five** days a week (combination of cardio and strength training).  - Drink plenty of water and avoid sugary beverages.  - Track my progress regularly and make adjustments as needed.    I aim to reach my goal weight within three months and maintain a healthy lifestyle thereafter.',
		writtenOn: new Date('2023-06-06'),
		isDeleted: false
	}
]

export const copiedNote: INote = {
	id: 0,
	title: '',
	content: '',
	writtenOn: undefined,
	isDeleted: false
}
