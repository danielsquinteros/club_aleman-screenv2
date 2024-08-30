import React from 'react';
import { useTranslation } from 'react-i18next';

const InteractButton = () => {
	const { t } = useTranslation();

	return (
		<button className='bg-black text-white text-2xl px-8 py-4 rounded-full mb-12 mx-auto block'>
			{t('interact')} →
		</button>
	);
};

export default InteractButton;
