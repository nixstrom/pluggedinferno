import { connect } from 'inferno-redux'
import App from '../App'
import * as Base from '../services/base';
import * as actions from '../actions/actions';

const getCombos = Base.db.ref('/combos/').once('value', (snap) => JSON.stringify(snap.val())).then((data) => data.val());
const getShowAddParticipantModal = (state) => state.showAddParticipantModal;
const getUid = (state) => state.uid;

const mapStateToProps = state => {
	return {
		combos: Promise.resolve(getCombos).then((data) => {
			return data
		}),
		showAddParticipantModal: getShowAddParticipantModal(state),
		uid: getUid(state),
	}
};

const mapDispatchToProps = dispatch => {
	return {
		handleGetCombos: (id) =>
			// Base.db.ref('/combos/').on('value', (snap) => snap.val()),
			Base.db.ref('/combos/')
				.once('value', (snap) => JSON.stringify(snap.val()))
				.then((data) => data.val())
				.then((data) => {
					const newArr = [];

					Object.keys(data).forEach((key) => {
						let participants = data[key].participants;
						let participantKey = '';
						let subArr = [];

						Object.keys(participants).forEach((participant) => {
							participants[participant].participantKey = participant;
							subArr.push(participants[participant]);
						});

						data[key].id = key;
						data[key].participants = subArr;

						newArr.push(data[key]);
					});

					dispatch(actions.setCombos(newArr));

					return newArr;
				}),
		onSetAuth: (uid) => {
			dispatch(actions.setAuth(uid))
		},
	}
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;
