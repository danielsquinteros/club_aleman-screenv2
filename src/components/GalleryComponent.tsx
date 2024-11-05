'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { Maximize2, AlertTriangle } from 'lucide-react';
import { GalleryImage } from '@/db/schema';
import { cn } from '@/lib/utils';

interface GalleryComponentProps {
	images: GalleryImage[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ images }) => {
	const { t } = useTranslation();
	const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [api, setApi] = useState<CarouselApi>();
	const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();

	// Handle main carousel changes
	React.useEffect(() => {
		if (!api) return;

		api.on('select', () => {
			setCurrentIndex(api.selectedScrollSnap());
			thumbnailApi?.scrollTo(api.selectedScrollSnap());
		});
	}, [api, thumbnailApi]);

	const openFullscreen = () => {
		setFullscreenImage(images[currentIndex].url);
	};

	const closeFullscreen = () => {
		setFullscreenImage(null);
	};

	if (images.length === 0) {
		return (
			<div className='text-center text-gray-500 text-3xl font-bold flex items-center justify-center gap-4 h-full'>
				<AlertTriangle className='w-10 h-10' />
				<span>{t('noImagesFound')}</span>
			</div>
		);
	}

	const handleThumbnailClick = (index: number) => {
		api?.scrollTo(index);
		setCurrentIndex(index);
	};

	return (
		<div className='max-w-4xl mx-auto px-4'>
			<div className='relative'>
				<Carousel
					setApi={setApi}
					className='w-full'
					opts={{
						loop: true,
						skipSnaps: false,
					}}
				>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem key={image.id}>
								<Card className='border-0'>
									<CardContent className='p-0 aspect-[16/9] relative'>
										<img
											src={image.url}
											alt={image.title}
											className='w-full h-[75vh] object-cover rounded-lg'
										/>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='left-2' />
					<CarouselNext className='right-2' />
					<Button
						onClick={openFullscreen}
						className='absolute bottom-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 z-10'
					>
						<Maximize2 className='mr-2 h-4 w-4' />
						{t('fullscreen')}
					</Button>
				</Carousel>
			</div>

			<div className='mt-4'>
				<Carousel
					setApi={setThumbnailApi}
					className='w-full'
					opts={{
						align: 'start',
						loop: true,
						skipSnaps: false,
						dragFree: true,
					}}
				>
					<CarouselContent className='-ml-1 gap-2'>
						{images.map((image, index) => (
							<CarouselItem
								key={image.id}
								className='basis-1/5 pl-4 cursor-pointer p-2'
								onClick={() => handleThumbnailClick(index)}
							>
								<div
									className={cn(
										'relative aspect-[16/9] rounded-lg overflow-hidden',
										currentIndex === index &&
											'ring-2 ring-primary ring-offset-2',
									)}
								>
									<img
										src={image.url}
										alt={image.title}
										className='w-full h-full object-cover'
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			{fullscreenImage && (
				<div
					className='fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50'
					onClick={closeFullscreen}
				>
					<img
						src={fullscreenImage}
						alt='Fullscreen'
						className='max-w-full max-h-full'
					/>
				</div>
			)}
		</div>
	);
};

export default GalleryComponent;
