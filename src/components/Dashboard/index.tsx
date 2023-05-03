import { Summary } from '../Summary';
import { TransactionsTable } from '../Transactions-table';
import { Container } from './styles';

export function Dashboard() {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	);
}
