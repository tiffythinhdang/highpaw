
import * as RequestApiUtil from '../util/request_api_util';
export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const RECEIVE_REQUEST_ERRORS = 'RECEIVE_REQUEST_ERRORS';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';

const receiveRequests = (requests) => ({
  type: RECEIVE_REQUESTS,
  requests
})

const receiveRequest = (request) => ({
  type: RECEIVE_REQUEST,
  request
})

const receiveRequestErrors = (errors) => ({
  type: RECEIVE_REQUEST_ERRORS,
  errors
})

const removeRequest = requestId => ({
  type: REMOVE_REQUEST,
  requestId
})

export const sendRequest = walkId => dispatch => (
  RequestApiUtil.sendRequest(walkId)
    .then(
      request => dispatch(receiveRequest(request)),
      err => dispatch(receiveRequestErrors(err.response.data))
    )
)

export const modifyRequest = request => dispatch => (
  RequestApiUtil.modifyRequest(request)
    .then(
      request => dispatch(receiveRequest(request)),
      err => dispatch(receiveRequestErrors(err.response.data))
    )
)

export const fetchRequests = walkId => dispatch => (
  RequestApiUtil.fetchRequests(walkId)
    .then(
      requests =>  dispatch(receiveRequests(requests)),
      err => dispatch(receiveRequestErrors(err.response.data))
    )
)

export const fetchActiveRequest = userId => dispatch => (
  RequestApiUtil.fetchActiveRequest(userId)
    .then(
      request => dispatch(receiveRequest(request)),
      err => dispatch(receiveRequestErrors(err.response.data))
    )
)

export const deleteRequest = requestId => dispatch => (
  RequestApiUtil.deleteRequest(requestId)
    .then(request => dispatch(removeRequest(requestId)))
)

window.fetchRequests = fetchRequests;
window.sendRequest = sendRequest;
window.modifyRequest = modifyRequest;