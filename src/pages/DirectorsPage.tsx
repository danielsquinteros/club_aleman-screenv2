import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DirectorsList from '@/components/DirectorsList';
import { members } from '@/data-access/members';
import { DirectorsSkeleton } from '@/components/DirectorsSkeleton';
import PageTitle from '@/components/PageTitle';
import { Member } from '@/db/schema';

const DirectorsPage = () => {
	const { t } = useTranslation();
	const [directorsList, setDirectorsList] = useState<Member[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDirectors = async () => {
			try {
				const data = await members.getDirectors();
				setDirectorsList(data);
				setIsLoading(false);
			} catch (err) {
				setError('Failed to fetch directors');
				setIsLoading(false);
			}
		};

		fetchDirectors();
	}, []);

	return (
		<div className='flex-grow'>
			<PageTitle title={t('directors')} />
			{isLoading ? (
				<DirectorsSkeleton />
			) : error ? (
				<div>{error}</div>
			) : (
				<DirectorsList directors={directorsList} />
			)}
		</div>
	);
};

export default DirectorsPage;
