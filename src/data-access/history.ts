import { HistoryEvent } from '@/db/schema';

const historyEvents: HistoryEvent[] = [
	{ year: 1860, event: 'clubFounded' },
	{ year: 1900, event: 'firstClubhouse' },
	{ year: 1950, event: 'majorExpansion' },
	{ year: 2000, event: 'modernization' },
	{ year: 2023, event: 'presentDay' },
];

export const history = {
	getEvents: async (): Promise<HistoryEvent[]> => {
		// Simulating an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return historyEvents;
	},
};
