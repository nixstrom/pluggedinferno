import { connect } from 'inferno-redux'
import { addComboParticipant, editComboParticipant, toggleShowAddParticipantModal } from '../actions/actions'
import * as AppQueries from '../queries/AppQueries';
import SignUpModal from '../components/signUpModal'

const mapStateToProps = (state, ownProps) => {
	const { uid, combos, showAddParticipantModal } = state;

	// const combo = combos.filter(combo => combo.id === showAddParticipantModal)[0];
	const combo = combos[showAddParticipantModal];
	const participantKey = AppQueries.getUserKeyFromCombo(combo.participants, uid);
	const isUserSignedUp = AppQueries.getIsUserReallySignedUp(combo.participants, participantKey);

	return {
		id: showAddParticipantModal,
		uid,
		combo,
		userName: isUserSignedUp ? AppQueries.getUserFromCombo(combo.participants, uid) : '',
		isUserSignedUp,
		participantKey,
	}
};


const mapDispatchToProps = dispatch => {
	return {
		onCloseButtonClick: (id) => {
			dispatch(toggleShowAddParticipantModal(false))
		},
		onSubmit: (id, value, uid, participantKey) => {

			// TODO: Validate duplicate values
			if (value && value.length) {
				dispatch(editComboParticipant(id, value, uid, participantKey));
				dispatch(toggleShowAddParticipantModal(false));
			}
		},
		onEdit: (id, value, uid, participantKey) => {
			if (value && value.length) {
				dispatch(editComboParticipant(id, value, uid, participantKey));
				dispatch(toggleShowAddParticipantModal(false));
			}
		}
	}
};

const SignUpModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);

export default SignUpModalContainer;
