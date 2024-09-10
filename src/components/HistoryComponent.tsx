import { HistoryEvent } from '@/db/schema';
import React from 'react';

interface HistoryComponentProps {
	events: HistoryEvent[];
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({ events }) => {
	return (
		<div className='max-w-4xl mx-auto px-4'>
			<div className='space-y-12'>
				{events.map((item, index) => (
					<div key={index} className='flex items-center'>
						<div className='flex-shrink-0 w-24 text-2xl font-bold text-right mr-8'>
							{item.year}
						</div>
						<div className='flex-grow'>
							<div className='bg-gray-200 p-6 rounded-lg shadow-md'>
								<h2 className='text-2xl font-semibold mb-2'>{item.event}</h2>
								<p className='text-gray-700'>{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HistoryComponent;
