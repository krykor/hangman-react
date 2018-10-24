import React, { Component } from 'react'
import './App.css'

import Puzzle from './components/Puzzle'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Puzzle />
				</header>
			</div>
		)
	}
}

export default App
