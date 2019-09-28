import { connect } from 'react-redux';
import { createWalk } from '../../actions/walk_actions';
import { fetchDogsFromUser } from '../../actions/dogs_action';
import WalksForm from './walks_form';
import { receiveRoom } from '../../actions/socket_actions';

const mapStateToProps = state => {
  let currentUser = state.session.user;
  let dogs = Object.values(state.entities.dogs)
  // dogs = dogs.map(dog => dog.user === currentUser.id) 
  return {
    currentUser,
    dogs,
    socket: state.socket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWalk: (walk) => dispatch(createWalk(walk)),
    fetchDogsFromUser: userId => dispatch(fetchDogsFromUser(userId)),
    receiveRoom: (room) => dispatch(receiveRoom(room)) 
    // fetchDog: id => dispatch(fetchDog(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalksForm)