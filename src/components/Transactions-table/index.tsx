import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
	useEffect(() => {
		api.get('transactions').then((response) => console.log(response.data));
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvolvimento de website</td>
						<td className="deposit">R$ 12.000,00</td>
						<td>Venda</td>
						<td>01/05/2023</td>
					</tr>
					<tr>
						<td>Parcela do Carro</td>
						<td className="withdraw">- R$ 1.500,00</td>
						<td>Automóvel</td>
						<td>17/04/2023</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
