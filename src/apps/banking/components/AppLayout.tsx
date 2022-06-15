import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

export interface IAppLayoutProps {}

export default function AppLayout(props: IAppLayoutProps) {
	return (
		<AppShell padding='md' navbar={<SideMenu />}>
			<Outlet />
		</AppShell>
	);
}
