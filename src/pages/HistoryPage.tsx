import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HistoryComponent from '@/components/HistoryComponent';
import { history } from '@/data-access/history';
import { HistorySkeleton } from '@/components/HistorySkeleton';
import PageTitle from '@/components/PageTitle';
import { HistoryEvent } from '@/db/schema';

const HistoryPage = () => {
	const { t } = useTranslation();
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
			}
		};

		fetchEvents();
	}, []);

	return (
		<div className='flex-grow'>
			<PageTitle title={t('history')} />
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
