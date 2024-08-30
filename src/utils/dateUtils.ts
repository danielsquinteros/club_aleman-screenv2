import { Locale, es, de, enGB } from 'date-fns/locale';

export const getDateLocale = (language: string): Locale => {
	switch (language) {
		case 'es':
			return es;
		case 'de':
			return de;
		case 'en':
			return enGB;
		default:
			return es;
	}
};
