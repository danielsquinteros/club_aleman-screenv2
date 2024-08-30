import React from 'react';
import { useTranslation } from 'react-i18next';
import MembersTable from '@/components/MembersTable';

const MembersPage = () => {
	const { t } = useTranslation();

	return (
		<div className='flex-grow'>
			<h1 className='text-6xl font-bold mb-12 text-center'>{t('members')}</h1>
			<MembersTable />
		</div>
	);
};

export default MembersPage;
