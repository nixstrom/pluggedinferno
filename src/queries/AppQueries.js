export const getIsSelfSignedUp = (state) => state;

export const getIsUserSignedUp = (participants, uid) => {
	return Boolean(participants.filter((participant) => participant.uid === uid)[0]);
}

export const getUserFromCombo = (participants, uid) => {
	return participants.filter((participant) => participant.uid === uid)[0].name;
}
