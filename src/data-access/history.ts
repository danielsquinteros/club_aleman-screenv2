import { HistoryEvent } from '@/db/schema';

const API_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000';

interface HistoryAPI {
	getEvents: () => Promise<HistoryEvent[]>;
}

export const history: HistoryAPI = {
	getEvents: async () => {
		const response = await fetch(`${API_URL}/api/history`);
		if (!response.ok) {
			throw new Error('Failed to fetch history events');
		}
		return response.json();
	},
};
