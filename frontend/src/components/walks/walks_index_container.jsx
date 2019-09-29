import { connect } from 'react-redux';
import { fetchWalks } from '../../actions/walk_actions';
import WalksIndex from './walks_index';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    walks: Object.values(state.entities.walks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWalks: () => dispatch(fetchWalks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalksIndex)