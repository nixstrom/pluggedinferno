export const getIsSelfSignedUp = (state) => state;

export const getIsUserSignedUp = (participants) => {
	return Boolean(participants.filter((participant) => participant.isUser === true)[0]);
}
