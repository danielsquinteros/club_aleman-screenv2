import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { members, Member } from '@/data/members';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ITEMS_PER_PAGE = 8;

const MembersTable = () => {
	const { t } = useTranslation();
	const [filter, setFilter] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	const membersList = members.getMembers();

	const filteredMembers = filter
		? membersList.filter((member) =>
				member.lastName.toUpperCase().startsWith(filter),
		  )
		: membersList;

	const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE);
	const paginatedMembers = filteredMembers.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div>
			<div className='overflow-x-auto'>
				<table className='min-w-full bg-white'>
					<thead className='bg-gray-800 text-white'>
						<tr>
							<th className='py-3 px-4 text-left'>{t('name')}</th>
							<th className='py-3 px-4 text-left'>{t('role')}</th>
							<th className='py-3 px-4 text-left'>{t('email')}</th>
							<th className='py-3 px-4 text-left'>{t('phone')}</th>
						</tr>
					</thead>
					<tbody className='text-gray-700'>
						{paginatedMembers.map((member) => (
							<tr key={member.id} className='border-b hover:bg-gray-100'>
								<td className='py-3 px-4'>
									{`${member.lastName}, ${member.firstName} ${
										member.secondSurname || ''
									}`}
								</td>
								<td className='py-3 px-4'>{t(`roles.${member.role}`)}</td>
								<td className='py-3 px-4'>{member.email || '-'}</td>
								<td className='py-3 px-4'>{member.phoneNumber || '-'}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className='mt-4 flex flex-wrap justify-center'>
				{alphabet.map((letter) => (
					<button
						key={letter}
						className={`mx-1 my-1 px-3 py-1 rounded ${
							filter === letter
								? 'bg-blue-500 text-white'
								: 'bg-gray-200 hover:bg-gray-300'
						}`}
						onClick={() => {
							setFilter(filter === letter ? null : letter);
							setCurrentPage(1);
						}}
					>
						{letter}
					</button>
				))}
			</div>
			<div className='flex justify-center mt-4'>
				{filter && (
					<button
						className='mx-1 my-1 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600'
						onClick={() => {
							setFilter(null);
							setCurrentPage(1);
						}}
					>
						{t('clearFilter')}
					</button>
				)}
			</div>
			<div className='flex justify-center mt-4'>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<button
						key={page}
						className={`mx-1 px-3 py-1 rounded ${
							currentPage === page
								? 'bg-blue-500 text-white'
								: 'bg-gray-200 hover:bg-gray-300'
						}`}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</button>
				))}
			</div>
		</div>
	);
};

export default MembersTable;
