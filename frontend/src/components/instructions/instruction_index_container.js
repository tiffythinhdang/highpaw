import { connect } from 'react-redux';

import InstructionIndex from './instruction_index';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.user.id
  }
};

export default connect(
  mapStateToProps,
  null
)(InstructionIndex);
