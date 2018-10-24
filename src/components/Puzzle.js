import React, { Component } from 'react'
import getPuzzle from '../api/requests/requests'

class Puzzle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			word: '',
			remainingGuesses: 5
		}
	}

	async componentDidMount() {
		const puzzleState = await getPuzzle('2')
		this.setState({ word: puzzleState.toLowerCase() })
	}

	render() {
		const { word } = this.state
		return (
			<div className="App">
				<header className="App-header">
					<p>{word}</p>
				</header>
			</div>
		)
	}
}

export default Puzzle
