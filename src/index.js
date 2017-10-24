import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import AppContainer from './containers/AppContainer';
import AppReducer from './reducers/AppReducer';
import './index.css';

const initialState = {
	combos: [
		{
			title: 'Warsow',
			id: 7,
			body : '2v2, time cap 10 minutter, losers bracket – <a href="#">Fuldt regelsæt</a>',
			endSignupTime: 'Lørdag 13:30',
			startComboTime: 'Lørdag 14:00',
			participants: [
				{
					name: 'Curan',
				},
				{
					name: 'NevaKee',
				},
				{
					name: 'Dubio',
				},
				{
					name: 'Hjalte',
				},
				{
					name: 'Dr. Død',
				},
				{
					name: 'Flamse er en bonerfart',
				},
			],
		},
		{
			title: 'CS GO',
			id: 2,
			body : '5v5, time cap 10 minutter, losers bracket – <a href="#">Fuldt regelsæt</a>',
			endSignupTime: 'Lørdag 19:30',
			startComboTime: 'Lørdag 22:00',
			participants: [
				{
					name: 'Curan',
				},
				{
					name: 'Nix',
					isUser: true,
				},
			],
		},
	],
	showAddParticipantModal: false,
};

const store = createStore(
  AppReducer,
  initialState
);

render(
	<Provider store={ store }>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
