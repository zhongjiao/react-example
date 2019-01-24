import React from 'react'
import { Link } from 'react-router-dom'

const MainHeadList  = ({ routes }) => {
				return routes.length && 
				routes.map(m => (
					<li key={m.id}><Link to={m.path}>{m.linkName}</Link></li>
				))
			}
export default MainHeadList