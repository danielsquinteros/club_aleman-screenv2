import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { getDateLocale } from '../utils/dateUtils';
import { Link } from 'react-router-dom';

const Header = () => {
	const { i18n } = useTranslation();
	const dateLocale = getDateLocale(i18n.language);

	return (
		<header className='flex justify-between items-start mb-8'>
			<div>
				<h2 className='text-4xl font-bold first-letter:uppercase'>
					{format(new Date(), 'EEEE dd', { locale: dateLocale })}
				</h2>
				<p className='text-2xl first-letter:uppercase'>
					{format(new Date(), 'MMMM yyyy', { locale: dateLocale })}
				</p>
			</div>
			<div className='flex flex-col items-end'>
				<Link to='/'>
					<img
						src='/images/logo.png'
						alt='Club Alemán logo'
						className='h-32 w-auto mb-2'
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
