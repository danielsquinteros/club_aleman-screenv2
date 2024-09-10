import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavMenu = () => {
	const { t } = useTranslation();

	const menuItems = [
		{
			backgroundColor: 'white',
		},
		{
			backgroundImage: '/images/home/bandera.png',
		},
		{
			backgroundColor: 'white',
		},
		{
			backgroundColor: 'black',
		},
		{
			backgroundColor: 'black',
		},
		{
			backgroundColor: 'white',
		},
		{
			backgroundImage: '/images/home/old_club.png',
		},
		{
			backgroundColor: 'white',
		},
		{
			backgroundColor: 'white',
			icon: '/images/icons/circle_black.svg',
			key: 'directors',
			color: 'text-black',
			to: '/directors',
		},
		{
			backgroundColor: 'black',
			icon: '/images/icons/circle_white.svg',
			key: 'members',
			color: 'text-white',
			to: '/members',
		},
		{
			backgroundColor: 'red',
			icon: '/images/icons/circle_white.svg',
			key: 'gallery',
			color: 'text-white',
			to: '/gallery',
		},
		{
			backgroundColor: 'orange',
			icon: '/images/icons/circle_white.svg',
			key: 'history',
			color: 'text-white',
			to: '/history',
		},
		{
			backgroundColor: 'red',
		},
		{
			backgroundColor: 'white',
		},
		{
			backgroundColor: 'black',
		},
		{
			backgroundColor: 'white',
		},
	];

	return (
		<div className='grid grid-cols-4 grid-rows-4 w-full h-full'>
			{menuItems.map(
				({ key, backgroundColor, backgroundImage, to, color, icon }, index) => (
					<div
						key={index}
						style={{
							backgroundColor,
							backgroundImage: `url(${backgroundImage})`,
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							objectFit: 'contain',
						}}
						className='w-full h-full flex items-center justify-center'
					>
						{to && (
							<div className='flex flex-col justify-center items-center'>
								<Link to={to}>
									<img
										src={icon}
										alt='Icono Círculo'
										className='w-12 h-auto mb-4'
									/>
								</Link>
								<p className={`text-2xl ${color}`}>{t(key)}</p>
							</div>
						)}
					</div>
				),
			)}
		</div>
	);
};

export default NavMenu;
