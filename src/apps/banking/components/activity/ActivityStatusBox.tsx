import { Button, DefaultMantineColor } from '@mantine/core';

export interface IActivityStatusBoxProps {
	status: string;
}

export default function ActivityStatusBox({ status }: IActivityStatusBoxProps) {
	let color: DefaultMantineColor;

	if (status.toLowerCase() === 'success') {
		color = 'green';
	} else if (status.toLowerCase() === 'failed') {
		color = 'red';
	} else {
		color = 'orange';
	}

	return (
		<Button
			variant='light'
			color={color}
			sx={() => ({
				':hover': {
					backgroundColor: undefined,
				},
				'cursor': 'default',
				'width': 100,
			})}>
			{status}
		</Button>
	);
}
