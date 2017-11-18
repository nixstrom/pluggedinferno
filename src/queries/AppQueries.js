export const getIsSelfSignedUp = (state) => state;

export const getIsUserSignedUp = (participants, uid) => {
	const user = participants.filter((participant) => participant.uid === uid)[0];
	return Boolean(user);
}

export const getIsUserReallySignedUp = (participants, key) => {
	const user = participants.filter((participant) => participant.participantKey === key)[0];
	return Boolean(user);
}

export const getUserFromCombo = (participants, uid) => {
	return participants.filter((participant) => participant.uid === uid)[0].name;
}

export const getUserKeyFromCombo = (participants, uid) => {
	const user = participants.filter((participant) => participant.uid === uid)[0];
	return user ? user.participantKey : '';
}
