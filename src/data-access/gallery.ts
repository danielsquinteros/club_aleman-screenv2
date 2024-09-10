import { GalleryImage } from '@/db/schema';

const API_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000';

interface GalleryAPI {
	getImages: () => Promise<GalleryImage[]>;
}

export const gallery: GalleryAPI = {
	getImages: async () => {
		const response = await fetch(`${API_URL}/api/gallery`);
		if (!response.ok) {
			throw new Error('Failed to fetch gallery images');
		}
		return response.json();
	},
};
