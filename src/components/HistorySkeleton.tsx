import { Skeleton } from '@/components/ui/skeleton';

export function HistorySkeleton() {
	return (
		<div className='max-w-4xl mx-auto px-4 space-y-12'>
			{Array.from({ length: 5 }).map((_, i) => (
				<div key={i} className='flex items-center'>
					<div className='flex-shrink-0 w-24 text-2xl font-bold text-right mr-8'>
						<Skeleton className='h-8 w-full' /> {/* Year */}
					</div>
					<div className='flex-grow'>
						<div className='bg-gray-200 p-6 rounded-lg shadow-md'>
							<Skeleton className='h-8 w-3/4 mb-2' /> {/* Event title */}
							<Skeleton className='h-20 w-full' /> {/* Event description */}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
