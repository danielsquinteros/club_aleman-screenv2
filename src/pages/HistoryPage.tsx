import React from 'react';
import { useTranslation } from 'react-i18next';

const HistoryPage = () => {
	const { t } = useTranslation();

	const historyEvents = [
		{ year: 1860, event: 'clubFounded' },
		{ year: 1900, event: 'firstClubhouse' },
		{ year: 1950, event: 'majorExpansion' },
		{ year: 2000, event: 'modernization' },
		{ year: 2023, event: 'presentDay' },
	];

	return (
		<div className='flex-grow max-w-4xl mx-auto px-4'>
			<h1 className='text-6xl font-bold mb-10 text-center'>{t('history')}</h1>
			<div className='space-y-12'>
				{historyEvents.map((item, index) => (
					<div key={index} className='flex items-center'>
						<div className='flex-shrink-0 w-24 text-2xl font-bold text-right mr-8'>
							{item.year}
						</div>
						<div className='flex-grow'>
							<div className='bg-gray-200 p-6 rounded-lg shadow-md'>
								<h2 className='text-2xl font-semibold mb-2'>
									{t(`historyEvents.${item.event}.title`)}
								</h2>
								<p className='text-gray-700'>
									{t(`historyEvents.${item.event}.description`)}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HistoryPage;
