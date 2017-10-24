import { connect } from 'inferno-redux'
import { addComboParticipant, toggleShowAddParticipantModal } from '../actions/actions'
import * as AppQueries from '../queries/AppQueries';
import SignUpModal from '../components/signUpModal'

const mapStateToProps = (state, ownProps) => {
	const combo = state.combos.filter(combo => combo.id === state.showAddParticipantModal)[0];
	const isUserSignedUp = AppQueries.getIsUserSignedUp(combo.participants);


	return {
		id: state.showAddParticipantModal,
		combo,
		userName: isUserSignedUp ? 'megatrack' : state.userName,
		isUserSignedUp,
	}
};


const mapDispatchToProps = dispatch => {
	return {
		onCloseButtonClick: (id) => {
			dispatch(toggleShowAddParticipantModal(false))
		},
		onSubmit: (id, value) => {
			if (value && value.length) {
				dispatch(addComboParticipant(id, value));
				dispatch(toggleShowAddParticipantModal(false));
			}
		},
	}
};

const SignUpModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);

export default SignUpModalContainer;
