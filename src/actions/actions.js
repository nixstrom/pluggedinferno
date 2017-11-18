let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const addComboParticipant = (id, value, uid) => {
	return {
		type: 'ADD_COMBO_PARTICIPANT',
		id,
		value,
		uid,
	}
}

export const editComboParticipant = (id, value, uid, participantKey) => {
	return {
		type: 'EDIT_COMBO_PARTICIPANT',
		id,
		value,
		uid,
		participantKey,
	}
}

export const removeComboParticipant = (id, participantKey) => {
  return {
    type: 'REMOVE_COMBO_PARTICIPANT',
    id,
	 participantKey,
  }
}

export const toggleShowAddParticipantModal = id => {
  return {
    type: 'TOGGLE_SHOW_ADD_PARTICIPANT_MODAL',
    id
  }
}

export const setCombos = (combos) => {
	return {
		type: 'SET_COMBOS',
		combos,
	}
}

export const setAuth = (uid) => {
	return {
		type: 'SET_AUTH',
		uid,
	}
}
