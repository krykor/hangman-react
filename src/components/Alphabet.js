import React, { Component } from 'react'
import en from '../api/alphabet/en.json'

class Alphabet extends Component {
	constructor(props) {
		super(props)
		this.state = {
			letters: [],
			charakters: ''
		}
	}

	componentDidMount() {
		this.setState({ letters: en })
		document.addEventListener('click', () => {
			this.state.charakters && this.props.chooseLetter(this.state.charakters)
		})
	}

	componentDidUpdate(nextProps) {
		this.props.reset !== nextProps.reset && this.setState({ charakters: '' })
	}

	letterClick = letter => {
		this.setState({ charakters: letter })
	}

	render() {
		const { letters } = this.state
		return (
			<div className="letters">
				{letters.map((letter, index) => (
					<span key={`letter-${index}`} onClick={() => this.letterClick(letter)}>
						{letter}
					</span>
				))}
			</div>
		)
	}
}

export default Alphabet
