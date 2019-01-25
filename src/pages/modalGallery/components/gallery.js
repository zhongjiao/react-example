import React from 'react'
import { Link } from 'react-router-dom'
import theme from '../theme'

const Gallery = (props) => {
	const { history } = props
	return (
		<div>
			<button onClick={ history.goBack }>back</button>
			<ul>
				{theme.map((t, i) => (
					<li key={t.id}>
						<div className="little-block" style={{ background: t.color }}></div>
						<Link to={{
							pathname: `/modal-gallery/img/${i}`,
							state: { modal: true }
						}}>{t.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)}

export default Gallery