import * as Base from '../services/base';
//const dbRef = Base.db.ref('/');

const combos = (state = [], action) => {
	const currentUid = state.uid;

	switch (action.type) {
		case 'EDIT_COMBO_PARTICIPANT':
			const { id, value, uid } = action;
			let fooRef;

			if (action.participantKey) {
				fooRef = Base.db.ref(`combos/${parseInt(id, 10)}/participants/${action.participantKey}`);
			} else {
				fooRef = Base.db.ref(`combos/${parseInt(id, 10)}/participants/`).push();
			}
			// const isUserSignedUp = Boolean(state.combos[id].participants.filter((participant) => participant.uid === uid)[0]);
			//
			// console.log(isUserSignedUp, currentUid);


			fooRef.set({
				name: value,
				uid: uid,
			});

			return {
				...state,
				userName: action.value,
			};

		case 'REMOVE_COMBO_PARTICIPANT':
			const { participantKey } = action;
			const participantRef = Base.db.ref(`combos/${parseInt(action.id, 10)}/participants/${participantKey}`);

			if (participantRef) {
				participantRef.remove();
			}

			return {
				...state,
			};

		case 'ADD_COMBO_PARTICIPANT':
			const participantRefEdit = Base.db.ref(`combos/${parseInt(action.id, 10)}/participants/${action.participantKey}`);

			console.log(action);

			if (participantRefEdit) {
				participantRefEdit.set({
					name: action.value,
					uid: action.uid,
				});
			}

			return {
				...state,
			};

		case 'TOGGLE_SHOW_ADD_PARTICIPANT_MODAL':
			return {
				...state,
				showAddParticipantModal: action.id ? action.id : false,
			};

		case 'SET_AUTH':
			return {
				...state,
				uid: action.uid,
			}

		case 'SET_COMBOS':
			return {
				...state,
				combos: action.combos,
			}

		default:
			return state;
	}
}

export default combos;
