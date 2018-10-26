import React, { Component } from 'react'
import Message from './Message'
import StartGame from './StartGame'
import Puzzle from './Puzzle'
import Alphabet from './Alphabet'

class Hangman extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	getWord(word) {
		this.setState({
			word,
			remainingGuesses: 5,
			guessedLetters: [],
			puzzleState: '',
			status: 'playing',
			reset: true
		})
		this.puzzle()
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

		if (isUnique) {
			this.setState({ guessedLetters: [...this.state.guessedLetters, guess] })
		}

		if (isUnique && isBadGuess) {
			this.setState({ remainingGuesses: this.state.remainingGuesses - 1 })
		}

		this.puzzle()
		this.calculateStatus()
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

		this.setState({ puzzleState: puzzle.split(' ') })
	}

	chooseLetter = character => {
		this.makeGuess(character)
		this.setState({ reset: false })
	}

	componentDidMount() {
		window.addEventListener('keypress', e => {
			const guess = String.fromCharCode(e.charCode)
			this.makeGuess(guess)
		})
	}

	render() {
		const { puzzleState } = this.state
		return (
			<div className="App">
				<Puzzle puzzleState={puzzleState} />
				<Alphabet
					chooseLetter={character => this.chooseLetter(character)}
					reset={this.state.reset}
				/>
				<Message puzzle={this.state} />
				<StartGame getWord={word => this.getWord(word)} />
			</div>
		)
	}
}

export default Hangman
