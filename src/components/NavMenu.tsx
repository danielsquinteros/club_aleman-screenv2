import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const NavMenu = () => {
	const { t } = useTranslation();

	const menuItems = [
		{
			key: 'directors',
			color: 'bg-black text-white hover:bg-black/90',
			to: '/directors',
		},
		{
			key: 'members',
			color: 'bg-black text-white hover:bg-black/90',
			to: '/members',
		},
		{
			key: 'gallery',
			color: 'bg-red-500 text-white hover:bg-red-500/90',
			to: '/gallery',
		},
		{
			key: 'history',
			color: 'bg-yellow-500 text-black hover:bg-yellow-500/90',
			to: '/history',
		},
	];

	return (
		<div className='grid grid-cols-2 gap-6 max-w-3xl mx-auto w-full'>
			{menuItems.map(({ key, color, to }) => (
				<Button
					key={key}
					className={`p-20 rounded-2xl flex items-center justify-center text-3xl font-bold ${color}`}
					asChild
				>
					<Link to={to}>{t(key)}</Link>
				</Button>
			))}
		</div>
	);
};

export default NavMenu;
