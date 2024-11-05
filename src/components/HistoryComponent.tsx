import React from 'react';

interface HistoryComponentProps {
	content: string;
}

const HistoryComponent: React.FC<HistoryComponentProps> = ({ content }) => {
	return (
		<div className='max-w-4xl mx-auto'>
			<article
				className='prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto'
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default HistoryComponent;
