import { createStyles, Navbar, ScrollArea } from '@mantine/core';
import { AiOutlineFileText, AiOutlineHome, AiOutlineMessage, AiOutlinePieChart } from 'react-icons/ai';
import { BiCreditCard } from 'react-icons/bi';
import { MdOutlineAnalytics } from 'react-icons/md';
import { matchPath, useLocation } from 'react-router-dom';
import { ReactComponent as CompanyLogo } from '../assets/logo.svg';
import SideMenuItem, { ISideMenuItemProps } from './SideMenuItem';

export interface ISideMenuProps {}

const useStyles = createStyles((theme) => ({
	logo: { height: 40 },
	logoSection: {
		display: 'flex',
		alignItems: 'center',
	},
}));

const sideMenuItems: ISideMenuItemProps[] = [
	{
		href: `/banking`,
		label: 'Dashboard',
		icon: AiOutlineHome,
	},
	{
		href: `/banking/invoices`,
		label: 'Invoices',
		icon: AiOutlineFileText,
	},
	{
		href: `/banking/messages`,
		label: 'Messages',
		icon: AiOutlineMessage,
		statusNumber: 10,
	},
	{
		href: `/banking/wallet`,
		label: 'My Wallet',
		icon: BiCreditCard,
	},
	{
		href: `/banking/activity`,
		label: 'Activity',
		icon: AiOutlinePieChart,
	},
	{
		href: `/banking/analytics`,
		label: 'Analytics',
		icon: MdOutlineAnalytics,
	},
];

export default function SideMenu(props: ISideMenuProps) {
	const { classes } = useStyles();
	const location = useLocation();

	return (
		<Navbar width={{ base: 300 }} p='lg'>
			<Navbar.Section className={classes.logoSection}>
				<CompanyLogo className={classes.logo} />
			</Navbar.Section>
			<Navbar.Section grow component={ScrollArea} py='xs'>
				{sideMenuItems.map((item, i) => (
					<SideMenuItem key={i} {...item} isActive={!!matchPath(location.pathname, item.href)} />
				))}
			</Navbar.Section>
		</Navbar>
	);
}
