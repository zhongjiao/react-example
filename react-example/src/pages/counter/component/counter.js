import React, { Component } from 'react'
import ReHeader from '../../../components/re-header'
import { Layout } from 'antd'
// import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value.counter % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    const { Content } = Layout
    const { counter } = value
    return (
      <Layout className="appLayoutBg">
			  <ReHeader className="header" isBack title="计数" />
        <Content>
          <p>
            Clicked: {counter} times
            {' '}
            <button onClick={onIncrement}>
              +
            </button>
            {' '}
            <button onClick={onDecrement}>
              -
            </button>
            {' '}
            <button onClick={this.incrementIfOdd}>
              Increment if odd
            </button>
            {' '}
            <button onClick={this.incrementAsync}>
              Increment async
            </button>
          </p>
        </Content>
      </Layout>
    )
  }
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

export default Counter
