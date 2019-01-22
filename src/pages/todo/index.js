import React, { Component, Suspense, lazy } from 'react';
import ReHeader from '../../components/re-header';
import AddToDo from './components/addTodo'
// import FilterLists from './containers/filterLists'
import Footer from './components/footer'
import { Layout } from 'antd';
import { ThemeContext, themes } from './theme-context'

const FilterLists = lazy(() => import('./containers/filterLists'))

// const Todo = () => {
class Todo extends Component {
	// componentDidCatch(error, info) {
	// 	console.log('componentDidCatch: ', error, info)
	// }
	componentDidMount() {
		// console.log('componentDidMount: Todo')
	}
	componentWillMount() {
		// console.log('componentWillMount: Todo')
	}
	componentWillUnmount() {
		// console.log('componentWillUnmount: Todo')
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log('componentDidUpdate: Todo')
	}
	shouldComponentUpdate(nextProps, nextState) {
		// console.log('shouldComponentUpdate: Todo')
		// if (nextState.v.length > 10) return false
		return true
	}
	constructor() {
		super()
		this.toggleColor = () => {
			this.setState(state => {
				return ({
				theme:
					state.theme === themes.dark
						? themes.white
						: themes.dark
			})})
		}
		this.state = {
			theme: themes.dark,
			toggleColor: this.toggleColor
		}
		this.header = React.createRef()
	}
	render() {
		const { Content } = Layout
		// const ThemeContext = React.createContext()

		return (
			<Layout className="appLayoutBg">
				<ReHeader className="header" isBack title="todo" />
				<Content>
					<AddToDo />
					<Suspense fallback={<div>Loading...</div>}>
						<FilterLists />
					</Suspense>
					<ThemeContext.Provider value={this.state}>
						<Footer />
					</ThemeContext.Provider>
					<span ref={this.header}>header</span>
					<button onClick={() => console.log(this.header)}>click</button>
				</Content>
			</Layout>
		)
	}
}

export default Todo;