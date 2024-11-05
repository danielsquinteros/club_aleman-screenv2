import React, { useState, useEffect } from 'react';
import HistoryComponent from '@/components/HistoryComponent';
import { history } from '@/data-access/history';
import { HistorySkeleton } from '@/components/HistorySkeleton';
import { AlertTriangle } from 'lucide-react';
import { t } from 'i18next';

const HistoryPage = () => {
	const [content, setContent] = useState<string>('');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const data = await history.getContent();
				setContent(data.content || '');
				setIsLoading(false);
			} catch (err) {
				setError('Failed to fetch history content');
				setIsLoading(false);
				console.error(err);
			}
		};

		fetchContent();
	}, []);

	if (!isLoading && !content) {
		return (
			<div className='text-center text-gray-500 text-3xl font-bold flex items-center justify-center gap-4 h-full'>
				<AlertTriangle className='w-10 h-10' />
				<span>{t('noHistoryContent')}</span>
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
				<HistoryComponent content={content} />
			)}
		</div>
	);
};

export default HistoryPage;
