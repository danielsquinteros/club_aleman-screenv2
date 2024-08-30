import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Layout from './components/Layout';
import Home from './pages/Home';
import MembersPage from './pages/MembersPage';
import DirectorsPage from './pages/DirectorsPage';
import GalleryPage from './pages/GalleryPage';
import HistoryPage from './pages/HistoryPage';
import './styles/global.css';

const App = () => (
	<I18nextProvider i18n={i18n}>
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='members' element={<MembersPage />} />
					<Route path='directors' element={<DirectorsPage />} />
					<Route path='gallery' element={<GalleryPage />} />
					<Route path='history' element={<HistoryPage />} />
				</Route>
			</Routes>
		</Router>
	</I18nextProvider>
);

export default App;
