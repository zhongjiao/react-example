import { connect } from 'react-redux'
import Link from '../components/link'
import { setVisibilityFilter } from '../action'

// const mapDispatchToProps = (dispatch, ownProps) => ({
// 	onClick: dispatch(setVisibilityFilter(ownProps.type))
// })

export default connect(null, { setVisibilityFilter })(Link)
