import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
	//definindo contexto para compartilhar dados entre componentes
	const { transactions } = useTransactions();

	// const totalDeposits = transactions.reduce((acc, transaction) => {
	// 	if (transaction.type === 'deposit') {
	// 		return acc + transaction.amount;
	// 	}

	// 	return acc;
	// }, 0);

	// const totalWithdraws = transactions.reduce((acc, transaction) => {
	// 	if (transaction.type === 'withdraw') {
	// 		return acc + transaction.amount;
	// 	}

	// 	return acc;
	// }, 0);

	// const total = totalDeposits - totalWithdraws;

	//SOMA DE DEPOSITOS E SAIDAS

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraws += transaction.amount;
				acc.total -= transaction.amount;
			}

			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		}
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(summary.deposits)}
				</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong>
					-
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(summary.withdraws)}
				</strong>
			</div>

			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
}
