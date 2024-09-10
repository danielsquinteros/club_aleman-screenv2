import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Button } from '@/components/ui/button';
import { Maximize2 } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GalleryImage } from '@/db/schema';
import { AlertTriangle } from 'lucide-react';

interface GalleryComponentProps {
	images: GalleryImage[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ images }) => {
	const { t } = useTranslation();
	const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [nav1, setNav1] = useState<Slider | null>(null);
	const [nav2, setNav2] = useState<Slider | null>(null);

	const mainSettings = {
		dots: false,
		infinite: images.length > 3,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		afterChange: (current: number) => setCurrentSlide(current),
	};

	const thumbnailSettings = {
		dots: false,
		infinite: images.length > 3,
		speed: 500,
		slidesToShow: images.length > 5 ? 5 : images.length,
		slidesToScroll: 1,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '0px',
	};

	const openFullscreen = () => {
		setFullscreenImage(images[currentSlide].url);
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

	// if (images.length === 1) {
	// 	return (
	// 		<div className='max-w-4xl mx-auto'>
	// 			<img
	// 				src={images[0].url}
	// 				alt={images[0].title}
	// 				className='w-full h-full object-cover'
	// 			/>
	// 		</div>
	// 	);
	// }

	return (
		<div className='max-w-4xl mx-auto'>
			<div className='relative'>
				<Slider
					asNavFor={nav2 ?? undefined}
					ref={(slider1) => setNav1(slider1)}
					{...mainSettings}
				>
					{images.map((image) => (
						<div key={image.id} className='px-2'>
							<img
								src={image.url}
								alt={image.title}
								className='w-full h-[75vh] object-cover'
							/>
						</div>
					))}
				</Slider>
				<Button
					onClick={openFullscreen}
					className='absolute bottom-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75'
				>
					<Maximize2 className='mr-2 h-4 w-4' />
					{t('fullscreen')}
				</Button>
			</div>
			<div className='mt-4'>
				<Slider
					asNavFor={nav1 ?? undefined}
					ref={(slider2) => setNav2(slider2)}
					{...thumbnailSettings}
				>
					{images.map((image) => (
						<div key={image.id} className='px-1 mx-4'>
							<img
								src={image.url}
								alt={image.title}
								className='w-full h-16 object-cover cursor-pointer rounded-md'
							/>
						</div>
					))}
				</Slider>
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
