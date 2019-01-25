import React from 'react' 
import theme from '../theme'

const ImgPad = ({ match, history }) => {
	
	const item = theme[Number(match.params.color)]

	return (
		<div>
			<h3>
				{ item.title } 
				<button onClick={ history.goBack }>back</button>
			</h3> 
			<div className="gallery-img" style={{ background: item.color }}></div>
		</div>
	)}

export default ImgPad