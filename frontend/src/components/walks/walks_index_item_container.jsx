import { connect } from 'react-redux';
import { createWalk, fetchWalks } from '../../actions/walk_actions';
import { fetchDogsFromWalk } from '../../actions/dogs_action';
import WalksIndexItem from './walks_index_item';

const mapStateToProps = state => {
  // debugger
  return {
    dogs: Object.values(state.entities.dogs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDogsFromWalk: id => dispatch(fetchDogsFromWalk(id))
    // fetchDog: id => dispatch(fetchDog(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndexItem)