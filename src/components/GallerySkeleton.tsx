import { Skeleton } from '@/components/ui/skeleton';

export function GallerySkeleton() {
	return (
		<div className='max-w-4xl mx-auto space-y-4'>
			<div className='relative'>
				<Skeleton className='h-[50vh] w-full' /> {/* Main image */}
				<Skeleton className='absolute bottom-4 right-4 h-10 w-32' />{' '}
				{/* Fullscreen button */}
			</div>
			<div className='flex justify-center space-x-2'>
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton key={i} className='h-16 w-16' /> // Thumbnail images
				))}
			</div>
		</div>
	);
}
