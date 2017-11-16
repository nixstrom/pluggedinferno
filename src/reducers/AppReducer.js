import * as Base from '../services/base';
const dbRef = Base.db.ref('/');

const combos = (state = [], action) => {
	const currentUid = state.uid;

	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
				? {...todo, completed: !todo.completed}
				: todo
			);

		case 'TOGGLE_ADD_PARTICPANT':
			return state.map(todo =>
				(todo.id === action.id)
				? {...todo, completed: !todo.completed}
				: todo
			);

		case 'ADD_COMBO_PARTICIPANT':
			const { id, value, uid } = action;

			const currentUid = state.uid;

			const newComboState =
				state.combos.map(combo =>
					(combo.id === action.id) ?
					{
						...combo,
						participants:
							[
							...combo.participants,
							{
								name: action.value,
								uid: uid,
							},
						]
					}
					: combo
			);
			// const comboRef = Base.db.ref(`/combos/0/participants/`).push();
			//
			// comboRef.set({
			// 	name: value,
			// 	uid: uid,
			// });

			return {
				...state,
				combos: newComboState,
				userName: action.value,
			};

			case 'REMOVE_COMBO_PARTICIPANT':
				const newComboStateRemove =
					state.combos.map(combo =>
						(combo.id === action.id) ?
						{
							...combo,
							participants: combo.participants.filter((participant) => participant.uid === currentUid)
						}
						: combo
				);

				dbRef.set({
					combos: newComboStateRemove,
				});

				return {
					...state,
					combos: newComboStateRemove,
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

		default:
			return state;
	}
}

export default combos;
