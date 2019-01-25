import React from 'react' 
import theme from '../theme'

const ModalPad = ({ match, history }) => {
	
	const item = theme[Number(match.params.color)]

	return (
		<div className="gallery-modal">
			<h3>
				{ item.title } 
				<button onClick={ history.goBack }>back</button>
			</h3> 
			<div className="gallery-img" style={{ background: item.color }}></div>
		</div>
	)}

export default ModalPad