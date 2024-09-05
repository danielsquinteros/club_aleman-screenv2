import { Skeleton } from '@/components/ui/skeleton';

export function MembersSkeleton() {
	return (
		<div className='flex flex-col space-y-4 justify-center'>
			<div className='rounded-md border'>
				<div className='p-4'>
					<div className='space-y-2'>
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} className='flex items-center space-x-4'>
								<Skeleton className='h-6 w-24' /> {/* Join Date */}
								<Skeleton className='h-6 flex-grow' /> {/* Name */}
								<Skeleton className='h-6 w-24' /> {/* Role */}
								<Skeleton className='h-9 w-28' /> {/* View Details button */}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='flex flex-wrap justify-center gap-2'>
				{Array.from({ length: 26 }).map((_, i) => (
					<Skeleton key={i} className='h-9 w-9' /> /* Alphabet buttons */
				))}
			</div>
			<div className='flex justify-center space-x-2'>
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton key={i} className='h-9 w-9' /> /* Pagination buttons */
				))}
			</div>
		</div>
	);
}
