import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs';
import { App } from './App';

//criando conexão com rotas de API fictcia para teste/dev
createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Desenvolvimento de website',
					type: 'deposit',
					category: 'Desenvolvimento',
					amount: 12000,
					createdAt: new Date('2022-03-31 10:00:00'),
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'Casa',
					amount: 1200,
					createdAt: new Date('2022-04-05 14:00:00'),
				},
				{
					id: 3,
					title: 'Parcela do Carro',
					type: 'withdraw',
					category: 'Automóvel',
					amount: 800,
					createdAt: new Date('2022-06-05 12:00:00'),
				},
			],
		});
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

			//schema - data base
			return schema.create('transaction', data);
		});
	},
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
