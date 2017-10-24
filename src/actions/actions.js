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

export const addComboParticipant = (id, value) => {
  return {
    type: 'ADD_COMBO_PARTICIPANT',
    id,
	 value
  }
}

export const removeComboParticipant = (id) => {
  return {
    type: 'REMOVE_COMBO_PARTICIPANT',
    id
  }
}

export const toggleShowAddParticipantModal = id => {
  return {
    type: 'TOGGLE_SHOW_ADD_PARTICIPANT_MODAL',
    id
  }
}
