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

export const removeComboParticipant = (id, uid) => {
  return {
    type: 'REMOVE_COMBO_PARTICIPANT',
    id,
	 uid,
  }
}

export const toggleShowAddParticipantModal = id => {
  return {
    type: 'TOGGLE_SHOW_ADD_PARTICIPANT_MODAL',
    id
  }
}

export const setAuth = (uid) => {
	return {
		type: 'SET_AUTH',
		uid,
	}
}
