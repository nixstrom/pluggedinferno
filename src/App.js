import * as Base from './services/base';
import Component from 'inferno-component';
import ComboCard from './containers/ComboCardContainer';
import SignUpModal from './containers/SignUpModalContainer';
import Loader from './components/loader';

import './App.css';


class App extends Component {
	constructor(props) {
		super(props);

		console.clear();

		this.handleGetAuth();

		this.state = {
			combos: {},
		};
	}

	componentDidMount() {
		const getCombos = this.props.handleGetCombos();

		Promise.resolve(getCombos).then((data) => {
			this.setState({
				combos: data
			});
		});
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

	componentWillReceiveProps(nextProps) {
		const getCombos = nextProps.handleGetCombos();

		Promise.resolve(getCombos).then((data) => {
			this.setState({
				combos: data
			});
		});
	}

	handleGetAuth() {
		const { onSetAuth } = this.props;
		const localUid = localStorage.getItem('uid');

		if (localUid) {
			onSetAuth(localUid);
		} else {
			Base.auth.signInAnonymously().then((data) => {
				onSetAuth(data.uid);
				localStorage.setItem('uid', data.uid);
			});
		}
	}

	handleAddFirebaseListeners() {

	}

	render() {
		const { showAddParticipantModal } = this.props;
		const { combos } = this.state;

		return (
			<div>
				<main className="main">
					{Object.keys(combos).length ?
						Array.from(combos).map(combo => (
							<ComboCard
								id={combo.key}
								title={combo.title}
								body={combo.body}
								endSignupTime={combo.endSignupTime}
								startComboTime={combo.startComboTime}
								participants={combo.participants}
							/>
						)
					) : <Loader/>}
				</main>

				{showAddParticipantModal &&
					<SignUpModal/>
				}
			</div>
		)
	}

}

export default App;
