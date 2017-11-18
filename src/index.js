import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import AppContainer from './containers/AppContainer';
import AppReducer from './reducers/AppReducer';
import './index.css';

const initialState = {
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
