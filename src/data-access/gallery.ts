import { GalleryImage } from '@/db/schema';

const galleryImages: GalleryImage[] = Array.from({ length: 16 }, (_, i) => ({
	id: `image-${i + 1}`,
	url: `/images/gallery/image-${i + 1}.jpg`,
	title: `Gallery image ${i + 1}`,
}));

export const gallery = {
	getImages: async (): Promise<GalleryImage[]> => {
		// Simulating an API call with a delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return galleryImages;
	},
};
