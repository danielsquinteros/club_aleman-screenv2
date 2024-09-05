import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Member } from '@/db/schema';

const ITEMS_PER_PAGE = 12;
const GRID_ROWS = 2;

interface DirectorsListProps {
	directors: Member[];
}

const DirectorsList: React.FC<DirectorsListProps> = ({ directors }) => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(directors.length / ITEMS_PER_PAGE);
	const paginatedDirectors = directors.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	// Fill the remaining slots with empty items
	const emptySlots = ITEMS_PER_PAGE - paginatedDirectors.length;
	const filledDirectors = [
		...paginatedDirectors,
		...Array(emptySlots).fill(null),
	];

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const getAvatarUrl = (id: string) => {
		return `https://api.dicebear.com/6.x/initials/svg?seed=${id}`;
	};

	return (
		<div className='flex flex-col justify-center h-full'>
			<div
				className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'
				style={{ gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))` }}
			>
				{filledDirectors.map((director, index) => (
					<div
						key={director?.id || `empty-${index}`}
						className='flex flex-col items-center'
					>
						{director ? (
							<>
								<img
									src={director.avatarUrl || getAvatarUrl(director.id)}
									alt={`${director.firstName} ${director.lastName}`}
									className='w-32 h-32 rounded-full mb-4 object-cover border-4 border-gray-200'
								/>
								<h2 className='text-2xl font-bold text-center'>
									{`${director.firstName} ${director.lastName}`}
								</h2>
								<p className='text-xl text-gray-600 text-center'>
									{t(`roles.${director.role}`)}
								</p>
							</>
						) : (
							<div className='w-32 h-32 rounded-full mb-4'></div>
						)}
					</div>
				))}
			</div>
			{totalPages > 1 && (
				<div className='flex justify-center mt-8 gap-2'>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						// <button
						// 	key={page}
						// 	className={`mx-1 px-3 py-1 rounded ${
						// 		currentPage === page
						// 			? 'bg-blue-500 text-white'
						// 			: 'bg-gray-200 hover:bg-gray-300'
						// 	}`}
						// 	onClick={() => handlePageChange(page)}
						// >
						// 	{page}
						// </button>
						<Button
							key={page}
							variant={currentPage === page ? 'default' : 'outline'}
							size='sm'
							onClick={() => handlePageChange(page)}
						>
							{page}
						</Button>
					))}
				</div>
			)}
		</div>
	);
};

export default DirectorsList;
