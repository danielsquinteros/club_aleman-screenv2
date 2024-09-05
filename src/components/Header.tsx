import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { getDateLocale } from '../utils/dateUtils';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

const Header = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [startingTexts, setStartingTexts] = useState({
		text: 'start',
		button: 'interact'
	})
	const { pathname } = useLocation();
	const { i18n, t } = useTranslation();
	const dateLocale = getDateLocale(i18n.language);

	// Watch for fullscreenchange
	useEffect(() => {
		function onFullscreenChange() {
		setIsFullscreen(Boolean(document.fullscreenElement));
		}

		document.addEventListener("fullscreenchange", onFullscreenChange);

		return () =>
		document.removeEventListener("fullscreenchange", onFullscreenChange);
	}, []);

	const handleFullScreen = () => {
		if (isFullscreen) {
		document.exitFullscreen();
		} else {
		document.documentElement.requestFullscreen();
		}
	};

	useEffect(() => {
		if(pathname === '/members'){
			setStartingTexts({
				text: 'members',
				button: 'backToInteract'
			})
			return
		}
		if(pathname === '/gallery'){
			setStartingTexts({
				text: 'gallery',
				button: 'backToInteract'
			})
			return
		}
		if(pathname === '/history'){
			setStartingTexts({
				text: 'history',
				button: 'backToInteract'
			})
			return
		}
		if(pathname === '/directors'){
			setStartingTexts({
				text: 'directors',
				button: 'backToInteract'
			})
			return
		}
		setStartingTexts({
			text: 'start',
			button: 'interact'
		})


	}, [pathname])
	

	return (
		<header className='flex flex-col h-full justify-between items-center'>
			<div className='flex flex-col items-end'>
				<img
					src='/images/logo.png'
					alt='Club Alemán logo'
					className='h-auto w-72'
					onClick={() => handleFullScreen()}
				/>
			</div>
			<div>
				<h1 className='text-4xl text-center font-bold mb-10'>{t(`${startingTexts.text}`)}</h1>
				<Link to='/'>
					<button className='bg-black py-4 px-9 flex items-center rounded-xl'>
						<img
							src='/images/icons/circle_arrow.svg'
							alt='Círculo flecha'
							className='w-6 h-auto mr-4'
							style={{rotate: (`${startingTexts.text === 'start' ? '0deg' : '180deg'}`)}}
						/>
						<p className='text-white text-xl'>
							{t(`${startingTexts.button}`)}
						</p>
					</button>
				</Link>
			</div>
			<LanguageSelector />
			<div className='text-center'>
				<h2 className='text-3xl font-bold first-letter:uppercase'>
					{format(new Date(), 'EEEE dd', { locale: dateLocale })}
				</h2>
				<p className='text-xl first-letter:uppercase'>
					{format(new Date(), 'MMMM yyyy', { locale: dateLocale })}
				</p>
			</div>
		</header>
	);
};

export default Header;
