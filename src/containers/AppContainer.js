import { connect } from 'inferno-redux'
import App from '../App'

const getCombos = (combos) => combos;

const getShowAddParticipantModal = (state) => state.showAddParticipantModal;

const mapStateToProps = state => {
	return {
		combos: getCombos(state.combos, 'SHOW_ALL'),
		showAddParticipantModal: getShowAddParticipantModal(state),
	}
};

const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;
