import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const savedLanguage = localStorage.getItem('language') || 'es';

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'es',
		lng: savedLanguage,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});

export default i18n;
