import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { getDateLocale } from '../utils/dateUtils';
import { Skeleton } from '@/components/ui/skeleton';

export const DateDisplay = () => {
	const { i18n } = useTranslation();
	const dateLocale = getDateLocale(i18n.language);

	return (
		<div className='text-center'>
			<h2 className='text-3xl font-bold first-letter:uppercase'>
				{format(new Date(), 'EEEE dd', { locale: dateLocale })}
			</h2>
			<p className='text-xl first-letter:uppercase'>
				{format(new Date(), 'MMMM yyyy', { locale: dateLocale })}
			</p>
		</div>
	);
};

export const DateSkeleton = () => (
	<div className='text-center flex-grow flex flex-col items-center justify-center'>
		<Skeleton className='h-9 w-48 mb-2 bg-slate-400'></Skeleton>
		<Skeleton className='h-7 w-36 bg-slate-400'></Skeleton>
	</div>
);
