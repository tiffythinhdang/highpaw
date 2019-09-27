import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const fetchUserFromRequest = (requestId) => dispatch => {
  // debugger
  UserApiUtil.fetchUserFromRequest(requestId)
    .then(
      user => dispatch(receiveUser(user))

    )
}