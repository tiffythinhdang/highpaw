import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import RequestSentModal from './request_sent_modal';

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RequestSentModal)