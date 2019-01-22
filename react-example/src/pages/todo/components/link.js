import React, { Component } from 'react'
import { ThemeContext } from '../theme-context'

// const Links = (prop) => {
class Links extends Component {
	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	this.btn.style.color = this.context;
	// }
	render() {

		const { children, setVisibilityFilter, type } = this.props
		return (
			<ThemeContext.Consumer>
				{({theme, toggleColor}) => (
					<button 
						// ref={node => this.btn = node}
						style={{color: theme}}
						onClick={() => {
							toggleColor()
							setVisibilityFilter(type)
						}
					}>
						{ children }
					</button>
				)}
			</ThemeContext.Consumer>
			// <button 
			// 	// ref={node => this.btn = node}
			// 	style={{color:this.context}}
			// 	onClick={() => {
			// 			setVisibilityFilter(type)
			// 		}
			// }>
			// 	{ children }
			// </button>
		)
	}
}

// Links.contextType = ThemeContext

export default Links