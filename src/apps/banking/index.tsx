import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Activity from './components/activity/Activity';
import Analytics from './components/analytics/Analytics';
import AppLayout from './components/AppLayout';
import Dashboard from './components/dashboard/Dashboard';
import Invoices from './components/invoices/Invoices';
import Messages from './components/messages/Messages';
import Wallets from './components/wallets/Wallets';

export interface IBankingAppProps {}

export default function BankingApp(props: IBankingAppProps) {
	return (
		<MantineProvider withNormalizeCSS withGlobalStyles>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/messages' element={<Messages />} />
					<Route path='/analytics' element={<Analytics />} />
					<Route path='/activity' element={<Activity />} />
					<Route path='/invoices' element={<Invoices />} />
					<Route path='/wallet' element={<Wallets />} />
				</Route>
			</Routes>
		</MantineProvider>
	);
}
