import React, { Component } from 'react'

class Messsage extends Component {
	statusMessage() {
		let { status, remainingGuesses, word } = this.props.puzzle
		if (status === 'playing') {
			return `Guesses left: ${remainingGuesses}`
		} else if (status === 'failed') {
			return `Nice try! The word was "${word.join('')}".`
		} else {
			return 'Great work! You guessed the word.'
		}
	}

	render() {
		return (
			<div>
				<p>{this.statusMessage()}</p>
			</div>
		)
	}
}

export default Messsage
