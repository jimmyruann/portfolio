import { Box, Button, Group, Input } from '@mantine/core';
import { AiOutlineExport, AiOutlineFilter, AiOutlineSearch } from 'react-icons/ai';

export interface IActivityControlProps {}

export default function ActivityControl(props: IActivityControlProps) {
	return (
		<Group grow>
			<Input icon={<AiOutlineSearch size={18} />} placeholder='Search for transaction' />
			<Box
				sx={(theme) => ({
					display: 'flex',
					justifyContent: 'flex-end',
					gap: theme.spacing.sm,
				})}>
				<Button leftIcon={<AiOutlineFilter size={18} />} variant='outline'>
					Filter
				</Button>
				<Button leftIcon={<AiOutlineExport size={18} />} variant='outline' color='gray'>
					Export
				</Button>
			</Box>
		</Group>
	);
}
