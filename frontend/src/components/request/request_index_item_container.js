import { connect } from 'react-redux';
import { fetchDogFromRequest } from '../../actions/dogs_action';
import { deleteRequest } from '../../actions/request_actions'
import RequestIndexItem from './request_index_item';

const mapStateToProps = state => {
  let dog = Object.values(state.entities.dogs)
  
  return {
    dog
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDogFromRequest: requestId => dispatch(fetchDogFromRequest(requestId)),
    delete: id => dispatch(deleteRequest(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestIndexItem)