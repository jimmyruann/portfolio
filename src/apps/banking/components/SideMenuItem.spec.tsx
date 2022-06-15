import { cleanup, render, screen } from '@testing-library/react';
import { BiCreditCard } from 'react-icons/bi';
import { MemoryRouter } from 'react-router-dom';
import SideMenuItem from './SideMenuItem';

describe('Banking App SideMenuItem', () => {
	beforeEach(cleanup);

	it('should render', () => {
		const view = render(<SideMenuItem label='Test Label' icon={BiCreditCard} href='/test' />, {
			wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
		});

		expect(view.baseElement).toBeTruthy();

		const statusBox = screen.getByTestId('statusBox');
		expect(statusBox).toBeTruthy();

		expect(statusBox).toHaveStyle({
			visibility: 'hidden',
		});
	});

	it('should show status number box', () => {
		const view = render(<SideMenuItem label='Test Label' icon={BiCreditCard} href='/test' statusNumber={99} />, {
			wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
		});

		expect(view.baseElement).toBeTruthy();

		const statusBox = screen.getByTestId('statusBox');
		expect(statusBox).toBeTruthy();
		expect(statusBox).toHaveStyle({
			visibility: 'visible',
		});
	});

	it('should show status number box and 99 is the max', () => {
		const view = render(<SideMenuItem label='Test Label' icon={BiCreditCard} href='/test' statusNumber={2000} />, {
			wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
		});

		expect(view.baseElement).toBeTruthy();

		const statusBox = screen.getByTestId('statusBox');
		expect(statusBox).toBeTruthy();
		expect(statusBox).toHaveStyle({
			visibility: 'visible',
		});
		expect(statusBox).toContainHTML('99');
	});
});
