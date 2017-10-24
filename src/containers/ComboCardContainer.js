import { connect } from 'inferno-redux';
import { toggleShowAddParticipantModal, removeComboParticipant } from '../actions/actions';
import ComboCard from '../components/comboCard';

const mapStateToProps = () => {
	return {}
};

const mapDispatchToProps = dispatch => {
	return {
		onSignupButtonClick: (id) => {
			dispatch(toggleShowAddParticipantModal(id))
		},
		onCancelButtonClick: (id) => {
			dispatch(removeComboParticipant(id))
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
