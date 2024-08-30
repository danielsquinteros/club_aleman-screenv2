import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MemberList from '@/components/MemberList';

export default function MembersPage() {
	const { t } = useTranslation();

	return (
		<div className='flex flex-col min-h-screen bg-white text-black p-8'>
			<Header />
			<main className='flex-grow'>
				<h1 className='text-4xl font-bold mb-8 text-center'>{t('members')}</h1>
				<MemberList />
			</main>
			<Footer />
		</div>
	);
}
