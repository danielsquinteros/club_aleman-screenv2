import { ClubHistory } from '@/db/schema';

const API_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000';

interface HistoryAPI {
	getContent: () => Promise<ClubHistory>;
}

export const history: HistoryAPI = {
	getContent: async () => {
		const response = await fetch(`${API_URL}/api/history`);
		if (!response.ok) {
			throw new Error('Failed to fetch history content');
		}
		return response.json();
	},
};
