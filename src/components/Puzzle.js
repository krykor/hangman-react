import React, { Component } from 'react'
import getPuzzle from '../api/requests/requests'

class Puzzle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			word: '',
			remainingGuesses: 5,
			guessedLetters: ['a', 'e', 'o'],
			puzzleState: ''
		}
	}

	puzzle() {
		let puzzle = ''
		this.state.word.forEach(letter => {
			if (this.state.guessedLetters.includes(letter) || letter === ' ') {
				puzzle += letter
			} else {
				puzzle += '*'
			}
		})

		this.setState({ puzzleState: puzzle })
	}

	async componentDidMount() {
		const puzzleState = await getPuzzle('2')
		this.setState({ word: puzzleState.toLowerCase().split('') })
		this.puzzle()
	}

	render() {
		const { puzzleState } = this.state
		return (
			<div className="App">
				<header className="App-header">
					<p>{puzzleState}</p>
				</header>
			</div>
		)
	}
}

export default Puzzle
