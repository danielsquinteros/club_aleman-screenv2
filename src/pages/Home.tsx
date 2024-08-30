import React from 'react';
import { useTranslation } from 'react-i18next';
import InteractButton from '../components/InteractButton';
import NavMenu from '../components/NavMenu';

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1 className='text-6xl font-bold mb-10 text-center'>{t('welcome')}</h1>
			{/* <InteractButton /> */}
			<NavMenu />
		</>
	);
};

export default Home;
