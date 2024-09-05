import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import MembersTable from '@/components/MembersTable';
import { members } from '@/data-access/members';
import { MembersSkeleton } from '@/components/MembersSkeleton';
// import PageTitle from '@/components/PageTitle';
import { Member } from '@/db/schema';

const MembersPage = () => {
	// const { t } = useTranslation();
	const [membersList, setMembersList] = useState<Member[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMembers = async () => {
			try {
				const data = await members.getMembers();
				setMembersList(data);
				setIsLoading(false);
			} catch (err) {
				setError('Failed to fetch members');
				setIsLoading(false);
				console.error(err)
			}
		};

		fetchMembers();
	}, []);

	return (
		<div className='h-full p-14 flex'>
			{isLoading ? (
				<MembersSkeleton />
			) : error ? (
				<div>{error}</div>
			) : (
				<MembersTable members={membersList} />
			)}
		</div>
	);
};

export default MembersPage;
