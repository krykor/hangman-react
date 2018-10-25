import React, { Component } from 'react'
import getPuzzle from '../api/requests/requests'

class StartGame extends Component {
	async startGame() {
		const puzzleState = await getPuzzle('2')
		this.props.getWord(puzzleState.toLowerCase().split(''))
	}

	componentDidMount() {
		this.startGame()
	}

	render() {
		return (
			<div>
				<button className="button" onClick={this.startGame.bind(this)}>
					Reset game
				</button>
			</div>
		)
	}
}

export default StartGame
