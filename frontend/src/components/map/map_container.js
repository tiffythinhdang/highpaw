import { connect } from 'react-redux'
import Map from './map';

const mapStateToProps = state => {
  
  let currentUser;
  let userName;
  if (state.session.user) {
    currentUser = state.session.user.id;
    userName = state.session.user.name
  }

  return {
    socket: state.socket,
    currentUser,
    userName
  }
}

export default connect(
  mapStateToProps
)(Map)