import { connect } from 'react-redux'
import Lists from '../components/lists'

const mapStateToProps = ({ todo }) => ({
	lists: todo
})

export default connect(
	mapStateToProps
)(Lists)
