import React from 'react';

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
		return(
			<div>
				<h1>This is my React Component</h1>
				<button onClick={this.handleButtonClickEvent}>Click Me</button>
				{ this.state.name && <p>{this.state.name}</p> }
			</div>
		);
	}
}

export default App