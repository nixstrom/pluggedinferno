const combos = (state = [], action) => {
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
			return {
				...state,
				combos: state.combos.map(combo =>
						(combo.id === action.id) ?
						{
							...combo,
							participants:
								Boolean(combo.participants.filter((participant) => participant.isUser === true)[0]) ?
								[
									...combo.participants.filter((participant) => !participant.isUser),
									{
										name: action.value,
										isUser: true,
									},
								] : [
									...combo.participants,
									{
										name: action.value,
										isUser: true,
									},
								],
						}
						: combo
				),
				userName: action.value,
			};

			case 'REMOVE_COMBO_PARTICIPANT':
				return {
					...state,
					combos: state.combos.map(combo =>
							(combo.id === action.id) ?
							{
								...combo,
								participants: combo.participants.filter((participant) => !participant.isUser)
							}
							: combo
					),
				};

		case 'TOGGLE_SHOW_ADD_PARTICIPANT_MODAL':
			return {
				...state,
				showAddParticipantModal: action.id ? action.id : false,
			};

		default:
			return state;
	}
}

export default combos;
