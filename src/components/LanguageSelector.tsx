import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		localStorage.setItem('language', lang);
	};

	return (
		<div className='flex space-x-4'>
			{['es', 'de', 'en'].map((lang) => (
				<Button
					key={lang}
					onClick={() => changeLanguage(lang)}
					className={`p-0 ${
						i18n.language === lang
							? 'border-2 border-black'
							: 'hover:bg-gray-100'
					}`}
					asChild
				>
					<img
						src={`/images/flags/${lang}.png`}
						alt=''
						width={50}
						height={50}
						className='rounded-full'
					/>
				</Button>
			))}
		</div>
	);
};

export default LanguageSelector;
