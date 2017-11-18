import { connect } from 'inferno-redux';
import { toggleShowAddParticipantModal, removeComboParticipant } from '../actions/actions';
import ComboCard from '../components/comboCard';

const mapStateToProps = state => {
	return {
		uid: state.uid,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSignupButtonClick: (id) => {
			dispatch(toggleShowAddParticipantModal(id))
		},
		onCancelButtonClick: (id, participantKey) => {
			dispatch(removeComboParticipant(id, participantKey))
		},
		onComboEntryClick: (id) => {
			dispatch(toggleShowAddParticipantModal(id))
		}
	}
};

const ComboCardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ComboCard);

export default ComboCardContainer;
