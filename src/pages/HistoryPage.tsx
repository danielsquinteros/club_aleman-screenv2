import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import HistoryComponent from '@/components/HistoryComponent';
import { history } from '@/data-access/history';
import { HistorySkeleton } from '@/components/HistorySkeleton';
// import PageTitle from '@/components/PageTitle';
import { HistoryEvent } from '@/db/schema';
import { AlertTriangle } from 'lucide-react';
import { t } from 'i18next';

const HistoryPage = () => {
	// const { t } = useTranslation();
	const [events, setEvents] = useState<HistoryEvent[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const data = await history.getEvents();
				setEvents(data);
				setIsLoading(false);
			} catch (err) {
				setError('Failed to fetch history events');
				setIsLoading(false);
				console.error(err);
			}
		};

		fetchEvents();
	}, []);

	if (!isLoading && events.length === 0) {
		return (
			<div className='text-center text-gray-500 text-3xl font-bold flex items-center justify-center gap-4 h-full'>
				<AlertTriangle className='w-10 h-10' />
				<span>{t('noEventsFound')}</span>
			</div>
		);
	}

	return (
		<div className='h-full p-14'>
			{isLoading ? (
				<HistorySkeleton />
			) : error ? (
				<div>{error}</div>
			) : (
				<HistoryComponent events={events} />
			)}
		</div>
	);
};

export default HistoryPage;
