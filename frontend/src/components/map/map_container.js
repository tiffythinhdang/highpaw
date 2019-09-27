import { connect } from 'react-redux'
import Map from './map';

const mapStateToProps = state => {
  
  let currentUser;

  if (state.session.user) {
    currentUser = state.session.user.id
  }

  return {
    socket: state.socket,
    currentUser
  }
}

export default connect(
  mapStateToProps
)(Map)