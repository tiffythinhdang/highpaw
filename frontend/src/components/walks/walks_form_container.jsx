import { connect } from 'react-redux';
import { createWalk } from '../../actions/walk_actions';
// import { fetchDog } from '../../actions/dog_actions';
import WalksForm from './walks_form';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWalk: () => dispatch(createWalk()),
    // fetchDog: id => dispatch(fetchDog(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalksForm)