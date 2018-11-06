import React from 'react'

const Puzzle = ({ puzzleState }) => {
	return (
		<div className="puzzle">
			{puzzleState &&
				puzzleState.map((word, index) => (
					<div className="word" key={`${index}-div`}>
						{word.split('').map((letter, index) => (
							<span key={index} className={letter !== '*' ? 'puzzle-transition' : null}>
								{letter}
							</span>
						))}
					</div>
				))}
		</div>
	)
}

export default Puzzle
