import { connect } from 'react-redux';

import InstructionIndex from './instruction_index';

const mapStateToProps = state => {
  let currentUserId = null;
  if (state.session.user) currentUserId = state.session.user.id
  return {
    currentUserId
  }
};

export default connect(
  mapStateToProps,
  null
)(InstructionIndex);
