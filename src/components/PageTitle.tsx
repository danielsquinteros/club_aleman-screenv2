import React from 'react';

interface PageTitleProps {
	title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
	return <h1 className='text-6xl font-bold mb-10 text-center'>{title}</h1>;
};

export default PageTitle;
