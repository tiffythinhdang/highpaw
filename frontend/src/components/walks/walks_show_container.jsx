import { connect } from 'react-redux';
import { deleteWalk } from '../../actions/walk_actions';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import WalksShow from './walks_show';

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
    deleteWalk: walkId => dispatch(deleteWalk(walkId)),
    fetchDogsFromWalk: id => dispatch(fetchDogsFromWalk(id))
    // fetchDog: id => dispatch(fetchDog(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksShow)