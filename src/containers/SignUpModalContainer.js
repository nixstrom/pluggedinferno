import { connect } from 'inferno-redux'
import { addComboParticipant, toggleShowAddParticipantModal } from '../actions/actions'
//import * as AppQueries from '../queries/AppQueries';
import SignUpModal from '../components/signUpModal'

const mapStateToProps = (state, ownProps) => {
	const { uid, combos, showAddParticipantModal } = state;

	console.log(showAddParticipantModal);
	// const combo = combos.filter(combo => combo.id === showAddParticipantModal)[0];
	// const isUserSignedUp = AppQueries.getIsUserSignedUp(combo.participants, uid);

	return {
		id: showAddParticipantModal,
		uid,
		combo,
		//userName: isUserSignedUp ? AppQueries.getUserFromCombo(combo.participants, uid) : '',
		isUserSignedUp,
	}
};


const mapDispatchToProps = dispatch => {
	return {
		onCloseButtonClick: (id) => {
			dispatch(toggleShowAddParticipantModal(false))
		},
		onSubmit: (id, value, uid) => {

			// TODO: Validate duplicate values
			if (value && value.length) {
				dispatch(addComboParticipant(id, value, uid));
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
