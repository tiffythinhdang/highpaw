import { connect } from 'react-redux'
import Map from './map';

const mapStateToProps = state => {
  return {
    socket: state.socket,
    currentUser: state.session.user.id
  }
}

export default connect(
  mapStateToProps
)(Map)