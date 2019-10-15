import * as UserApiUtil from '../util/users_api_util';

export const RECEIVE_REQUESTERS = 'RECEIVE_REQUESTERS'

export const receiveRequesters = (requesters) => {
  return {
    type: RECEIVE_REQUESTERS,
    requesters
  }
}

export const fetchRequestersFromWalk = (walkId) => dispatch => {
  return UserApiUtil.fetchRequestersFromWalk(walkId)
  .then(requesters => dispatch(receiveRequesters(requesters)))
}

