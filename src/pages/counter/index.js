// import React from 'react';
import { connect } from 'react-redux'
// import ReHeader from '../../components/re-header';
// import { Layout } from 'antd';
import Counter from './component/counter';

const mapStateToProps = state => ({
	value: state
})

const mapDispatchToProps = dispatch => ({
	onIncrement: () => dispatch({ type: 'INCREMENT' }),
	onDecrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);
