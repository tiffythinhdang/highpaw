import { connect } from 'react-redux';
import { createWalk, fetchWalks } from '../../actions/walk_actions';
import WalksIndex from './walks_index';

const mapStateToProps = state => {
  debugger
  return {
    walks: Object.values(state.entities.walks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWalk: () => dispatch(createWalk()),
    fetchWalks: () => dispatch(fetchWalks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndex)