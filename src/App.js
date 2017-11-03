import Component from 'inferno-component';
import ComboCard from './containers/ComboCardContainer';
import SignUpModal from './containers/SignUpModalContainer';
import Base from './services/base';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);

		console.clear();
	}

	componentWillMount() {
		console.log('componentWillMount');

		//this.ref = Base.synState();
	}

	shouldComponentUpdate(nextProps) {
		return true;
		//return Boolean(nextProps.combos[0].participants.length !== this.props.combos[0].participants.length);
	}

	componentDidUpdate(nextProps) {
		// TODO: This is a mad way to do it, of course!
		if (this.props.showAddParticipantModal !== nextProps.showAddParticipantModal) {
			setTimeout(() => document.body.classList.toggle('active-popup', !nextProps.showAddParticipantModal), 1);
		}
	}

	render() {
		const { combos, showAddParticipantModal } = this.props;

		return (
			<div>
				<main className="main">
					{combos.map(combo => (
						<ComboCard
							id={combo.id}
							title={combo.title}
							body={combo.body}
							endSignupTime={combo.endSignupTime}
							startComboTime={combo.startComboTime}
							participants={combo.participants}
						/>
					))}
				</main>

				{showAddParticipantModal &&
					<SignUpModal/>
				}
			</div>
		)
	}

}

export default App;
