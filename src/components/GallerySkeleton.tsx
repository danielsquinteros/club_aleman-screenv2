import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export function GallerySkeleton() {
	return (
		<div className='max-w-4xl mx-auto px-4'>
			<div className='relative'>
				<Carousel className='w-full'>
					<CarouselContent>
						<CarouselItem>
							<Card className='border-0'>
								<CardContent className='p-0 aspect-[16/9] relative'>
									<Skeleton className='w-full h-[75vh] rounded-lg' />
								</CardContent>
							</Card>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className='left-2 opacity-50' />
					<CarouselNext className='right-2 opacity-50' />
					<Skeleton className='absolute bottom-4 right-4 h-10 w-32 z-10' />
				</Carousel>
			</div>

			<div className='mt-4'>
				<Carousel className='w-full'>
					<CarouselContent className='-ml-1 gap-2'>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem
								key={index}
								className='basis-1/5 pl-4 cursor-pointer p-2'
							>
								<div className='relative aspect-[16/9] rounded-lg overflow-hidden'>
									<Skeleton className='w-full h-full' />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
}
