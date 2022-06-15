import { Box, Group, Select } from '@mantine/core';
import { useState } from 'react';

export interface IActivityTableFiltersProps {}

export default function ActivityTableFilters(props: IActivityTableFiltersProps) {
	const [type, setType] = useState<string | null>('all');
	const [archive, setArchive] = useState<string | null>('active');
	const [transactionType, setTransactionType] = useState<string | null>('all');
	const [date, setDate] = useState<string | null>('30d');
	const [currencyType, setCurrencyType] = useState<string | null>('all');

	return (
		<Group grow>
			<Box>
				<Select label='Type' placeholder='Pick one' data={[{ value: 'all', label: 'All Transaction' }]} value={type} onChange={setType} />
			</Box>
			<Box>
				<Select label='Archive' placeholder='Pick one' data={[{ value: 'active', label: 'Active' }]} value={archive} onChange={setArchive} />
			</Box>
			<Box>
				<Select label='Transaction type' placeholder='Pick one' data={[{ value: 'all', label: 'All Transaction' }]} value={transactionType} onChange={setTransactionType} />
			</Box>
			<Box>
				<Select label='Date' placeholder='Pick one' data={[{ value: '30d', label: 'Past 30 Days' }]} value={date} onChange={setDate} />
			</Box>
			<Box>
				<Select label='Amount & Currencies' placeholder='Pick one' data={[{ value: 'all', label: 'All Currencies' }]} value={currencyType} onChange={setCurrencyType} />
			</Box>
		</Group>
	);
}
