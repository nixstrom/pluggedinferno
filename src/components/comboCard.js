import Component from 'inferno-component';
import ComboEntry from './comboEntry';
import Button from './button';

import * as AppQueries from '../queries/AppQueries';

class ComboCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isUserSignedUp: AppQueries.getIsUserSignedUp(props.participants)
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			isUserSignedUp: AppQueries.getIsUserSignedUp(nextProps.participants)
		});
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.state.isUserSignedUp !== nextState.isUserSignedUp;
	// }

	render() {
		const {
			id,
			title,
			body,
			endSignupTime,
			startComboTime,
			participants,
			onSignupButtonClick,
			onCancelButtonClick,
			onComboEntryClick,
		} = this.props;

		const { isUserSignedUp } = this.state;

		return (
			<article className="card">
				<header>
					<h1>{title}</h1>
					<div className="card__info">
						<div className="card__info-item">
							<div className="card__info-item-inner">
								<strong>Regler</strong>
							</div>
							<div
								className="card__info-item-inner"
								dangerouslySetInnerHTML={{__html: body}}
							/>
						</div>
						<div className="card__info-item">
							<div className="card__info-item-inner">
								<strong>Tilmelding slutter</strong>
							</div>
							<div className="card__info-item-inner">
								{endSignupTime}
							</div>
						</div>
						<div className="card__info-item">
							<div className="card__info-item-inner">
								<strong>Combo starter {isUserSignedUp}</strong>
							</div>
							<div className="card__info-item-inner">
								{startComboTime}
							</div>
						</div>
					</div>
				</header>
				<ul className="card__list" data-js="participants-list">
					{
						participants.map(data =>
							<ComboEntry
								name={data.name}
								id={id}
								isUser={data.isUser}
								onComboEntryClick={isUserSignedUp ? onComboEntryClick : null}
							/>
						)
					}
				</ul>

				{isUserSignedUp &&
					<Button
						id={id}
						className='card__button card__button--secondary'
						onButtonClick={onCancelButtonClick}
						title='Afmeld'
					/>
				}

				{!isUserSignedUp &&
					<Button
						id={id}
						className='card__button'
						onButtonClick={onSignupButtonClick}
						title='Tilmeld'
					/>
				}

			</article>
		);
	};
}

export default ComboCard;
