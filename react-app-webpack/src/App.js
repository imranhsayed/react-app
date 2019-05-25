import React from 'react';
import './style.css';
import ThorImage from './images/thor.png';

class App extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			name: ''
		}
	}

	handleButtonClickEvent = ( event ) => {
		this.setState( { name: 'Imran' } );
	};

    render() {
        return (
            <React.Fragment>
                <h1>This is my Component</h1>
                <button onClick={this.handleButtonClickEvent}>Click Me</button>
                { this.state.name && <p>{this.state.name}</p> }

                <img src={ThorImage} alt="Thor Image"/>
            </React.Fragment>
        )
    }
}

export default App