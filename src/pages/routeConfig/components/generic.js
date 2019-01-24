import React from 'react'
import { Link } from 'react-router-dom'

const Generic = (props) => {
	return (
		<ul>
			{
				props.routes && 
				props.routes.map(r => (
					<li key={r.id}>
						<Link to={r.path}>{r.linkName}</Link>
					</li>))
			}
		</ul>
	)
}

export default Generic