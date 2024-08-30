import React from 'react';
import { useTranslation } from 'react-i18next';
import DirectorsList from '@/components/DirectorsList';

const DirectorsPage = () => {
	const { t } = useTranslation();

	return (
		<div className='flex-grow'>
			<h1 className='text-6xl font-bold mb-10 text-center'>{t('directors')}</h1>
			<DirectorsList />
		</div>
	);
};

export default DirectorsPage;
