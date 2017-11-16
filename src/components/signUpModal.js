import Component from 'inferno-component';
// import * as AppQueries from '../queries/AppQueries';

class SignUpModal extends Component {

	render() {
		const { onCloseButtonClick, onSubmit, combo, userName, isUserSignedUp, uid } = this.props;
		const { id, title } = combo;

		// textInput must be declared here so the ref callback can refer to it
  		let textInput;

		// TODO: validate input (should not accept empty strings)
		const handleSubmit = () => onSubmit(id, textInput.value, uid);
		const handleCloseClick = () => onCloseButtonClick();

		return (
			<aside className="signup">
				<h1>{title}</h1>

				<span className="signup__close-btn" onClick={handleCloseClick}>X</span>

				<div className="signup__form">
					<div className="signup__form-item--large">
						<input
							type="text"
							className="signup__input--large"
							placeholder={userName ? userName : 'Gamer nick'}
							autofocus
							data-js="signup-input"
							minLength="1"
							ref={(input) => { textInput = input; }}
							value={userName}
						/>
					</div>
					<div className="signup__form-item--large">
						<button
							className="card__button"
							style={{ width: '100%' }}
							onClick={handleSubmit}
						>
							{isUserSignedUp ? 'Rediger' : 'Tilmeld'}
						</button>
					</div>
				</div>
			</aside>
		);
	}

}

export default SignUpModal;
