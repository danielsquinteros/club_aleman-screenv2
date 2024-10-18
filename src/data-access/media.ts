import { MediaItems } from '@/db/schema';

const API_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000';

interface MediaItemsAPI {
	getAll: () => Promise<MediaItems[]>;
}

export const mediaItems: MediaItemsAPI = {
	getAll: async () => {
		const response = await fetch(`${API_URL}/api/media`);
		if (!response.ok) {
			throw new Error('Failed to fetch media');
		}
		return response.json();
	},
};
