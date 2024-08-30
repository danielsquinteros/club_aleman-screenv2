import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
	// make the layout full height but consider the padding
	<div className='flex flex-col min-h-screen bg-white text-black p-8'>
		<Header />
		<main className='flex-grow flex flex-col justify-center'>
			<Outlet />
		</main>
		<Footer />
	</div>
);

export default Layout;
