export default ({ name, id, isUser, onComboEntryClick }) => {
	const className = isUser ? 'card__list-item is-user' : 'card__list-item';
	const handleClick = isUser ? () => onComboEntryClick(id) : null;

	return (
		<li
			className={className}
			onClick={handleClick}
		>
			{name}
		</li>
	);
};
