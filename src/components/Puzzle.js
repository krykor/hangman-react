import React, { Component } from 'react'
import getPuzzle from '../api/requests/requests'

class Puzzle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			word: '',
			remainingGuesses: 5,
			guessedLetters: [],
			puzzleState: '',
			status: 'playing'
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

	calculateStatus() {
		const finished = this.state.word.every(
			letter => this.state.guessedLetters.includes(letter) || letter === ' '
		)

		if (this.state.remainingGuesses === 0) {
			this.setState({ status: 'failed' })
		} else if (finished) {
			this.setState({ status: 'finished' })
		} else {
			this.setState({ status: 'playing' })
		}
	}

	makeGuess(guess) {
		guess = guess.toLowerCase()
		const isUnique = !this.state.guessedLetters.includes(guess)
		const isBadGuess = !this.state.word.includes(guess)

		if (this.state.status !== 'playing') {
			return
		}

		if (isUnique && isBadGuess) {
			this.setState({ remainingGuesses: this.state.remainingGuesses - 1 })
		}

		if (isUnique) {
			this.setState({ guessedLetters: [...this.state.guessedLetters, guess] })
		}

		this.puzzle()
		this.calculateStatus()
	}

	async componentDidMount() {
		const puzzleState = await getPuzzle('2')
		this.setState({ word: puzzleState.toLowerCase().split('') })
		this.puzzle()

		window.addEventListener('keypress', e => {
			const guess = String.fromCharCode(e.charCode)
			this.makeGuess(guess)
		})
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
