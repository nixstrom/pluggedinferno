import Component from 'inferno-component';


class Button extends Component {

	render() {
		const { id, className, title, onButtonClick } = this.props;
		const handleClick = () => onButtonClick(id, title);


		return (
			<button
				className={className}
				onClick={handleClick}
			>
				{title}
			</button>
		);
	}

}

export default Button;
