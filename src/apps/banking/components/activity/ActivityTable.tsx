import { Button, Table, Text } from '@mantine/core';
import dayjs from 'dayjs';
import ActivityStatusBox from './ActivityStatusBox';
import tableData from './__mocks__/tableData.json';

export interface IActivityTableProps {}

export default function ActivityTable(props: IActivityTableProps) {
	const rows = tableData
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.map((record) => {
			const date = dayjs(record.date);
			return (
				<tr key={record.invoiceId}>
					<td>
						<Text weight={500}>{record.name}</Text>
						<div>
							<Text size='sm' weight={500} color={'green'}>
								{record.type}
							</Text>
						</div>
					</td>
					<td>
						<Text weight={500}>{date.format('MMM DD, YYYY')}</Text>
						<div>
							<Text size='sm' weight={500} color={'green'}>
								at {date.format('hh:mm A')}
							</Text>
						</div>
					</td>
					<td>
						<Text weight={500}>{record.invoiceId}</Text>
					</td>
					<td>
						<Text weight={500}>-${record.amount}</Text>
					</td>
					<td>
						<ActivityStatusBox status={record.status} />
					</td>
					<td>
						<Button variant='outline' color='gray' compact>
							Details
						</Button>
					</td>
				</tr>
			);
		});

	return (
		<Table verticalSpacing='lg'>
			<thead>
				<tr>
					<th>Name/Business</th>
					<th>Date</th>
					<th>Invoice ID</th>
					<th>Amount</th>
					<th>Status</th>
					<th>Details</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
}
