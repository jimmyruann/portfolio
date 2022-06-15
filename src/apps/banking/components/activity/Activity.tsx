import { Container, Group } from '@mantine/core';
import ActivityControl from './ActivityControl';
import ActivityTable from './ActivityTable';
import ActivityTableFilters from './ActivityTableFilters';
import ActivityTitle from './ActivityTitle';

export interface IActivityProps {}

export default function Activity(props: IActivityProps) {
	return (
		<Container fluid>
			<Group grow direction='column' spacing='xl'>
				<ActivityTitle />
				<ActivityControl />
				<ActivityTableFilters />
				<ActivityTable />
			</Group>
		</Container>
	);
}
