import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../auth/signup';
import { updateAUser, fetchAUser } from '../../actions/user_actions';
import { clearSessionErrors } from '../../actions/session_actions';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAUser(this.props.match.params.id)
  }

  render() {
    if (!this.props.form) return null;
    return (
      <div className="edit-dog outer-container">
        <SignUp
          header={this.props.header}
          form={this.props.form}
          formType={this.props.formType}
          errors={this.props.errors}
          currentUser={this.props.currentUser}
          action={this.props.action}
          clearSessionErrors={this.props.clearSessionErrors} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    form: state.entities.users[userId],
    formType: "Update",
    header: "Update Profile",
    errors: state.errors.user,
    currentUser: state.session.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    action: (data) => dispatch(updateAUser(data)),
    fetchAUser: (id) => dispatch(fetchAUser(id)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);