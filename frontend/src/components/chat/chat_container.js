import { connect } from 'react-redux';
import Chat from './chat';

const mapStateToProps = state => {
  return {
    currentUserName: state.session.user.name
  }
}

export default connect(
  mapStateToProps
)(Chat);