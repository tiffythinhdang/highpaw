import { connect } from 'react-redux';
import { createWalk, fetchWalks } from '../../actions/walk_actions';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import WalksIndex from './walks_index';

const mapStateToProps = state => {
  // debugger;
  return {
    currentUser: state.session.user,
    walks: Object.values(state.entities.walks),
    // walks: state.entities.walks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWalk: () => dispatch(createWalk()),
    fetchWalks: () => dispatch(fetchWalks()),
    fetchDogsFromWalk: id => dispatch(fetchDogsFromWalk(id))
    // fetchDog: id => dispatch(fetchDog(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndex)