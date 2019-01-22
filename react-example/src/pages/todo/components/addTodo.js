import React, { Component } from 'react'
import { addToDo } from '../action'
import { connect } from 'react-redux'

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.listRef = React.createRef()
		this.state = { v: '' }
	}
	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('getSnapshotBeforeUpdate: ', prevProps, prevState, this.listRef)
	// 	const list = this.listRef.current;
	// 	return list.scrollHeight - list.scrollTop;
	// }
	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log('componentDidUpdate: AddTodo')
	}
	shouldComponentUpdate(nextProps, nextState) {
		// console.log('shouldComponentUpdate: AddTodo')
		// if (nextState.v.length > 10) return false
		return true
	}
	componentDidMount() {
		// console.log('componentDidMount: AddTodo')
	}
	componentWillMount() {
		// console.log('componentWillMount: AddTodo')
	}
	componentWillUnmount() {
		// console.log('componentWillUnmount: AddTodo')
	}
	render() {
		let input
		return (
			<form onSubmit={e => {
				e.preventDefault()
				if(input.value.trim()) this.props.dispatch(addToDo(input.value.trim()))
				input.value = ''
				this.setState({v: ''})
			}}>
				<input 
					ref={node => input = node} 
					onInput={e => {
							this.setState({
								v: e.target.value
							})
						}
					} type="text"/>
					{this.state.v}
				<button type="submit" ref={this.listRef}>AddToDo</button>
			</form>)
	}
}

export default connect()(AddTodo)