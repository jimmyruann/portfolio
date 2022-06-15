import { Box, createStyles, Text, UnstyledButton } from '@mantine/core';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export interface ISideMenuItemProps {
	label: React.ReactNode;
	icon: IconType;
	href: string;
	statusNumber?: number;
	isActive?: boolean;
}

const useStyles = createStyles((theme, _params: { isActive: boolean }) => ({
	button: {
		'paddingBlock': theme.spacing.sm,
		'paddingInline': theme.spacing.sm,
		'borderRadius': theme.radius.sm,
		'width': '100%',
		'backgroundColor': _params.isActive ? theme.colors.blue[1] : undefined,
		':hover': {
			backgroundColor: _params.isActive ? undefined : theme.colors.gray[1],
		},
	},
	icon: {
		fill: _params.isActive ? theme.colors.blue[6] : theme.colors.gray[5],
	},
	label: {
		color: _params.isActive ? theme.colors.blue[6] : theme.colors.gray[7],
	},
	statusBox: {
		backgroundColor: theme.colors.blue[7],
		width: 26,
		height: 26,
		borderRadius: '50%',
		color: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
	},
}));

export default function SideMenuItem({ label, icon: Icon, href, statusNumber, isActive = false }: ISideMenuItemProps) {
	const { classes } = useStyles({
		isActive,
	});
	return (
		<Link to={href}>
			<UnstyledButton className={classes.button}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Icon size={24} className={classes.icon} />
					<Box ml='sm'>
						<Text weight={500} className={classes.label}>
							{label}
						</Text>
					</Box>
					<Box
						data-testid='statusBox'
						className={classes.statusBox}
						sx={() => ({
							visibility: !statusNumber ? 'hidden' : 'visible',
						})}>
						<Text weight={500}>{statusNumber! >= 99 ? '99' : statusNumber}</Text>
					</Box>
				</Box>
			</UnstyledButton>
		</Link>
	);
}
