import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import GalleryComponent from '@/components/GalleryComponent';
import { gallery } from '@/data-access/gallery';
import { GallerySkeleton } from '@/components/GallerySkeleton';
// import PageTitle from '@/components/PageTitle';
import { GalleryImage } from '@/db/schema';

const GalleryPage = () => {
	// const { t } = useTranslation();
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const data = await gallery.getImages();
				setImages(data);
				setIsLoading(false);
			} catch (err) {
				setError('Failed to fetch gallery images');
				setIsLoading(false);
				console.error(err)
			}
		};

		fetchImages();
	}, []);

	return (
		<div className='h-full p-14'>
			{isLoading ? (
				<GallerySkeleton />
			) : error ? (
				<div>{error}</div>
			) : (
				<GalleryComponent images={images} />
			)}
		</div>
	);
};

export default GalleryPage;
