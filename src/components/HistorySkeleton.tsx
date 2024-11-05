import { Skeleton } from '@/components/ui/skeleton';

export function HistorySkeleton() {
	return (
		<div className='max-w-4xl mx-auto space-y-6'>
			<Skeleton className='h-12 w-3/4 mx-auto' />
			<div className='space-y-4'>
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-[90%]' />
				<Skeleton className='h-4 w-[85%]' />
			</div>
			<div className='space-y-4'>
				<Skeleton className='h-8 w-2/3' />
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-[92%]' />
				<Skeleton className='h-4 w-[88%]' />
			</div>
			<div className='space-y-4'>
				<Skeleton className='h-8 w-2/3' />
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-[95%]' />
				<Skeleton className='h-4 w-[85%]' />
			</div>
		</div>
	);
}
