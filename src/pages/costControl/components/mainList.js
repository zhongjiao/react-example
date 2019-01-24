import React from 'react'
import Generic from '../components/generic'
import { Route } from 'react-router-dom'

const MainList = ({ routes }) => {
				let index = 0;
				return routes.map(m => (
					<div key={m.id+(++index)}>
						<Route
							path={m.path}
							render={props => (
								<div>
									<h3>{m.linkName}</h3>
									<Generic {...props} routes={m.routes} />
								</div>
							)}
						/>
						{m.routes && m.routes.map(r => (
							<Route 
								key={m.id+(++index)}
								path={r.path}
								render={props => (
										<h3>{r.linkName}</h3>
								)}/>))}
					</div>
				))
			}
export default MainList