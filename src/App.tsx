import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound404 from './components/NotFound404';
import PageLoading from './components/PageLoading';

const BankingApp = lazy(() => import('./apps/banking'));

function App() {
	return (
		<Router>
			<Suspense fallback={<PageLoading />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/banking/*' element={<BankingApp />} />
					<Route path='*' element={<NotFound404 />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
