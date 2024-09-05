import { Skeleton } from '@/components/ui/skeleton';

export function DirectorsSkeleton() {
	return (
		<div className='flex flex-col justify-center h-full'>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
				{Array.from({ length: 8 }).map((_, i) => (
					<div key={i} className='flex flex-col items-center'>
						<Skeleton className='w-32 h-32 rounded-full mb-4' /> {/* Avatar */}
						<Skeleton className='h-6 w-3/4 mb-2' /> {/* Name */}
						<Skeleton className='h-4 w-1/2' /> {/* Role */}
					</div>
				))}
			</div>
			<div className='flex justify-center mt-8'>
				{Array.from({ length: 3 }).map((_, i) => (
					<Skeleton key={i} className='h-9 w-9 mx-1' />
				))}
			</div>
		</div>
	);
}
